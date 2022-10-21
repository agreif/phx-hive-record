defmodule Hiverec.Repo.Migrations.AddUserIdToLocations do
  use Ecto.Migration

  def change do
    alter table(:locations) do
      add :user_id, references(:users, on_delete: :nothing), null: false
    end
  end
end
