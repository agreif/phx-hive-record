defmodule Hiverec.Handler.Inspection do
  @moduledoc """
  Inspection business logic.
  """

  alias Hiverec.{Data, Model, Handler}
  alias Hiverec.Handler.{Common, Breadcrumb}       # {Common, HistoryState, Breadcrumb}
  alias HiverecWeb.Router.Helpers, as: Routes
  alias Phoenix.HTML.Tag
#  alias Ecto.Changeset
  import Hiverec.Handler.Translation
 # import Hiverec.Datable

  ###################
  # add
  ###################

  @doc """
  Stores the new Inspection entity.

  Returns {conn, data} tuple
  """
  def process_post_add(conn, hive_id, params) when is_integer(hive_id) do
    user_id = Common.user_id(conn)
    locale = Common.locale(conn)
    result = Model.Inspection.create_inspection(params, hive_id, user_id)
    case result do
      {:ok, _} -> Handler.Hive.gen_detail_data(conn, hive_id)
      {:error, changeset} ->
        gen_add_data(conn, hive_id, params, Common.human_errors(changeset, locale))
    end
  end

  def gen_add_data(conn, hive_id, params, errors \\ %{}) when is_integer(hive_id) do
    form_post_data_url = Routes.page_url(conn, :post_inspection_add_data, hive_id)
    user_id = Common.user_id(conn)
    locale = Common.locale(conn)
    {hive, location} = Model.Hive.get_hive_with_location(hive_id, user_id)
    %Data{data_url: Routes.page_url(conn, :get_inspection_add_data, hive_id),
          locale: locale,
          navbar: Common.gen_navbar(conn, :hive_list),
          history_state: nil,
          logout: Common.gen_logout_data(conn),
          breadcrumb: Breadcrumb.inspection_add(conn, location, hive),
          pages: %Data.Pages{
            inspection_add_update: %Data.InspectionAddUpdatePage{
              title_msgid: "Add Inspection",
              form: %Data.Form{post_data_url: form_post_data_url,
                               cancel_data_url: Routes.page_url(conn, :get_hive_detail_data, hive_id),
                               params: params,
                               errors: errors},
              csrf_token: Tag.csrf_token_value(form_post_data_url),
            }
          },
          translations: translate_domains(["menu", "inspection", "form"], locale)
    }
  end

  ###################
  # delete
  ###################

  def process_post_delete(conn, inspection_id) when is_integer(inspection_id) do
    user_id = Common.user_id(conn)
    {result, hive} = Model.Inspection.delete_inspection(inspection_id, user_id)
    case result do
      {:ok, _} -> Handler.Hive.gen_detail_data(conn, hive.id)
      {:error, _changeset} -> Handler.Hive.gen_detail_data(conn, hive.id)
    end
  end

end
