defmodule Hiverec.Model.Location do
  @moduledoc """
  Location Model.
  """

  use Ecto.Schema
  import Ecto.{Changeset, Query}
  alias Hiverec.Repo
  alias Hiverec.Model

  @derive {Jason.Encoder, only: [:id, :name]}
  schema "locations" do
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(location, attrs) do
    location
    |> cast(attrs, [:name])
    |> validate_required([:name])
  end

  def all_locations do
    query = from t in Model.Location, order_by: t.name
    Repo.all(query)
  end
end
