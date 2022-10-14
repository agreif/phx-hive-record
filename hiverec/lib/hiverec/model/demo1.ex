defmodule Hiverec.Model.Demo1 do
  @moduledoc """
  Demo1 Model.
  """

  use Ecto.Schema
  import Ecto.{Changeset, Query}
  alias Hiverec.Repo
  alias Hiverec.Model

  @derive {Jason.Encoder, only: [:id, :attr1, :attr2]}
  schema "demo1s" do
    field :attr1, :string
    field :attr2, :string

    timestamps()
  end

  @doc false
  def changeset(demo1, attrs) do
    demo1
    |> cast(attrs, [:attr1, :attr2])
    |> validate_required([:attr1])
  end

  def all_demo1s do
    query = from d in Model.Demo1, order_by: d.attr1
    Repo.all(query)
  end
end
