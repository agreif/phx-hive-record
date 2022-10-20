# rm priv/static/riot/*.js
# ./node_modules/.bin/riot priv/riot -o priv/static/riot/

# mix gettext.merge priv/gettext --locale de

mix gettext.extract
mix gettext.merge priv/gettext

mix phx.server
