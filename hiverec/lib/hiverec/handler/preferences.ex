defmodule Hiverec.Handler.Preferences do
  @moduledoc """
  Preferences logic.
  """

  alias Hiverec.{Data, Model}#, Handler}
  alias Hiverec.Handler.{Common, HistoryState, Breadcrumb}
  alias HiverecWeb.Router.Helpers, as: Routes
  alias Phoenix.HTML.Tag
#  alias Ecto.Changeset
  import Hiverec.Handler.Translation
  import Hiverec.Datable

  ###################
  # preferences
  ###################

  def gen_data(conn) do
    user_id = Common.user_id(conn)
    locale = Common.locale(conn)
    insparamtype_list_items =
      Model.InsparamType.get_insparam_types(user_id)
      |> Enum.map(fn insparam_type ->
      post_data_url = Routes.page_url(conn, :post_insparamtype_delete_data, insparam_type)
      %Data.PreferencesPage.InsparamtypeListItem{
        insparamtype: to_data(insparam_type),
        post_insparamtype_delete_data_url: post_data_url,
        csrf_token: Tag.csrf_token_value(post_data_url),
      }
    end)
    %Data{data_url: Routes.page_url(conn, :get_preferences_data),
          locale: locale,
          navbar: Common.gen_navbar(conn, :none),
          history_state: HistoryState.preferences(conn),
          preferences_url: Routes.page_url(conn, :get_preferences_page),
          preferences_data_url: Routes.page_url(conn, :get_preferences_data),
          logout: Common.gen_logout_data(conn),
          breadcrumb: Breadcrumb.preferences(conn),
          pages: %Data.Pages{
            preferences: %Data.PreferencesPage{
              insparamtype_list_items: insparamtype_list_items,
              get_insparamtype_add_data_url: Routes.page_url(conn, :get_insparamtype_add_data),
            }
          },
          translations: translate_domains(["menu", "preferences", "insparamtype"], locale) |> Map.merge(translate_domain_keys(["insparamtype"], locale))
    }
  end

  ###################
  # add inspection param type
  ###################

  def gen_insparamtype_add_data(conn, params \\ %{}, errors \\ %{}) do
    form_post_data_url = Routes.page_url(conn, :post_insparamtype_add_data)
    locale = Common.locale(conn)
    %Data{data_url: Routes.page_url(conn, :get_insparamtype_add_data),
          locale: locale,
          navbar: Common.gen_navbar(conn, :none),
          history_state: nil,
          preferences_url: Routes.page_url(conn, :get_preferences_page),
          preferences_data_url: Routes.page_url(conn, :get_preferences_data),
          logout: Common.gen_logout_data(conn),
          breadcrumb: Breadcrumb.insparamtype_add(conn),
          pages: %Data.Pages{
            insparamtype_add_update: %Data.InsparamtypeAddUpdatePage{
              title_msgid: "Add Inspection Param",
              form: %Data.Form{post_data_url: form_post_data_url,
                               cancel_data_url: Routes.page_url(conn, :get_preferences_data),
                               params: params,
                               errors: errors,
                               form_fields: nil},
              csrf_token: Tag.csrf_token_value(form_post_data_url),
            }
          },
          translations: translate_domains(["menu", "preferences", "insparamtype", "form"], locale) |> Map.merge(translate_domain_keys(["insparamtype"], locale))
    }
  end

end
