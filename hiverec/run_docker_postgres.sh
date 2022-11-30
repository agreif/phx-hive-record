docker run -d \
       --network hiverec_default \
       --network-alias postgres \
       -v "$(pwd)/../docker_var_lib_postgresql_data:/var/lib/postgresql/data" \
       -e POSTGRES_PASSWORD=postgres \
       --name postgres \
       postgres




# CREATE USER phx_hiverec_prod WITH PASSWORD 'phx_hiverec_prod' CREATEDB;
# CREATE DATABASE phx_hiverec_prod OWNER phx_hiverec_prod;

# docker exec -ti hiverec-postgres-1 psql -U postgres -c "CREATE USER phx_hiverec_prod WITH PASSWORD 'phx_hiverec_prod' CREATEDB;"
# docker exec -ti hiverec-postgres-1 psql -U postgres -c "CREATE DATABASE phx_hiverec_prod OWNER phx_hiverec_prod;"

# docker exec -ti postgres pg_dumpall -U postgres --roles-only -f /var/lib/postgresql/data/roles.sql
# docker exec -ti postgres pg_dump -U phx_hiverec_prod phx_hiverec_prod --create -f /var/lib/postgresql/data/db.sql

# docker exec -ti postgres psql -U postgres
# psql> \i /var/lib/postgresql/data/roles.sql
# psql> \i /var/lib/postgresql/data/db.sql

