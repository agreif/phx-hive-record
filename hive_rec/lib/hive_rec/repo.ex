defmodule HiveRec.Repo do
  use Ecto.Repo,
    otp_app: :hive_rec,
    adapter: Ecto.Adapters.Postgres
end
