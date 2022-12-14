export DATABASE_URL=ecto://phx_hiverec_prod:phx_hiverec_prod@hiverec-postgres/phx_hiverec_prod
export SECRET_KEY_BASE="$(mix phx.gen.secret)"
export PHX_HOST=localhost
export PHX_PORT=4000
export PHX_SCHEME=http
export PORT=4000

docker rm -f hiverec-app \
    && docker image build -f Dockerfile-prod -t agreif/phx-hiverec . \
    && docker run -dp $PORT:$PORT \
	      -e DATABASE_URL \
	      -e SECRET_KEY_BASE \
	      -e PHX_HOST \
	      -e PHX_PORT \
	      -e PHX_SCHEME \
	      -e PORT \
	      --network hiverec_default \
	      --name hiverec-app \
	      agreif/phx-hiverec

docker exec -it hiverec-app bin/hiverec eval "Hiverec.Release.migrate"

docker logs hiverec-app "$@"
