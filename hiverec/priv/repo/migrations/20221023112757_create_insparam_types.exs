defmodule Hiverec.Repo.Migrations.CreateInsparamTypes do
  use Ecto.Migration

  def change do
    create table(:insparam_types) do
      add :user_id, references(:users, on_delete: :nothing), null: false
      add :type, :string, null: false
      add :name, :string, null: false
      add :sort_index, :integer
      add :options, :map

      timestamps()
    end

    create index(:insparam_types, [:user_id, :name], unique: true)
  end
end
