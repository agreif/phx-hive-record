defmodule HiverecWeb.Router do
  @moduledoc """
  Router.
  """

  use HiverecWeb, :router

  alias HiverecWeb.Router.Helpers, as: Routes
  alias Hiverec.Model.User

  pipeline :browser do
    plug :accepts, ["html", "json"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {HiverecWeb.LayoutView, :riot_root}
    plug :put_layout, false
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug HiverecWeb.Plugs.Locale
  end

  scope "/", HiverecWeb do
    pipe_through [:browser, :set_riot_tags, :require_authenticated_user, :fetch_user_id]
    get "/", PageController, :get_index
    post "/logout", PageController, :post_logout
    get "/preferences", PageController, :get_preferences_page
    get "/preferences/data", PageController, :get_preferences_data

    get "/location_list", PageController, :get_location_list_page
    get "/location_list/data", PageController, :get_location_list_data
    get "/location_add/data", PageController, :get_location_add_data
    post "/location_add/data", PageController, :post_location_add_data
    get "/location_detail/:location_id", PageController, :get_location_detail_page
    get "/location_detail/:location_id/data", PageController, :get_location_detail_data
    get "/location_update/:location_id/data", PageController, :get_location_update_data
    post "/location_update/:location_id/data", PageController, :post_location_update_data
    post "/location_delete/:location_id/data", PageController, :post_location_delete_data

    get "/hive_add/:location_id/data", PageController, :get_hive_add_data
    post "/hive_add/:location_id/data", PageController, :post_hive_add_data
    get "/hive_detail/:hive_id", PageController, :get_hive_detail_page
    get "/hive_detail/:hive_id/data", PageController, :get_hive_detail_data
    get "/hive_update/:hive_id/data", PageController, :get_hive_update_data
    post "/hive_update/:hive_id/data", PageController, :post_hive_update_data
    post "/hive_delete/:hive_id/data", PageController, :post_hive_delete_data

    get "/inspection_add/:hive_id/data", PageController, :get_inspection_add_data
    post "/inspection_add/:hive_id/data", PageController, :post_inspection_add_data
    get "/inspection_update/:inspection_id/data", PageController, :get_inspection_update_data
    post "/inspection_update/:inspection_id/data", PageController, :post_inspection_update_data
    post "/inspection_delete/:inspection_id/data", PageController, :post_inspection_delete_data

    get "/insparamtype_add/data", PageController, :get_insparamtype_add_data
    post "/insparamtype_add/data", PageController, :post_insparamtype_add_data

    get "/insparamtype_update/:insparamtype_id/data",
        PageController,
        :get_insparamtype_update_data

    post "/insparamtype_update/:insparamtype_id/data",
         PageController,
         :post_insparamtype_update_data

    post "/insparamtype_delete/:insparamtype_id/data",
         PageController,
         :post_insparamtype_delete_data
  end

  scope "/", HiverecWeb do
    pipe_through [:browser, :set_riot_tags, :redirect_if_user_is_authenticated]
    get "/user/register", PageController, :get_register_page
    get "/user/register/data", PageController, :get_register_data
    post "/user/register/data", PageController, :post_register_data
    get "/user/login", PageController, :get_login_page
    get "/user/login/data", PageController, :get_login_data
    post "/user/login/data", PageController, :post_login_data
  end

  # helpers

  defp set_riot_tags(conn, _opts) do
    if get_session(conn, :login) do
      conn
      |> assign(:riot_tags, [:body, :nav, :breadcrumb, :queen_dot])
      |> assign(:riot_pages, [
        :error,
        :location_list,
        :location_add_update,
        :location_detail,
        :hive_add_update,
        :hive_detail,
        :inspection_add_update,
        :preferences,
        :insparamtype_add_update
      ])
    else
      conn
      |> assign(:riot_tags, [:body, :unauth_nav])
      |> assign(:riot_pages, [:register, :login])
    end
  end

  defp require_authenticated_user(conn, _opts) do
    if get_session(conn, :login) do
      conn
    else
      conn
      |> redirect(to: Routes.page_path(conn, :get_login_page))
      |> halt()
    end
  end

  defp fetch_user_id(conn, _opts) do
    login = get_session(conn, :login)

    case User.get_id_by_login(login) do
      nil -> conn |> redirect(to: Routes.page_path(conn, :get_login_page)) |> halt()
      user_id -> conn |> assign(:user_id, user_id)
    end
  end

  defp redirect_if_user_is_authenticated(conn, _opts) do
    if get_session(conn, :login) do
      conn
      |> redirect(to: Routes.page_path(conn, :get_index))
      |> halt()
    else
      conn
    end
  end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: HiverecWeb.Telemetry
    end
  end

  # Enables the Swoosh mailbox preview in development.
  #
  # Note that preview only shows emails that were sent by the same
  # node running the Phoenix server.
  if Mix.env() == :dev do
    scope "/dev" do
      pipe_through :browser

      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
