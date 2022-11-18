defmodule Hiverec.Model.InsparamType do
  use Ecto.Schema
  import Ecto.Changeset
  import Ecto.Query, only: [from: 2]
  alias Hiverec.Repo
  alias Hiverec.Model

  schema "insparam_types" do
    field :name, :string
    field :type, :string
    field :options, :map
    field :sort_index, :integer
    belongs_to :user, Model.User

    timestamps()
  end

  @doc false
  def changeset(insparam_type, attrs) do
    # convert options to a map
    attrs =
      case {Map.get(attrs, "type"), Map.get(attrs, "options")} do
        {"dropdown", nil} ->
          attrs

        {"dropdown", str} ->
          values = String.split(String.trim(str), [","], trim: true) |> Enum.map(&String.trim/1)

          case values do
            [] -> %{attrs | "options" => nil}
            _ -> %{attrs | "options" => %{"values" => values}}
          end

        _ ->
          %{attrs | "options" => nil}
      end

    insparam_type
    |> cast(attrs, [:type, :name, :options])
    |> validate_required([:type, :name])
    |> unique_constraint([:user_id, :name])
    |> assoc_constraint(:user)
  end

  def get_insparam_types(user_id) do
    Repo.all(
      from(
        ipt in Model.InsparamType,
        where: ipt.user_id == ^user_id,
        order_by: :sort_index
      )
    )
  end

  def get_insparam_type(insparamtype_id, user_id) do
    Model.InsparamType
    |> Repo.get_by!(id: insparamtype_id, user_id: user_id)
  end

  def create_insparam_type(attrs, user_id) do
    Model.InsparamType.changeset(%Model.InsparamType{}, attrs)
    |> put_change(:user_id, user_id)
    |> Repo.insert()
  end

  def update_insparam_type(insparamtype_id, attrs, user_id) do
    insparam_type = get_insparam_type(insparamtype_id, user_id)
    changeset = Model.InsparamType.changeset(insparam_type, attrs)

    if changeset.valid? do
      Repo.update(changeset)
    else
      {:error, changeset}
    end
  end

  def delete_insparam_type(insparamtype_id, user_id) do
    insparamtype = get_insparam_type(insparamtype_id, user_id)

    Repo.transaction(fn ->
      Repo.delete_all(from(ip in Model.Insparam, where: ip.insparam_type_id == ^insparamtype_id))
      Repo.delete(insparamtype)
    end)
  end

  def insert_alex_types() do
    alex =
      Repo.one(
        from(
          u in Model.User,
          where: u.id == 1
        )
      )

    Repo.insert(%Model.InsparamType{
      user: alex,
      name: "queen seen?",
      type: "bool",
      sort_index: 10,
      options: nil
    })

    Repo.insert(%Model.InsparamType{
      user: alex,
      name: "brood frames",
      type: "int",
      sort_index: 20,
      options: nil
    })

    Repo.insert(%Model.InsparamType{
      user: alex,
      name: "honey frames",
      type: "int",
      sort_index: 30,
      options: nil
    })

    Repo.insert(%Model.InsparamType{
      user: alex,
      name: "treatment",
      type: "string",
      sort_index: 40,
      options: nil
    })

    Repo.insert(%Model.InsparamType{
      user: alex,
      name: "feeding",
      type: "string",
      sort_index: 50,
      options: nil
    })

    Repo.insert(%Model.InsparamType{
      user: alex,
      name: "notes",
      type: "text",
      sort_index: 60,
      options: nil
    })

    Repo.insert(%Model.InsparamType{
      user: alex,
      name: "swarming",
      type: "dropdown",
      sort_index: 70,
      options: %{values: ["none", "swarm cell", "swarmed"]}
    })
  end
end
