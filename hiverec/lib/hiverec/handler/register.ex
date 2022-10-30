defmodule Hiverec.Handler.Register do
  @moduledoc """
  Register business logic.
  """

  alias Hiverec.{Data, Model, Handler, Repo}
  alias Hiverec.Handler.Common
  alias Phoenix.HTML.Tag
  alias Ecto.Changeset
  alias HiverecWeb.Router.Helpers, as: Routes
  import Hiverec.Handler.Translation

  @doc """
  Registers the user.

  Returns {conn, data} tuple
  """
  def process_post_register(conn, params) do
    locale = Common.locale(conn)
    changeset = Model.User.changeset(%Model.User{}, params)
    if changeset.valid? do
      user = Changeset.apply_changes(changeset)
      hashed_password = Bcrypt.hash_pwd_salt(user.password)
      changeset = changeset |> Changeset.put_change(:password, hashed_password)
      case Repo.insert(changeset) do
        {:ok, _} -> Handler.Login.gen_data(conn)
        {:error, changeset} ->
          gen_data(conn, changeset.params, Common.human_errors(changeset, locale))
      end
    else
      gen_data(conn, changeset.params, Common.human_errors(changeset, locale))
    end
  end

  def gen_data(conn, params \\ %{}, errors \\ %{}) do
    form_post_data_url = Routes.page_url(conn, :post_register_data)
    locale = Common.locale(conn)
    %Data{data_url: Routes.page_url(conn, :get_register_data),
          locale: locale,
          navbar: nil,
          history_state: %Data.HistoryState{
            title: "Register",
            url: Routes.page_url(conn, :get_register_page)},
          logout: nil,
          breadcrumb: nil,
          pages: %Data.Pages{
            register: %Data.RegisterPage{
              form: %Data.Form{post_data_url: form_post_data_url,
                               cancel_data_url: nil,
                               params: params,
                               errors: errors,
                               form_fields: nil},
              csrf_token: Tag.csrf_token_value(form_post_data_url),
              get_login_url: Routes.page_url(conn, :get_login_page),
              get_login_data_url: Routes.page_url(conn, :get_login_data)
            }
          },
          translations: translate_domains(["login"], locale)
    }
  end

end
