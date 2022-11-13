# Hive-Record Web-App

A small web application to manage beehive inspection records for beekeepers.

Written in Elixir/Phoenix with RiotJS for DOM manipulation and UIkit as the frontend.


## Live-Demo
This project is currently under a very active development, but you can see a live-demo here:

[See Live-Demo Here](https://phx-hiverec.greif-it.de/)

either you use an existing account:
```
login:    testuser
password: test12345678
```
or you create a new dummy account on the register page.


## TODOs

- [ ] inspection param types with sort index
- [ ] displaying boolean values instead of 'true' and 'false'
- [x] custom inspection properties
- [x] add inspections to hive
- [x] extend hive detail with 'queen_year', 'is_queen_marked', 'notes'
- [x] hives menu item
- [x] breadcrumbs
- [x] refactor redundant gettext msgids
- [x] hive creation/update/delete
- [x] hive list on location detal page
- [x] location detail page
- [x] location creation/update/delete


## Run RiotJS background compile watcher

```
$ cd hiverec
$ mix run riot_watcher.exs
```


## Run Phoenix Server
```
$ cd hiverec
$ sh run_dev.sh
```

The 'run_dev.sh' script starts the development server mode with
- gettext extraction
- phoenix server start


## Prerequisites
Install RiotJS:
```
cd hiverec
npm install @riotjs/cli
```


## Setup

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
