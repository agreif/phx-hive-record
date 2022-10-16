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

  @derive {Jason.Encoder, only: [:id, :name]}
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

  # def get_hives(user_id) do
  #   Repo.all(
  #     from(l in Model.Hive,
  #       where: l.user_id == ^user_id,
  #       order_by: l.name
  #     )
  #   )
  # end

  # def get_hive(attrs, user_id) do
  #   Model.Hive
  #   |> Repo.get_by!([id: attrs["id"], user_id: user_id])
  # end

  # def create_hive(attrs, user_id) do
  #   Model.Hive.changeset(%Model.Hive{}, attrs)
  #   |> put_change(:user_id, user_id)
  #   |> Repo.insert
  # end

  # def update_hive(attrs, user_id) do
  #   hive = get_hive(attrs, user_id)
  #   changeset = Model.Hive.changeset(hive, attrs)
  #   if changeset.valid? do
  #     Repo.update(changeset)
  #   else
  #     {:error, changeset}
  #   end
  # end

  # def delete_hive(attrs, user_id) do
  #   get_hive(attrs, user_id)
  #   |> Repo.delete
  # end

end
