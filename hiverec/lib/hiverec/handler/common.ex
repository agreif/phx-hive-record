defmodule Hiverec.Handler.Common do
  @moduledoc """
  Common business logic.
  """

  alias Hiverec.{Data, Model}
  alias Hiverec.Handler.Common
  alias HiverecWeb.Router.Helpers, as: Routes
  alias Plug.Conn
  alias Ecto.Changeset
  alias Phoenix.HTML.Tag

  def gen_navbar(conn, active_item) when is_atom(active_item) do
    user_id = Common.user_id(conn)
    hive_rows = Model.Hive.get_hives_with_locations(user_id)
    navitems = [
      %Data.Navitem{label: nil,
                    label_msgid: "Locations",
                    is_active: active_item == :location_list,
                    is_header: false,
                    url: Routes.page_url(conn, :get_location_list_page),
                    data_url: Routes.page_url(conn, :get_location_list_data),
                    dropdown_items: nil
                   },
      %Data.Navitem{label: nil,
                    label_msgid: "Hives",
                    is_active: false,
                    is_header: false,
                    url: nil,
                    data_url: nil,
                    dropdown_items:
                    hive_rows
                    |> Enum.map(fn [hive, location] -> [location.name, hive] end)
                    |> Enum.group_by(&List.first/1, &List.last/1)
                    |> Map.to_list
                    |> Enum.sort_by(fn {location_name, _hives} -> location_name end)
                    |> Enum.map(fn {location_name, hives} ->
                      [[%Data.Navitem{label: location_name,
                                      label_msgid: nil,
                                      is_active: false,
                                      is_header: true,
                                      url: nil,
                                      data_url: nil,
                                      dropdown_items: nil
                                     }]
                       ++
                       Enum.map(hives, fn hive ->
                         %Data.Navitem{label: hive.name,
                                       label_msgid: nil,
                                       is_active: false,
                                       is_header: false,
                                       url: Routes.page_url(conn, :get_hive_detail_page, hive),
                                       data_url: Routes.page_url(conn, :get_hive_detail_data, hive),
                                       dropdown_items: nil
                                      }
                       end)
                      ]
                    end)
                    |> List.flatten
      }
    ]
    %Data.Navbar{navitems: navitems}
  end

  def gen_logout_data(conn) do
    logout_post_url = Routes.page_url(conn, :post_logout)
    %Data.Logout{
      post_url: logout_post_url,
      csrf_token: Tag.csrf_token_value(logout_post_url)}
  end

  def user_id(conn) do
    conn.assigns[:user_id]
  end

  def locale(conn) do
    Conn.get_session(conn, "locale") || "en"
  end

  def renew_session(conn) do
    conn
    |> Conn.configure_session(renew: true)
    |> Conn.clear_session()
  end

  def error_message(msg, count, opts) do
   msg =  if count do
      Gettext.dngettext(HiverecWeb.Gettext, "errors", msg, msg, count, opts)
    else
      Gettext.dgettext(HiverecWeb.Gettext, "errors", msg, opts)
    end
   Enum.reduce(opts, msg, fn {key, value}, acc ->
     String.replace(acc, "%{#{key}}", to_string(value))
   end)
  end

  def human_errors(changeset, locale) do
    Gettext.with_locale(locale, fn ->
      Changeset.traverse_errors(changeset, fn {msg, opts} ->
        error_message(msg, opts[:count], opts)
      end)
    end)
  end

end
