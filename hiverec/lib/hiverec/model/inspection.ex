defmodule Hiverec.Model.Inspection do
  @moduledoc """
  Inspection business logic.

  Generated with:
  $ mix phx.gen.schema Model.Inspection inspections hive_id:references:hives date:date:unique
  """

  use Ecto.Schema
  import Ecto.Changeset
  alias Hiverec.{Model, Repo}
  import Ecto.Query, only: [from: 2]

  schema "inspections" do
    field :date, :date
    belongs_to :hive, Model.Hive

    timestamps()
  end

  @doc false
  def changeset(inspection, attrs) do
    inspection
    |> cast(attrs, [:date])
    |> validate_required([:date])
    |> unique_constraint([:hive_id, :date])
    |> assoc_constraint(:hive)
  end

  def create_inspection(attrs, hive_id, user_id) do
    {hive, _} = Model.Hive.get_hive_with_location(hive_id, user_id)
    insparam_types = Model.InsparamType.get_insparam_types(user_id)
    changeset =
      Model.Inspection.changeset(%Model.Inspection{}, attrs)
      |> put_change(:hive_id, hive.id)
      |> Model.Insparam.validate_fields(attrs, insparam_types)
    if changeset.valid? do
      Repo.transaction(fn ->
        {:ok, inspection} = Repo.insert(changeset)
        insparam_types
        |> Enum.each(fn ipt ->
          value = get_value(attrs, ipt)
          Model.Insparam.create_insparam(inspection, ipt, value)
        end)
      end)
    else
      {:error, changeset}
    end
  end

  defp get_value(attrs, insparam_type) do
    str = Map.get(attrs, to_string(insparam_type.id))
    case insparam_type.type do
      "int" -> Integer.parse(str) |> Tuple.to_list |> Enum.at(0)
      "bool" -> if(str, do: true, else: false)
      "string" -> str
      "text" -> str
      "dropdown" -> str
    end
  end

  def delete_inspection(inspection_id, user_id) do
    {inspection, hive, _} = get_inspection_with_hive_and_location(inspection_id, user_id)
    result = Repo.delete(inspection)
    {result, hive}
  end

  def get_inspection_with_hive_and_location(inspection_id, user_id) do
    query = from l in Model.Location,
      join: h in Model.Hive,
      on: l.id == h.location_id,
      join: i in Model.Inspection,
      on: h.id == i.hive_id,
      left_join: ip in Model.Insparam,
      on: i.id == ip.inspection_id,
      where: i.id == ^inspection_id and l.user_id == ^user_id,
      select: [i, h, l, ip]
    rows = Repo.all(query)
    [inspection, hive, location, _] = rows |> List.first
    insparams = rows |> Enum.map(&(Enum.at(&1, 3)))
    {inspection, hive, location, insparams}
  end

  def update_inspection(inspection_id, attrs, user_id) do
    {inspection, hive, location, insparams} = get_inspection_with_hive_and_location(inspection_id, user_id)
    tuples = Model.Insparam.get_insparams_with_types(inspection_id, user_id)
    insparam_types = Model.InsparamType.get_insparam_types(user_id)
    changeset =
      Model.Inspection.changeset(inspection, attrs)
      |> Model.Insparam.validate_fields(attrs, insparam_types)
    if changeset.valid? do
      Repo.transaction(fn ->
        # update inspection
        {:ok, _} = Repo.update(changeset)
        # update persisted insparams
        tuples
        |> Enum.each(fn {ip, ipt} ->
          value = get_value(attrs, ipt)
          change(ip)
          |> put_change(:value, %{"value" => value})
          |> Repo.update
        end)
        # insert missing insparams
        insparam_types
        |> Enum.reject(fn ipt ->
          Enum.find(tuples, fn {_, ipt2} -> ipt.id == ipt2.id end)
        end)
        |> Enum.each(fn ipt ->
          value = get_value(attrs, ipt)
          Model.Insparam.create_insparam(inspection, ipt, value)
        end)
      end)
      {{:ok, inspection}, hive, location}
    else
      {{:error, changeset}, hive, location, insparams}
    end
  end


end
