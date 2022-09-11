defmodule HiveRecWeb.PageController do
  use HiveRecWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
