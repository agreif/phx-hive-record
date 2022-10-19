# Hive-Record Web-App

A small web application to manage beehive inspection recors for beekeepers.

Written in Elixir/Phoenix with RiotJS for DOM manipulation and UIkit as the frontend.

# Live-Demo
This project is currently under a very active development, but you can see a Live-demo here:

[See Live-Demo Here](https://phx-hiverec.greif-it.de/)

either you use an existing account:
```
login:    testuser
password: test12345678
```
or you create a new dummy account on the register page.


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
