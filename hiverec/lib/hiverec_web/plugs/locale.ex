defmodule HiverecWeb.Plugs.Locale do
  @moduledoc """
  Plug to put the locale in the session.
  """
  alias Plug.Conn

  @locales ["en", "de"]

  def init(default), do: default

  def call(conn, _default) do
    locale = conn.params["locale"]
    if locale in @locales do
      Conn.put_session(conn, :locale, locale)
    else
      conn
    end
  end

end
