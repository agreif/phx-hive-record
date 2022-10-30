defmodule Hiverec.Handler.Hive do
  @moduledoc """
  Hive business logic.
  """

  alias Hiverec.{Data, Model, Handler}
  alias Hiverec.Handler.{Common, HistoryState, Breadcrumb}
  alias HiverecWeb.Router.Helpers, as: Routes
  alias Phoenix.HTML.Tag
  alias Ecto.Changeset
  import Hiverec.Handler.Translation
  import Hiverec.Datable

  ###################
  # add
  ###################

  @doc """
  Stores the new Hive entity.

  Returns {conn, data} tuple
  """
  def process_post_add(conn, location_id, params) when is_integer(location_id) do
    user_id = Common.user_id(conn)
    locale = Common.locale(conn)
    result = Model.Hive.create_hive(params, location_id, user_id)
    case result do
      {:ok, _} -> Handler.Location.gen_detail_data(conn, location_id)
      {:error, changeset} ->
        gen_add_data(conn, location_id, params, Common.human_errors(changeset, locale))
    end
  end

  def gen_add_data(conn, location_id, params, errors \\ %{}) when is_integer(location_id) do
    form_post_data_url = Routes.page_url(conn, :post_hive_add_data, location_id)
    user_id = Common.user_id(conn)
    locale = Common.locale(conn)
    location = Model.Location.get_location(location_id, user_id)
    %Data{data_url: Routes.page_url(conn, :get_hive_add_data, location_id),
          locale: locale,
          navbar: Common.gen_navbar(conn, :location_list),
          history_state: nil,
          logout: Common.gen_logout_data(conn),
          breadcrumb: Breadcrumb.hive_add(conn, location),
          pages: %Data.Pages{
            hive_add_update: %Data.HiveAddUpdatePage{
              title_msgid: "Add Hive",
              form: %Data.Form{post_data_url: form_post_data_url,
                               cancel_data_url: Routes.page_url(conn, :get_location_detail_data, location_id),
                               params: params,
                               errors: errors,
                               form_fields: nil},
              csrf_token: Tag.csrf_token_value(form_post_data_url),
            }
          },
          translations: translate_domains(["menu", "hive", "form"], locale)
    }
  end

  ###################
  # detail
  ###################

  def gen_detail_data(conn, hive_id) when is_integer(hive_id) do
    # Model.InsparamType.insert_alex_types()
    user_id = Common.user_id(conn)
    locale = Common.locale(conn)
    {hive, location, inspections} = Model.Hive.get_hive_with_location_and_inspections(hive_id, user_id)
    inspection_list_items =
      inspections
      |> Enum.map(fn inspection ->
      post_data_url = Routes.page_url(conn, :post_inspection_delete_data, inspection)
      %Data.HiveDetailPage.InspectionListItem{
        inspection: to_data(inspection),
        post_inspection_delete_data_url: post_data_url,
        csrf_token: Tag.csrf_token_value(post_data_url),
        get_inspection_update_data_url: Routes.page_url(conn, :get_inspection_update_data, inspection),
        insparams: []
      }
    end)
    %Data{data_url: Routes.page_url(conn, :get_hive_detail_data, hive),
          locale: locale,
          navbar: Common.gen_navbar(conn, :location_list),
          history_state: HistoryState.hive(conn, hive),
          logout: Common.gen_logout_data(conn),
          breadcrumb: Breadcrumb.hive(conn, location, hive),
          pages: %Data.Pages{
            hive_detail: %Data.HiveDetailPage{
              hive: to_data(hive),
              get_hive_update_data_url: Routes.page_url(conn, :get_hive_update_data, hive),
              inspection_list_items: inspection_list_items,
              get_inspection_add_data_url: Routes.page_url(conn, :get_inspection_add_data, hive),
              insparam_names: []
            }
          },
          translations: translate_domains(["menu", "hive", "inspection", "form"], locale)
    }
  end

  ###################
  # update
  ###################

  def process_get_update(conn, hive_id) when is_integer(hive_id) do
    user_id = Common.user_id(conn)
    {hive, location} = Model.Hive.get_hive_with_location(hive_id, user_id)
    gen_update_data(conn, location, hive)
  end

  def process_post_update(conn, hive_id, params) when is_integer(hive_id) do
    user_id = Common.user_id(conn)
    locale = Common.locale(conn)
    result = Model.Hive.update_hive(hive_id, params, user_id)
    case result do
      {{:ok, _}, _} -> Handler.Hive.gen_detail_data(conn, hive_id)
      {{:error, changeset}, location} ->
        gen_update_data(conn,
          location,
          Changeset.apply_changes(changeset),
          Common.human_errors(changeset, locale))
    end
  end

  defp gen_update_data(conn, location, hive, errors \\ %{}) do
    form_post_data_url = Routes.page_url(conn, :post_hive_update_data, hive)
    locale = Common.locale(conn)
    %Data{data_url: Routes.page_url(conn, :get_hive_update_data, hive),
          locale: locale,
          navbar: Common.gen_navbar(conn, :location_list),
          history_state: nil,
          logout: Common.gen_logout_data(conn),
          breadcrumb: Breadcrumb.hive_update(conn, location, hive),
          pages: %Data.Pages{
            hive_add_update: %Data.HiveAddUpdatePage{
              title_msgid: "Edit Hive",
              form: %Data.Form{post_data_url: form_post_data_url,
                               cancel_data_url: Routes.page_url(conn, :get_hive_detail_data, hive),
                               params: to_data(hive),
                               errors: errors,
                               form_fields: nil},
              csrf_token: Tag.csrf_token_value(form_post_data_url),
            }
          },
          translations: translate_domains(["menu", "hive", "form"], locale)
    }
  end

  ###################
  # delete
  ###################

  def process_post_delete(conn, hive_id) when is_integer(hive_id) do
    user_id = Common.user_id(conn)
    {result, location} = Model.Hive.delete_hive(hive_id, user_id)
    case result do
      {:ok, _} -> Handler.Location.gen_detail_data(conn, location.id)
      {:error, _changeset} -> Handler.Location.gen_detail_data(conn, location.id)
    end
  end

end
