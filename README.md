# Hive-Record Web-App

A small web application to manage beehive inspection recors for beekeepers.

Written in Elixir/Phoenix


# Run Phoenix Server
```
$ cd hiverec
$ sh run_dev.sh
```

The 'run_dev.sh' script starts the development server mode with
- gettext extraction
- phoenix server start


# Prerequisites
Install RiotJS:
```
cd hiverec
npm install @riotjs/cli
```


# Setup

1. created new phoenix project with
```
$ mix phx.new hiverec
```

2. created Postgres DB with
```
CREATE USER hiverec_dev WITH PASSWORD 'hiverec_dev' CREATEDB;
CREATE DATABASE hiverec_dev OWNER hiverec_dev;
```

attention: in config/dev.exs I had to add
```
config :hive_rec, HiveRec.Repo,
    ...
    maintenance_database: "hiverec_dev",
```

3. create DB
```
$ mix ecto.create
```

4. start server
```
$ mix phx.server
```

Now it runs on port 4000


# Helpful Stuff
(https://hexdocs.pm/ecto_sql/Ecto.Migration.html)[https://hexdocs.pm/ecto_sql/Ecto.Migration.html]
