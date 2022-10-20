defmodule Hiverec.Handler.Translation do
  @moduledoc """
  translations.
  """

  import HiverecWeb.Gettext

  def translate_domains(domains, locale) do
    domains
    |> Enum.reduce(%{}, fn domain, acc ->
      Map.merge(acc,
        translate_texts(domain, texts_en(domain), locale)
      )
    end)
  end

  defp translate_texts(domain, texts_en, locale) do
    texts_en
    |> Map.new(fn k ->
      {k,
       Gettext.with_locale(locale,
         fn -> Gettext.dgettext(HiverecWeb.Gettext, domain, k) end)
      }
    end)
  end

  @menu_domain "menu"
  defp texts_en(@menu_domain = _domain) do
    Gettext.with_locale("en", fn ->
      [
        dgettext(@menu_domain, "Locations"),
        dgettext(@menu_domain, "Hives"),
      ]
    end)
  end

  @login_domain "login"
  defp texts_en(@login_domain = _domain) do
    Gettext.with_locale("en", fn ->
      [
        dgettext(@login_domain, "Password"),
        dgettext(@login_domain, "Register"),
        dgettext(@login_domain, "Forgot your password"),
      ]
    end)
  end

  @form_domain "form"
  defp texts_en(@form_domain = _domain) do
    Gettext.with_locale("en", fn ->
      [
        dgettext(@form_domain, "Cancel"),
        dgettext(@form_domain, "Save"),
        dgettext(@form_domain, "Delete"),
      ]
    end)
  end

  @location_domain "location"
  defp texts_en(@location_domain = _domain) do
    Gettext.with_locale("en", fn ->
      [
        dgettext(@location_domain, "Locations"),
        dgettext(@location_domain, "Location"),
        dgettext(@location_domain, "Add Location"),
        dgettext(@location_domain, "Location Detail"),
        dgettext(@location_domain, "Edit Location"),
        dgettext(@location_domain, "Delete Location"),
        dgettext(@location_domain, "Do you really want to delete this Location?"),
        dgettext(@location_domain, "Name"),
      ]
    end)
  end

  @hive_domain "hive"
  defp texts_en(@hive_domain = _domain) do
    Gettext.with_locale("en", fn ->
      [
        dgettext(@hive_domain, "Hives"),
        dgettext(@hive_domain, "Hive"),
        dgettext(@hive_domain, "Add Hive"),
        dgettext(@hive_domain, "Hive Detail"),
        dgettext(@hive_domain, "Edit Hive"),
        dgettext(@hive_domain, "Delete Hive"),
        dgettext(@hive_domain, "Do you really want to delete this Hive?"),
        dgettext(@hive_domain, "Name"),
      ]
    end)
  end

end
