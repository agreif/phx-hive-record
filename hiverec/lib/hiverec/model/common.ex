defmodule Hiverec.Model.Common do
  @moduledoc """
  Common model functions.
  """

  import Ecto.Changeset

  def validate_required_with_change(changeset, field) when is_atom(field) do
    validate_change(changeset, field, fn field, value ->
      case String.trim(value) do
        "" -> [{field, "can't be blank"}]
        _ -> []
      end
    end)
  end

end
