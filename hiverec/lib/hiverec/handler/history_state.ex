defmodule Hiverec.Handler.HistoryState do
  @moduledoc """
  History state business logic.
  """

  alias Hiverec.{Data}
  alias HiverecWeb.Router.Helpers, as: Routes

  def locations(conn) do
    %Data.HistoryState{
      title: "Locations",
      url: Routes.page_url(conn, :get_location_list_page)
    }
  end

  def location(conn, location) do
    %Data.HistoryState{
      title: "Location",
      url: Routes.page_url(conn, :get_location_detail_page, location)}
  end

  def hive(conn, hive) do
    %Data.HistoryState{
      title: "Hive",
      url: Routes.page_url(conn, :get_hive_detail_page, hive)}
  end

end
