defmodule Hiverec.Model.Hive do
  @moduledoc """
  Hive business logic.

  Generated with:
  $ mix phx.gen.schema --no-migration Model.Hive hives location_id:references:locations name:string:unique
  """

  use Ecto.Schema
  import Ecto.Changeset
  alias Hiverec.{Model, Repo}
  import Ecto.Query, only: [from: 2]

  schema "hives" do
    field :name, :string
    belongs_to :location, Model.Location

    timestamps()
  end

  @doc false
  def changeset(hive, attrs) do
    hive
    |> cast(attrs, [:name], empty_values: [])
    |> Model.Common.validate_required_with_change(:name)
    |> unique_constraint(:name)
    |> assoc_constraint(:location)
  end

  def get_hive(hive_id, user_id) do
    query = from l in Model.Location,
      join: h in Model.Hive,
      on: l.id == h.location_id,
      where: h.id == ^hive_id and l.user_id == ^user_id,
      select: h
    Repo.all(query) |> List.first
  end

  def get_hive_with_location(hive_id, user_id) do
    query = from l in Model.Location,
      join: h in Model.Hive,
      on: l.id == h.location_id,
      where: h.id == ^hive_id and l.user_id == ^user_id,
      select: {h, l}
    Repo.all(query) |> List.first
  end

  def create_hive(attrs, location_id, user_id) do
    location = Model.Location.get_location(location_id, user_id)
    Model.Hive.changeset(%Model.Hive{}, attrs)
    |> put_change(:location_id, location.id)
    |> Repo.insert
  end

  def update_hive(hive_id, attrs, user_id) do
    hive = get_hive(hive_id, user_id)
    changeset = Model.Hive.changeset(hive, attrs)
    if changeset.valid? do
      Repo.update(changeset)
    else
      {:error, changeset}
    end
  end

  def delete_hive(hive_id, user_id) do
    {hive, location} = get_hive_with_location(hive_id, user_id)
    result = Repo.delete(hive)
    {result, location}
  end
end
