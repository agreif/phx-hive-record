defmodule HiverecWeb.PageController do
  @moduledoc """
  Page Controller.
  """

  use HiverecWeb, :controller
  alias Hiverec.Handler

  # index

  def get_index(conn, params) do
    get_location_list_page(conn, params)
  end

  # location

  def get_location_list_page(conn, _params),
    do: render(conn, :page,
          data_url: Routes.page_url(conn, :get_location_list_data))

  def get_location_list_data(conn, _params),
    do: json(conn, Handler.Location.gen_list_data(conn))

  def get_location_add_data(conn, _params),
    do: json(conn, Handler.Location.gen_add_data(conn))

  def post_location_add_data(conn, params),
    do: json(conn, Handler.Location.process_post_add(conn, params))

  def get_location_detail_page(conn, params),
    do: render(conn, :page,
      data_url: Routes.page_url(conn, :get_location_detail_data, params["location_id"]))

  def get_location_detail_data(conn, %{"location_id" => location_id}),
    do: json(conn, Handler.Location.gen_detail_data(conn, location_id))

  def get_location_update_data(conn, params),
    do: json(conn, Handler.Location.process_get_update(conn, params))

  def post_location_update_data(conn, params),
    do: json(conn, Handler.Location.process_post_update(conn, params))

  def post_location_delete_data(conn, params),
    do: json(conn, Handler.Location.process_post_delete(conn, params))

  # hive

  def get_hive_add_data(conn, params),
    do: json(conn, Handler.Hive.gen_add_data(conn, params))

  def post_hive_add_data(conn, params),
    do: json(conn, Handler.Hive.process_post_add(conn, params))

  def post_hive_delete_data(conn, params),
    do: json(conn, Handler.Hive.process_post_delete(conn, params))

  # register

  def get_register_page(conn, _params),
    do: render(conn, :page,
          data_url: Routes.page_url(conn, :get_register_data))

  def get_register_data(conn, _params),
    do: json(conn, Handler.Register.gen_data(conn))

  def post_register_data(conn, params),
    do: json(conn, Handler.Register.process_post_register(conn, params))

  # login

  def get_login_page(conn, _params),
    do: render(conn, :page,
          data_url: Routes.page_url(conn, :get_login_data))

  def get_login_data(conn, _params),
    do: json(conn, Handler.Login.gen_data(conn))


  def post_login_data(conn, params) do
    {conn, data} = Handler.Login.process_post_login(conn, params)
    json(conn, data)
  end

  # logout

  def post_logout(conn, _params) do
    conn
    |> Handler.Logout.process_logout
    |> json(nil)
  end

end
