defmodule Hiverec.Handler.Logout do
  @moduledoc """
  Logout business logic.
  """

  alias Hiverec.{Common}

  @doc """
  Logs the user out.

  Clears the session.

  Returns conn
  """
  def process_logout(conn) do
    Common.renew_session(conn)
  end

end
