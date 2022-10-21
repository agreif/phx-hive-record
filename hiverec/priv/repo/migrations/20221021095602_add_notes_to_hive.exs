defmodule Hiverec.Repo.Migrations.AddNotesToHive do
  use Ecto.Migration

  def change do
    alter table("hives") do
      add :notes, :text, null: true
    end
  end
end
