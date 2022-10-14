defmodule Hiverec.Model.Location do
  @moduledoc """
  Location Model.
  """

  use Ecto.Schema
  import Ecto.Changeset
  alias Hiverec.Model

  @derive {Jason.Encoder, only: [:id, :name]}
  schema "locations" do
    field :name, :string
    belongs_to :user, Model.User

    timestamps()
  end

  @doc false
  def changeset(location, attrs) do
    location
    |> cast(attrs, [:name])
    |> validate_required([:name])
    |> assoc_constraint(:user)
  end

end
