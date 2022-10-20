defmodule Hiverec.Repo.Migrations.AddQueenYearToHive do
  use Ecto.Migration

  def change do
    alter table("hives") do
      add :queen_year, :integer, null: true
    end
  end
end
