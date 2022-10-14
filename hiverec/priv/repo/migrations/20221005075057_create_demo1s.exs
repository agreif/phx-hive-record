defmodule Riotjs.Repo.Migrations.CreateDemo1s do
  use Ecto.Migration

  # https://hexdocs.pm/ecto_sql/Ecto.Migration.html

  def change do
    create table(:demo1s) do
      add :attr1, :string, null: false
      add :attr2, :string

      timestamps()
    end
  end
end
