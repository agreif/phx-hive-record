defmodule Hiverec.Model.User do
  @moduledoc """
  User Model.
  """

  use Ecto.Schema
  import Ecto.Changeset
  import Ecto.Query, only: [from: 2]
  alias Hiverec.Repo
  alias Hiverec.Model

  schema "users" do
    field :email, :string
    field :login, :string
    field :password, :string
    has_many :locations, Model.Location

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:login, :email, :password])
    |> validate_required([:login, :email, :password])
    |> validate_length(:login, min: 6)
    |> validate_format(:email, ~r/@/)
    |> validate_length(:email, min: 6)
    |> validate_length(:password, min: 12, max: 72)
    |> unique_constraint([:login])
  end


  def get_id_by_login(login) do
    query = from u in Model.User, where: u.login == ^login, select: u.id
    Repo.one(query)
  end

  def get_by_login_and_password(login, password) do
    user = Repo.get_by(Model.User, login: login)
    if valid_password?(user, password), do: user
  end

  def valid_password?(%Model.User{password: hashed_password}, password)
      when is_binary(hashed_password) and byte_size(password) > 0 do
    Bcrypt.verify_pass(password, hashed_password)
  end
  def valid_password?(_, _) do
    Bcrypt.no_user_verify()
  end

end
