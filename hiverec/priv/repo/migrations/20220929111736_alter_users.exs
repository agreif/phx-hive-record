defmodule Riotjs.Repo.Migrations.AlterUsers do
  use Ecto.Migration

  def change do
    create index(:users, [:login], unique: true)
  end
end
