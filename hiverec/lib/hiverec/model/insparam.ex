defmodule Hiverec.Model.Insparam do
  use Ecto.Schema
  import Ecto.Changeset
  import Ecto.Query, only: [from: 2]
  alias Hiverec.Repo
  alias Hiverec.Model

  schema "insparams" do
    field :value, :map
    belongs_to :inspection, Model.Inspection
    belongs_to :insparam_type, Model.InsparamType

    timestamps()
  end

  def create_insparam(inspection, insparam_type, value) do
    change(%Model.Insparam{})
    |> put_change(:inspection_id, inspection.id)
    |> put_change(:insparam_type_id, insparam_type.id)
    |> unique_constraint([:inspection_id, :insparam_type_id])
    |> assoc_constraint(:inspection)
    |> assoc_constraint(:insparam_type)
    |> put_change(:value, %{"value" => value})
    |> Repo.insert
  end

  def validate_fields(changeset, attrs, insparam_types) do
    insparam_types
    |> Enum.map(fn ipt ->
      str = Map.get(attrs, to_string(ipt.id))
      case ipt.type do
        "int" -> case Model.Common.validate_int(str) do
                   nil -> nil
                   tuple -> {ipt.id, tuple}
                 end
        _ -> nil
      end
    end)
    |> Enum.filter(& &1)
    |> Enum.reduce(changeset, fn {field_id, {message, keys}}, cs ->
      add_error(cs, String.to_atom(to_string(field_id)), message, keys)
    end)
  end

  def get_insparams_with_types(inspection_id, user_id) do
    query = from ip in Model.Insparam,
      join: ipt in Model.InsparamType,
      on: ip.insparam_type_id == ipt.id,
      where: ip.inspection_id == ^inspection_id and ipt.user_id == ^user_id,
      select: {ip, ipt}
    Repo.all(query)
  end
end
