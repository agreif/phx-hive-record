defmodule Hiverec.Handler.Preferences do
  @moduledoc """
  Preferences logic.
  """

  alias Hiverec.{Data, Model}
  alias Hiverec.Handler.{Common, HistoryState, Breadcrumb}
  alias HiverecWeb.Router.Helpers, as: Routes
  alias Phoenix.HTML.Tag
  alias Ecto.Changeset
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
      |> Enum.map(fn insparamtype ->
        post_data_url = Routes.page_url(conn, :post_insparamtype_delete_data, insparamtype)

        %Data.PreferencesPage.InsparamtypeListItem{
          insparamtype: to_data(insparamtype),
          get_insparamtype_update_data_url:
            Routes.page_url(conn, :get_insparamtype_update_data, insparamtype),
          post_insparamtype_delete_data_url: post_data_url,
          post_insparamtype_sortposup_data_url:
            Routes.page_url(conn, :post_insparamtype_sortposup_data, insparamtype),
          post_insparamtype_sortposdown_data_url:
            Routes.page_url(conn, :post_insparamtype_sortposdown_data, insparamtype),
          csrf_token: Tag.csrf_token_value(post_data_url)
        }
      end)

    %Data{
      data_url: Routes.page_url(conn, :get_preferences_data),
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
          get_insparamtype_add_data_url: Routes.page_url(conn, :get_insparamtype_add_data)
        }
      },
      translations:
        translate_domains(["menu", "preferences", "insparamtype", "form"], locale)
        |> Map.merge(translate_domain_keys(["insparamtype"], locale))
    }
  end

  ###################
  # add inspection param type
  ###################

  @doc """
  Stores the new inspection param type entity.

  Returns {conn, data} tuple
  """
  def process_post_add(conn, params) do
    user_id = Common.user_id(conn)
    locale = Common.locale(conn)
    result = Model.InsparamType.create_insparam_type(params, user_id)

    case result do
      {:ok, _} ->
        gen_data(conn)

      {:error, changeset} ->
        gen_insparamtype_add_data(conn, params, Common.human_errors(changeset, locale))
    end
  end

  def gen_insparamtype_add_data(conn, params \\ %{}, errors \\ %{}) do
    form_post_data_url = Routes.page_url(conn, :post_insparamtype_add_data)
    locale = Common.locale(conn)

    %Data{
      data_url: Routes.page_url(conn, :get_insparamtype_add_data),
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
          form: %Data.Form{
            post_data_url: form_post_data_url,
            cancel_data_url: Routes.page_url(conn, :get_preferences_data),
            params: params,
            errors: errors,
            form_fields: nil
          },
          csrf_token: Tag.csrf_token_value(form_post_data_url)
        }
      },
      translations:
        translate_domains(["menu", "preferences", "insparamtype", "form"], locale)
        |> Map.merge(translate_domain_keys(["insparamtype"], locale))
    }
  end

  ###################
  # delete inspection param type
  ###################

  def process_post_delete(conn, insparamtype_id) when is_integer(insparamtype_id) do
    user_id = Common.user_id(conn)
    result = Model.InsparamType.delete_insparam_type(insparamtype_id, user_id)

    case result do
      {:ok, _} -> gen_data(conn)
      {:error, _changeset} -> gen_data(conn)
    end
  end

  ###################
  # update inspection param type
  ###################

  def process_get_update(conn, insparamtype_id) when is_integer(insparamtype_id) do
    user_id = Common.user_id(conn)
    insparamtype = Model.InsparamType.get_insparam_type(insparamtype_id, user_id)
    gen_update_data(conn, insparamtype)
  end

  def process_post_update(conn, insparamtype_id, params) when is_integer(insparamtype_id) do
    user_id = Common.user_id(conn)
    locale = Common.locale(conn)
    result = Model.InsparamType.update_insparam_type(insparamtype_id, params, user_id)

    case result do
      {:ok, _} ->
        gen_data(conn)

      {:error, changeset} ->
        gen_update_data(
          conn,
          Changeset.apply_changes(changeset),
          Common.human_errors(changeset, locale)
        )
    end
  end

  defp gen_update_data(conn, insparamtype, errors \\ %{}) do
    form_post_data_url = Routes.page_url(conn, :post_insparamtype_update_data, insparamtype)
    locale = Common.locale(conn)

    %Data{
      data_url: Routes.page_url(conn, :get_insparamtype_update_data, insparamtype),
      locale: locale,
      navbar: Common.gen_navbar(conn, :insparamtype_list),
      history_state: nil,
      preferences_url: Routes.page_url(conn, :get_preferences_page),
      preferences_data_url: Routes.page_url(conn, :get_preferences_data),
      logout: Common.gen_logout_data(conn),
      breadcrumb: Breadcrumb.insparamtype_update(conn),
      pages: %Data.Pages{
        insparamtype_add_update: %Data.InsparamtypeAddUpdatePage{
          title_msgid: "Edit Inspection Param",
          form: %Data.Form{
            post_data_url: form_post_data_url,
            cancel_data_url: Routes.page_url(conn, :get_preferences_data),
            params: to_data(insparamtype),
            errors: errors,
            form_fields: nil
          },
          csrf_token: Tag.csrf_token_value(form_post_data_url)
        }
      },
      translations:
        translate_domains(["menu", "preferences", "insparamtype", "form"], locale)
        |> Map.merge(translate_domain_keys(["insparamtype"], locale))
    }
  end

  ###################
  # sort position inspection param type
  ###################

  def process_post_sort_pos_up(conn, insparamtype_id) when is_integer(insparamtype_id) do
    user_id = Common.user_id(conn)
    Model.InsparamType.update_sort_pos(insparamtype_id, &-/2, user_id)
    gen_data(conn)
  end

  def process_post_sort_pos_down(conn, insparamtype_id) when is_integer(insparamtype_id) do
    user_id = Common.user_id(conn)
    Model.InsparamType.update_sort_pos(insparamtype_id, &+/2, user_id)
    gen_data(conn)
  end
end
