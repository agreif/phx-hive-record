docker exec -ti hiverec-postgres psql -U postgres -c "CREATE USER phx_hiverec_prod WITH PASSWORD 'phx_hiverec_prod' CREATEDB;"
docker exec -ti hiverec-postgres psql -U postgres -c "CREATE DATABASE phx_hiverec_prod OWNER phx_hiverec_prod;"
docker exec -it hiverec-app bin/hiverec eval "Hiverec.Release.migrate"
docker exec -ti hiverec-postgres psql -U phx_hiverec_prod -c "select id,login,email from users;"
