defmodule Hiverec.Repo.Migrations.AlterInsparamTypeSortIndexNotNull do
  use Ecto.Migration

  def change do
    alter table("insparam_types") do
      modify :sort_index, :integer, null: false
    end
  end
end
