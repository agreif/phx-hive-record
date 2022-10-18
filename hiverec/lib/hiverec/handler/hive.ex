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
  def process_post_add(conn, %{"location_id" => location_id} = params) do
    user_id = Common.user_id(conn)
    locale = Common.locale(conn)
    result = Model.Hive.create_hive(params, location_id, user_id)
    case result do
      {:ok, _} -> Handler.Location.gen_detail_data(conn, params)
      {:error, changeset} ->
        gen_add_data(conn, params, Common.human_errors(changeset, locale))
    end
  end

  def gen_add_data(conn, %{"location_id" => location_id} = params, errors \\ %{}) do
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

end
