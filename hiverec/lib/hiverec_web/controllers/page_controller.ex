defmodule HiverecWeb.PageController do
  @moduledoc """
  Page Controller.
  """

  use HiverecWeb, :controller
  alias Hiverec.Handler

  # index

  def get_index(conn, params) do
    get_demo1_list_page(conn, params)
  end

  # demo 1

  def get_demo1_list_page(conn, _params),
    do: render(conn, :page,
          data_url: Routes.page_url(conn, :get_demo1_list_data))

  def get_demo1_list_data(conn, _params),
    do: json(conn, Handler.Demo1.gen_list_data(conn))

  def get_demo1_add_data(conn, _params),
    do: json(conn, Handler.Demo1.gen_add_data(conn))

  def post_demo1_add_data(conn, params),
    do: json(conn, Handler.Demo1.process_post_add(conn, params))

  def get_demo1_update_data(conn, params),
    do: json(conn, Handler.Demo1.process_get_update(conn, params))

  def post_demo1_update_data(conn, params),
    do: json(conn, Handler.Demo1.process_post_update(conn, params))

  def post_demo1_delete_data(conn, params),
    do: json(conn, Handler.Demo1.process_post_delete(conn, params))

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
