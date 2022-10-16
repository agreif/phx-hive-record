defmodule Riotjs.Repo.Migrations.CreateLocations do
  use Ecto.Migration

  def change do
    create table(:locations) do
      add :name, :string, null: false

      timestamps()
    end

    unique_index(:locations, [:name])
  end
end