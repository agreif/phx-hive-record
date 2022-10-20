defmodule Hiverec.Handler.Login do
  @moduledoc """
  Login business logic.
  """

  alias Hiverec.Data
  alias Hiverec.Handler.Common
  alias Hiverec.Model
  alias HiverecWeb.Router.Helpers, as: Routes
  alias Phoenix.HTML.Tag
  alias Ecto.Changeset
  alias Plug.Conn
  import Hiverec.Handler.Translation

  @doc """
  Logs the user in.

  On success it puts the :login into the session and returns the new data.
  In case of error the login-data with the errors is returned

  Returns {conn, data} tuple
  """
  def process_post_login(conn, params) do
    locale = Common.locale(conn)
    changeset = login_changeset(params)
    if changeset.valid? do
      %{login: login, password: password} = Changeset.apply_changes(changeset)
      if Model.User.get_by_login_and_password(login, password) do
        conn = conn |> Common.renew_session |> Conn.put_session(:login, login)
        data = [] # does not matter what but not login-data
        {conn, data}
      else
          data = gen_data(conn, params,
            changeset
            |> Changeset.add_error(:misc, "unknown user or wrong password")
            |> Common.human_errors(locale))
          {conn, data}
      end
    else
      data = gen_data(conn, params, Common.human_errors(changeset, locale))
      {conn, data}
    end
  end

  defp login_changeset(params) do
    data = %{}
    types = %{login: :string, password: :string}
    {data, types}
    |> Changeset.cast(params, Map.keys(types))
    |> Changeset.validate_required([:login, :password])
  end

  def gen_data(conn, params \\ %{}, errors \\ %{}) do
    locale = Common.locale(conn)
    form_post_data_url = Routes.page_url(conn, :post_login_data)
    %Data{data_url: Routes.page_url(conn, :get_login_data),
          locale: locale,
          navbar: nil,
          history_state: %Data.HistoryState{
            title: "Login",
            url: Routes.page_url(conn, :get_login_page)},
          logout: nil,
          breadcrumb: nil,
          pages: %Data.Pages{
            login: %Data.LoginPage{
              form: %Data.Form{post_data_url: form_post_data_url,
                               cancel_data_url: nil,
                               params: params,
                               errors: errors},
              csrf_token: Tag.csrf_token_value(form_post_data_url),
              get_register_url: Routes.page_url(conn, :get_register_page),
              get_register_data_url: Routes.page_url(conn, :get_register_data)
            }
          },
          translations: translate_domains(["login"], locale)
    }
  end

end
