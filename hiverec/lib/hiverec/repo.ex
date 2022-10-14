defmodule Hiverec.Repo do
  use Ecto.Repo,
    otp_app: :hiverec,
    adapter: Ecto.Adapters.Postgres
end
