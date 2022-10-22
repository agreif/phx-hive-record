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
    Model.Inspection.changeset(%Model.Inspection{}, attrs)
    |> put_change(:hive_id, hive.id)
    |> Repo.insert
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
      where: i.id == ^inspection_id and l.user_id == ^user_id,
      select: {i, h, l}
    Repo.all(query) |> List.first
  end

  def update_inspection(inspection_id, attrs, user_id) do
    {inspection, hive, location} = get_inspection_with_hive_and_location(inspection_id, user_id)
    changeset = Model.Inspection.changeset(inspection, attrs)
    if changeset.valid? do
      {Repo.update(changeset), hive, location}
    else
      {{:error, changeset}, hive, location}
    end
  end


end
