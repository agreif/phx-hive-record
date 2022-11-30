export DATABASE_URL=ecto://phx_hiverec_prod:phx_hiverec_prod@postgres-server/phx_hiverec_prod
export SECRET_KEY_BASE=oxTDjL8cnfjaGQ2jEKC1S+S6d9HEDpdfan9RW1+7iWAljH7L1er550blp9sCOtBh
export PHX_HOST=localhost
export PHX_PORT=4000
export PHX_SCHEME=http
export PORT=4000

docker rm -f hiverec \
    && docker image build -t elixir/hiverec . \
    && docker run -dp $PORT:$PORT \
	      -e DATABASE_URL \
	      -e SECRET_KEY_BASE \
	      -e PHX_HOST \
	      -e PHX_PORT \
	      -e PHX_SCHEME \
	      -e PORT \
	      --network hiverec-network \
	      --name hiverec \
	      elixir/hiverec

docker exec -it hiverec bin/hiverec eval "Hiverec.Release.migrate"

docker logs hiverec "$@"
