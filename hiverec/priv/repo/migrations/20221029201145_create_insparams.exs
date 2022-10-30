defmodule Hiverec.Repo.Migrations.CreateInsparams do
  use Ecto.Migration

  def up do
    create table(:insparams) do
      add :inspection_id, references(:inspections, on_delete: :nothing), null: false
      add :insparam_type_id, references(:insparam_types, on_delete: :nothing), null: false
      add :value, :map, null: false

      timestamps()
    end

    execute("CREATE INDEX insparams_value ON insparams USING GIN(value)")
  end

  def down do
    execute("DROP INDEX insparams_value")

    drop table(:insparams)
  end

end
