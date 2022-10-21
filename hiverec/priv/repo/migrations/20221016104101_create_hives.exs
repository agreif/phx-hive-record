defmodule Hiverec.Repo.Migrations.CreateHives do
  use Ecto.Migration

  def change do
    create table(:hives) do
      add :location_id, references(:locations, on_delete: :nothing), null: false
      add :name, :string, null: false

      timestamps()
    end

    create unique_index(:hives, [:location_id, :name])
  end
end
