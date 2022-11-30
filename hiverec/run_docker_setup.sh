docker exec -ti hiverec-postgres-1 psql -U postgres -c "CREATE USER phx_hiverec_prod WITH PASSWORD 'phx_hiverec_prod' CREATEDB;"
docker exec -ti hiverec-postgres-1 psql -U postgres -c "CREATE DATABASE phx_hiverec_prod OWNER phx_hiverec_prod;"
docker exec -it hiverec-app-1 bin/hiverec eval "Hiverec.Release.migrate"
docker exec -ti hiverec-postgres-1 psql -U phx_hiverec_prod -c "select * from users;"
