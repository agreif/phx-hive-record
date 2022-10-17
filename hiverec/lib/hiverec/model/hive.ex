defmodule Hiverec.Model.Hive do
  @moduledoc """
  Hive business logic.

  Generated with:
  $ mix phx.gen.schema --no-migration Model.Hive hives location_id:references:locations name:string:unique
  """

  use Ecto.Schema
  import Ecto.Changeset
  alias Hiverec.{Model}
  # alias Hiverec.{Model, Repo}
  # import Ecto.Query, only: [from: 2]

  schema "hives" do
    field :name, :string
    belongs_to :location, Model.Location

    timestamps()
  end

  @doc false
  def changeset(hive, attrs) do
    hive
    |> cast(attrs, [:name], empty_values: [])
    |> Model.Common.validate_required_with_change([:name])
    |> unique_constraint(:name)
    |> assoc_constraint(:location)
  end

end
