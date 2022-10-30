defmodule Hiverec.Repo.Migrations.AddIndexToInsparamtypesOptions do
  use Ecto.Migration

  def up do
    execute("CREATE INDEX insparam_types_options ON insparam_types USING GIN(options)")
  end

  def down do
    execute("DROP INDEX insparam_types_options")
  end

end
