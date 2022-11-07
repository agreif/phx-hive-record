defmodule Hiverec.Handler.Location do
  @moduledoc """
  Location business logic.
  """

  alias Hiverec.{Data, Model, Handler}
  alias Hiverec.Handler.{Common, HistoryState, Breadcrumb}
  alias HiverecWeb.Router.Helpers, as: Routes
  alias Phoenix.HTML.Tag
  alias Ecto.Changeset
  import Hiverec.Handler.Translation
  import Hiverec.Datable

  ###################
  # list
  ###################

  def gen_list_data(conn) do
    user_id = Common.user_id(conn)
    locale = Common.locale(conn)
    location_list_items =
      Model.Location.get_locations(user_id)
      |> Enum.map(fn location ->
      post_data_url = Routes.page_url(conn, :post_location_delete_data, location)
      %Data.LocationListPage.LocationListItem{
        location: to_data(location),
        get_location_detail_data_url: Routes.page_url(conn, :get_location_detail_data, location),
        post_location_delete_data_url: post_data_url,
        csrf_token: Tag.csrf_token_value(post_data_url),
      }
    end)
    %Data{data_url: Routes.page_url(conn, :get_location_list_data),
          locale: locale,
          navbar: Common.gen_navbar(conn, :location_list),
          history_state: HistoryState.locations(conn),
          preferences_url: Routes.page_url(conn, :get_preferences_page),
          preferences_data_url: Routes.page_url(conn, :get_preferences_data),
          logout: Common.gen_logout_data(conn),
          breadcrumb: Breadcrumb.locations(conn),
          pages: %Data.Pages{
            location_list: %Data.LocationListPage{
              location_list_items: location_list_items,
              get_location_add_data_url: Routes.page_url(conn, :get_location_add_data),
            }
          },
          translations: translate_domains(["menu", "preferences", "location", "form"], locale)
    }
  end

  ###################
  # add
  ###################

  @doc """
  Stores the new Location entity.

  Returns {conn, data} tuple
  """
  def process_post_add(conn, params) do
    user_id = Common.user_id(conn)
    locale = Common.locale(conn)
    result = Model.Location.create_location(params, user_id)
    case result do
      {:ok, _} -> Handler.Location.gen_list_data(conn)
      {:error, changeset} ->
        gen_add_data(conn, params, Common.human_errors(changeset, locale))
    end
  end

  def gen_add_data(conn, params \\ %{}, errors \\ %{}) do
    form_post_data_url = Routes.page_url(conn, :post_location_add_data)
    locale = Common.locale(conn)
    %Data{data_url: Routes.page_url(conn, :get_location_add_data),
          locale: locale,
          navbar: Common.gen_navbar(conn, :location_list),
          history_state: nil,
          preferences_url: Routes.page_url(conn, :get_preferences_page),
          preferences_data_url: Routes.page_url(conn, :get_preferences_data),
          logout: Common.gen_logout_data(conn),
          breadcrumb: Breadcrumb.location_add(conn),
          pages: %Data.Pages{
            location_add_update: %Data.LocationAddUpdatePage{
              title_msgid: "Add Location",
              form: %Data.Form{post_data_url: form_post_data_url,
                               cancel_data_url: Routes.page_url(conn, :get_location_list_data),
                               params: params,
                               errors: errors,
                               form_fields: nil},
              csrf_token: Tag.csrf_token_value(form_post_data_url),
            }
          },
          translations: translate_domains(["menu", "preferences", "location", "form"], locale)
    }
  end

  ###################
  # detail
  ###################

  def gen_detail_data(conn, location_id) when is_integer(location_id) do
    user_id = Common.user_id(conn)
    locale = Common.locale(conn)
    {location, hives} = Model.Location.get_location_with_hives(location_id, user_id)
    hive_list_items =
      hives
      |> Enum.map(fn hive ->
      post_data_url = Routes.page_url(conn, :post_hive_delete_data, hive)
      %Data.LocationDetailPage.HiveListItem{
        hive: to_data(hive),
        get_hive_detail_data_url: Routes.page_url(conn, :get_hive_detail_data, hive),
        post_hive_delete_data_url: post_data_url,
        csrf_token: Tag.csrf_token_value(post_data_url),
      }
    end)
    %Data{data_url: Routes.page_url(conn, :get_location_detail_data, location),
          locale: locale,
          navbar: Common.gen_navbar(conn, :location_list),
          history_state: HistoryState.location(conn, location),
          preferences_url: Routes.page_url(conn, :get_preferences_page),
          preferences_data_url: Routes.page_url(conn, :get_preferences_data),
          logout: Common.gen_logout_data(conn),
          breadcrumb: Breadcrumb.location(conn, location),
          pages: %Data.Pages{
            location_detail: %Data.LocationDetailPage{
              location: to_data(location),
              get_location_update_data_url: Routes.page_url(conn, :get_location_update_data, location),
              hive_list_items: hive_list_items,
              get_hive_add_data_url: Routes.page_url(conn, :get_hive_add_data, location)
            }
          },
          translations: translate_domains(["menu", "preferences", "location", "hive", "form"], locale)
    }
  end

  ###################
  # update
  ###################

  def process_get_update(conn, location_id) when is_integer(location_id) do
    user_id = Common.user_id(conn)
    location = Model.Location.get_location(location_id, user_id)
    gen_update_data(conn, location)
  end

  def process_post_update(conn, location_id, params) when is_integer(location_id) do
    user_id = Common.user_id(conn)
    locale = Common.locale(conn)
    result = Model.Location.update_location(location_id, params, user_id)
    case result do
      {:ok, _} -> Handler.Location.gen_detail_data(conn, location_id)
      {:error, changeset} ->
        gen_update_data(conn,
          Changeset.apply_changes(changeset),
          Common.human_errors(changeset, locale))
    end
  end

  defp gen_update_data(conn, location, errors \\ %{}) do
    form_post_data_url = Routes.page_url(conn, :post_location_update_data, location)
    locale = Common.locale(conn)
    %Data{data_url: Routes.page_url(conn, :get_location_update_data, location),
          locale: locale,
          navbar: Common.gen_navbar(conn, :location_list),
          history_state: nil,
          preferences_url: Routes.page_url(conn, :get_preferences_page),
          preferences_data_url: Routes.page_url(conn, :get_preferences_data),
          logout: Common.gen_logout_data(conn),
          breadcrumb: Breadcrumb.location_update(conn, location),
          pages: %Data.Pages{
            location_add_update: %Data.LocationAddUpdatePage{
              title_msgid: "Edit Location",
              form: %Data.Form{post_data_url: form_post_data_url,
                               cancel_data_url: Routes.page_url(conn, :get_location_detail_data, location),
                               params: to_data(location),
                               errors: errors,
                               form_fields: nil},
              csrf_token: Tag.csrf_token_value(form_post_data_url),
            }
          },
          translations: translate_domains(["menu", "preferences", "location", "form"], locale)
    }
  end

  ###################
  # delete
  ###################

  def process_post_delete(conn, location_id) when is_integer(location_id) do
    user_id = Common.user_id(conn)
    result = Model.Location.delete_location(location_id, user_id)
    case result do
      {:ok, _} -> Handler.Location.gen_list_data(conn)
      {:error, _changeset} -> Handler.Location.gen_list_data(conn)
    end
  end

end
