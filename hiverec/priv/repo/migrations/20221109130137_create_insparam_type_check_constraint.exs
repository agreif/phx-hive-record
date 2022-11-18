defmodule Hiverec.Repo.Migrations.CreateInsparamTypeCheckConstraint do
  use Ecto.Migration

  def up do
    execute(
      "ALTER TABLE insparam_types ADD CONSTRAINT insparam_types_check_type CHECK (type IN ('int', 'bool', 'string', 'text', 'dropdown'))"
    )
  end

  def down do
    execute("ALTER TABLE insparam_types DROP CONSTRAINT insparam_types_check_type")
  end
end
