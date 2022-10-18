defmodule Hiverec.Handler.Hive do
  @moduledoc """
  Hive business logic.
  """

  alias Hiverec.{Data, Model, Handler}
  alias Hiverec.Handler.Common
  alias HiverecWeb.Router.Helpers, as: Routes
  alias Phoenix.HTML.Tag
  # alias Ecto.Changeset
  import HiverecWeb.Gettext

  @gettext_domain "hive"

  defp texts_en() do
    Gettext.with_locale("en", fn ->
      [
        dgettext(@gettext_domain, "Name"),
        dgettext(@gettext_domain, "Cancel"),
        dgettext(@gettext_domain, "Save"),
        dgettext(@gettext_domain, "Add Hive"),
      ]
    end)
  end

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
    locale = Common.locale(conn)
    %Data{data_url: Routes.page_url(conn, :get_hive_add_data, location_id),
          locale: locale,
          navbar: Common.gen_navbar(conn, :location),
          history_state: nil,
          logout: Common.gen_logout_data(conn),
          pages: %Data.Pages{
            hive_add_update: %Data.HiveAddUpdatePage{
              title_msgid: "Add Hive",
              form: %Data.Form{post_data_url: form_post_data_url,
                               cancel_data_url: Routes.page_url(conn, :get_location_detail_data, location_id),
                               params: params,
                               errors: errors},
              csrf_token: Tag.csrf_token_value(form_post_data_url),
            }
          },
          translations: Common.translations(@gettext_domain, texts_en(), locale)
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
