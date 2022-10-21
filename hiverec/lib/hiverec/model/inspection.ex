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
    hive = Model.Hive.get_hive(hive_id, user_id)
    Model.Inspection.changeset(%Model.Inspection{}, attrs)
    |> put_change(:hive_id, hive.id)
    |> Repo.insert
  end

  def delete_inspection(inspection_id, user_id) do
    {inspection, hive} = get_inspection_with_hive(inspection_id, user_id)
    result = Repo.delete(inspection)
    {result, hive}
  end

  def get_inspection_with_hive(inspection_id, user_id) do
    query = from l in Model.Location,
      join: h in Model.Hive,
      on: l.id == h.location_id,
      join: i in Model.Inspection,
      on: h.id == i.hive_id,
      where: i.id == ^inspection_id and l.user_id == ^user_id,
      select: {i, h}
    Repo.all(query) |> List.first
  end



end
