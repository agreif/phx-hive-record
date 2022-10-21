defmodule Hiverec.Repo.Migrations.CreateInspections do
  use Ecto.Migration

  def change do
    create table(:inspections) do
      add :hive_id, references(:hives, on_delete: :nothing), null: false
      add :date, :date

      timestamps()
    end

    create unique_index(:inspections, [:hive_id, :date])
  end
end
