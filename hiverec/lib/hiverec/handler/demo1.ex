defmodule Hiverec.Handler.Demo1 do
  @moduledoc """
  Demo1 business logic.
  """

  alias Hiverec.{Common, Data, Model, Handler, Repo}
  alias HiverecWeb.Router.Helpers, as: Routes
  alias Phoenix.HTML.Tag
  alias Ecto.Changeset
  import HiverecWeb.Gettext

  @gettext_domain "demo1"

  defp texts_en() do
    Gettext.with_locale("en", fn ->
      [
        dgettext(@gettext_domain, "Demo 1 Page"),
        dgettext(@gettext_domain, "Add Demo1"),
        dgettext(@gettext_domain, "Edit Demo1"),
        dgettext(@gettext_domain, "Delete Demo1"),
        dgettext(@gettext_domain, "Do you really want to delete this Demo1?"),
        dgettext(@gettext_domain, "Attribute 1"),
        dgettext(@gettext_domain, "Attribute 2"),
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
    demo1_items = Model.Demo1.all_demo1s()
    |> Enum.map(fn demo1 ->
      post_data_url = Routes.page_url(conn, :post_demo1_delete_data, demo1)
      %Data.Demo1Item{entity: demo1,
                      get_demo1_update_data_url: Routes.page_url(conn, :get_demo1_update_data, demo1),
                      post_demo1_delete_data_url: post_data_url,
                      csrf_token: Tag.csrf_token_value(post_data_url),
                     } end)
    locale = Common.locale(conn)
    %Data{data_url: Routes.page_url(conn, :get_demo1_list_data),
          locale: locale,
          navbar: Common.gen_navbar(conn, :demo1_list),
          history_state: %Data.HistoryState{
            title: "Demo 1",
            url: Routes.page_url(conn, :get_demo1_list_page)},
          logout: Common.gen_logout_data(conn),
          pages: %Data.Pages{
            demo1_list: %Data.Demo1ListPage{
              demo1_items: demo1_items,
              get_demo1_add_data_url: Routes.page_url(conn, :get_demo1_add_data),
            }
          },
          translations: Common.translations(@gettext_domain, texts_en(), locale)
    }
  end

  ###################
  # add
  ###################

  @doc """
  Stores the new Demo1 entity.

  Returns {conn, data} tuple
  """
  def process_post_add(conn, params) do
    locale = Common.locale(conn)
    changeset = Model.Demo1.changeset(%Model.Demo1{}, params)
    if changeset.valid? do
      case Repo.insert(changeset) do
        {:ok, _} -> Handler.Demo1.gen_list_data(conn)
        {:error, changeset} ->
          gen_add_data(conn, changeset.params, Common.human_errors(changeset, locale))
      end
    else
      gen_add_data(conn, changeset.params, Common.human_errors(changeset, locale))
    end
  end

  def gen_add_data(conn, params \\ %{}, errors \\ %{}) do
    form_post_data_url = Routes.page_url(conn, :post_demo1_add_data)
    locale = Common.locale(conn)
    %Data{data_url: Routes.page_url(conn, :get_demo1_add_data),
          locale: locale,
          navbar: Common.gen_navbar(conn, :demo1),
          history_state: nil,
          logout: Common.gen_logout_data(conn),
          pages: %Data.Pages{
            demo1_add_update: %Data.Demo1AddUpdatePage{
              title_msgid: "Add Demo1",
              form: %Data.Form{post_url: form_post_data_url,
                               params: params,
                               errors: errors},
              csrf_token: Tag.csrf_token_value(form_post_data_url),
              get_demo1_list_data_url: Routes.page_url(conn, :get_demo1_list_data)
            }
          },
          translations: Common.translations(@gettext_domain, texts_en(), locale)
    }
  end

  ###################
  # update
  ###################

  def process_get_update(conn, params) do
    demo1 = Repo.get!(Model.Demo1, params["id"])
    gen_update_data(conn, demo1)
  end

  def process_post_update(conn, params) do
    demo1 = Repo.get!(Model.Demo1, params["id"])
    changeset = Model.Demo1.changeset(demo1, params)
    case Repo.update(changeset) do
      {:ok, _} -> Handler.Demo1.gen_list_data(conn)
      {:error, changeset} ->
        gen_update_data(conn,
          Changeset.apply_changes(changeset),
          Common.human_errors(changeset, Common.locale(conn)))
    end
  end

  defp gen_update_data(conn, demo1, errors \\ %{}) do
    form_post_data_url = Routes.page_url(conn, :post_demo1_update_data, demo1)
    locale = Common.locale(conn)
    %Data{data_url: Routes.page_url(conn, :get_demo1_update_data, demo1),
          locale: locale,
          navbar: Common.gen_navbar(conn, :demo1),
          history_state: nil,
          logout: Common.gen_logout_data(conn),
          pages: %Data.Pages{
            demo1_add_update: %Data.Demo1AddUpdatePage{
              title_msgid: "Edit Demo1",
              form: %Data.Form{post_url: form_post_data_url,
                               params: demo1,
                               errors: errors},
              csrf_token: Tag.csrf_token_value(form_post_data_url),
              get_demo1_list_data_url: Routes.page_url(conn, :get_demo1_list_data)
            }
          },
          translations: Common.translations(@gettext_domain, texts_en(), locale)
    }
  end


  ###################
  # delete
  ###################

  def process_post_delete(conn, params) do
    demo1 = Repo.get!(Model.Demo1, params["id"])
    case Repo.delete(demo1) do
      {:ok, _} -> Handler.Demo1.gen_list_data(conn)
      {:error, _changeset} -> Handler.Demo1.gen_list_data(conn)
    end
  end


end
