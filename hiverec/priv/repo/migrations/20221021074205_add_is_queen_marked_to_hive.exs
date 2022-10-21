defmodule Hiverec.Repo.Migrations.AddIsQueenMarkedToHive do
  use Ecto.Migration

  def change do
    alter table("hives") do
      add :is_queen_marked, :boolean, null: false, default: false
    end
  end
end
