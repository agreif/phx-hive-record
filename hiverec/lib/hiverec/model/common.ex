defmodule Hiverec.Model.Common do
  @moduledoc """
  Common model functions.
  """

  import Ecto.Changeset

  @doc """
  Validates the required field but leaves the new empty value in the changeset.

  Requirement here means that the trimmed string value is not an empty string.
  The problemwith the original 'validate_required/3' is that it removes the new vlue from the changes list, so that the update page shows the
  error but also the original (not empty) value in the html text field.
  """
  def validate_required_with_change(changeset, field) when is_atom(field) do
    validate_change(changeset, field, fn field, value ->
      case String.trim(value) do
        "" -> [{field, "can't be blank"}]
        _ -> []
      end
    end)
  end

  @doc """
  Validates the given string that it in an integer.

  Returns nil or a the error as {string, [opts]}
  """
  def validate_int(str) do
    data = %{}
    types = %{value: :integer}
    changeset = {data, types}
    |> cast(%{"value" => str}, Map.keys(types))
    # |> validate_number(:value, greater_than_or_equal_to: 0)
    # |> validate_number(:value, less_than: 100)
    changeset.errors[:value]
  end

end
