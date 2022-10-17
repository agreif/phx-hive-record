defmodule Hiverec.Model.Location do
  @moduledoc """
  Location Model.
  """

  use Ecto.Schema
  import Ecto.Changeset
  alias Hiverec.{Model, Repo}
  import Ecto.Query, only: [from: 2]

  @derive {Jason.Encoder, only: [:id, :name]}
  schema "locations" do
    field :name, :string
    belongs_to :user, Model.User

    timestamps()
  end

  @doc false
  def changeset(location, attrs) do
    location
    |> cast(attrs, [:name], empty_values: [])
    |> Model.Common.validate_required_with_change(:name)
    |> assoc_constraint(:user)
  end

  def get_locations(user_id) do
    Repo.all(
      from(l in Model.Location,
        where: l.user_id == ^user_id,
        order_by: l.name
      )
    )
  end

  def get_location(location_id, user_id) do
    Model.Location
    |> Repo.get_by!([id: location_id, user_id: user_id])
  end

  def create_location(attrs, user_id) do
    Model.Location.changeset(%Model.Location{}, attrs)
    |> put_change(:user_id, user_id)
    |> Repo.insert
  end

  def update_location(location_id, attrs, user_id) do
    location = get_location(location_id, user_id)
    changeset = Model.Location.changeset(location, attrs)
    if changeset.valid? do
      Repo.update(changeset)
    else
      {:error, changeset}
    end
  end

  def delete_location(location_id, user_id) do
    get_location(location_id, user_id)
    |> Repo.delete
  end

end
