import Config

# Configure your database
#
# The MIX_TEST_PARTITION environment variable can be used
# to provide built-in test partitioning in CI environment.
# Run `mix help test` for more information.
config :hiverec, Hiverec.Repo,
  username: "hiverec_test",
  password: "hiverec_test",
  hostname: "localhost",
  database: "hiverec_test#{System.get_env("MIX_TEST_PARTITION")}",
  maintenance_database: "hiverec_test",
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: 10

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :hiverec, HiverecWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "HstvxlgK3VW2Y+IUbcxekdaxr1/btEdgb6pGjdMTsrrzT+K0pwx1k0rd6XZLGVIB",
  server: false

# In test we don't send emails.
config :hiverec, Hiverec.Mailer, adapter: Swoosh.Adapters.Test

# Print only warnings and errors during test
config :logger, level: :warn

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime
