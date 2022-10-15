defmodule Hiverec.Handler.Location do
  @moduledoc """
  Location business logic.
  """

  alias Hiverec.{Data, Model, Handler}
  alias Hiverec.Handler.Common
  alias HiverecWeb.Router.Helpers, as: Routes
  alias Phoenix.HTML.Tag
  alias Ecto.Changeset
  import HiverecWeb.Gettext

  @gettext_domain "location"

  defp texts_en() do
    Gettext.with_locale("en", fn ->
      [
        dgettext(@gettext_domain, "Locations"),
        dgettext(@gettext_domain, "Add Location"),
        dgettext(@gettext_domain, "Edit Location"),
        dgettext(@gettext_domain, "Delete Location"),
        dgettext(@gettext_domain, "Do you really want to delete this Location?"),
        dgettext(@gettext_domain, "Name"),
        dgettext(@gettext_domain, "Cancel"),
        dgettext(@gettext_domain, "Save"),
        dgettext(@gettext_domain, "Delete"),
      ]
    end)
  end

  ###################
  # list
  ###################

  def gen_list_data(conn) do
    user_id = Common.user_id(conn)
    locale = Common.locale(conn)
    location_items = Model.Location.get_locations(user_id)
    |> Enum.map(fn location ->
      post_data_url = Routes.page_url(conn, :post_location_delete_data, location)
      %Data.LocationItem{entity: location,
                         get_location_update_data_url: Routes.page_url(conn, :get_location_update_data, location),
                         post_location_delete_data_url: post_data_url,
                         csrf_token: Tag.csrf_token_value(post_data_url),
      }
    end)
    %Data{data_url: Routes.page_url(conn, :get_location_list_data),
          locale: locale,
          navbar: Common.gen_navbar(conn, :location_list),
          history_state: %Data.HistoryState{
            title: "Locations",
            url: Routes.page_url(conn, :get_location_list_page)},
          logout: Common.gen_logout_data(conn),
          pages: %Data.Pages{
            location_list: %Data.LocationListPage{
              location_items: location_items,
              get_location_add_data_url: Routes.page_url(conn, :get_location_add_data),
            }
          },
          translations: Common.translations(@gettext_domain, texts_en(), locale)
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
          navbar: Common.gen_navbar(conn, :location),
          history_state: nil,
          logout: Common.gen_logout_data(conn),
          pages: %Data.Pages{
            location_add_update: %Data.LocationAddUpdatePage{
              title_msgid: "Add Location",
              form: %Data.Form{post_url: form_post_data_url,
                               params: params,
                               errors: errors},
              csrf_token: Tag.csrf_token_value(form_post_data_url),
              get_location_list_data_url: Routes.page_url(conn, :get_location_list_data)
            }
          },
          translations: Common.translations(@gettext_domain, texts_en(), locale)
    }
  end

  ###################
  # update
  ###################

  def process_get_update(conn, params) do
    user_id = Common.user_id(conn)
    location = Model.Location.get_location(params, user_id)
    gen_update_data(conn, location)
  end

  def process_post_update(conn, params) do
    user_id = Common.user_id(conn)
    locale = Common.locale(conn)
    result = Model.Location.update_location(params, user_id)
    case result do
      {:ok, _} -> Handler.Location.gen_list_data(conn)
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
          navbar: Common.gen_navbar(conn, :location),
          history_state: nil,
          logout: Common.gen_logout_data(conn),
          pages: %Data.Pages{
            location_add_update: %Data.LocationAddUpdatePage{
              title_msgid: "Edit Location",
              form: %Data.Form{post_url: form_post_data_url,
                               params: location,
                               errors: errors},
              csrf_token: Tag.csrf_token_value(form_post_data_url),
              get_location_list_data_url: Routes.page_url(conn, :get_location_list_data)
            }
          },
          translations: Common.translations(@gettext_domain, texts_en(), locale)
    }
  end


  ###################
  # delete
  ###################

  def process_post_delete(conn, params) do
    user_id = Common.user_id(conn)
    result = Model.Location.delete_location(params, user_id)
    case result do
      {:ok, _} -> Handler.Location.gen_list_data(conn)
      {:error, _changeset} -> Handler.Location.gen_list_data(conn)
    end
  end


end
