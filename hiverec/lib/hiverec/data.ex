defmodule Hiverec.Data do
  @moduledoc """
  Top of the Data hierarchy that is sent to the client as JSON.
  """
  @derive Jason.Encoder
  @enforce_keys [:data_url, :locale, :navbar, :history_state, :logout, :breadcrumb, :pages, :translations]
  defstruct [:data_url, :locale, :navbar, :history_state, :logout, :breadcrumb, :pages, :translations]
end

defmodule Hiverec.Data.HistoryState do
  @moduledoc """
  Browser history state.
  """
  @derive Jason.Encoder
  @enforce_keys [:title, :url]
  defstruct [:title, :url]
end


defmodule Hiverec.Data.Navbar do
  @moduledoc """
  Navigation bar.
  """
  @derive Jason.Encoder
  @enforce_keys [:navitems]
  defstruct [:navitems]
end

defmodule Hiverec.Data.Navitem do
  @moduledoc """
  Navogation item.
  """
  @derive Jason.Encoder
  @enforce_keys [:label, :label_msgid, :is_active, :is_header, :url, :data_url, :dropdown_items]
  defstruct [:label, :label_msgid, :is_active, :is_header, :url, :data_url, :dropdown_items]
end


defmodule Hiverec.Data.Breadcrumb do
  @moduledoc """
  Breadcrumb.
  """
  @derive Jason.Encoder
  @enforce_keys [:breadcrumb_items]
  defstruct [:breadcrumb_items]
end

defmodule Hiverec.Data.BreadcrumbItem do
  @moduledoc """
  Breadcrumb item.
  """
  @derive Jason.Encoder
  @enforce_keys [:label, :label_msgid, :url, :data_url]
  defstruct [:label, :label_msgid, :url, :data_url]
end


defmodule Hiverec.Data.Logout do
  @moduledoc """
  Logout data.
  """
  @derive Jason.Encoder
  @enforce_keys [:post_url, :csrf_token]
  defstruct [:post_url, :csrf_token]
end


defmodule Hiverec.Data.Form do
  @moduledoc """
  Generic HTML Form data.
  """
  @derive Jason.Encoder
  @enforce_keys [:post_data_url, :cancel_data_url, :params, :errors]
  defstruct [:post_data_url, :cancel_data_url, :params, :errors]
end


defmodule Hiverec.Data.Pages do
  @moduledoc """
  Container for all available pages.
  """
  @derive Jason.Encoder
  defstruct [:error, :location_list, :location_add_update, :location_detail,
             :hive_add_update, :hive_detail,
             :inspection_add_update,
             :register, :login]
end

defmodule Hiverec.Data.RegisterPage do
  @moduledoc """
  Register page.
  """
  @derive Jason.Encoder
  @enforce_keys [:form, :csrf_token, :get_login_url, :get_login_data_url]
  defstruct [:form, :csrf_token, :get_login_url, :get_login_data_url]
end

defmodule Hiverec.Data.LoginPage do
  @moduledoc """
  Login page.
  """
  @derive Jason.Encoder
  @enforce_keys [:form, :csrf_token, :get_register_url, :get_register_data_url]
  defstruct [:form, :csrf_token, :get_register_url, :get_register_data_url]
end

defmodule Hiverec.Data.ErrorPage do
  @moduledoc """
  Error page.
  """
  @derive Jason.Encoder
  @enforce_keys [:message]
  defstruct [:message]
end

defmodule Hiverec.Data.LocationListPage do
  @moduledoc """
  Location list page.
  """
  @derive Jason.Encoder
  @enforce_keys [:location_list_items, :get_location_add_data_url]
  defstruct [:location_list_items, :get_location_add_data_url]
end


defmodule Hiverec.Data.LocationListPage.LocationListItem do
  @moduledoc """
  location list item.
  """
  @derive Jason.Encoder
  @enforce_keys [:location, :get_location_detail_data_url, :post_location_delete_data_url, :csrf_token]
  defstruct [:location, :get_location_detail_data_url, :post_location_delete_data_url, :csrf_token]
end

defmodule Hiverec.Data.Location do
  @moduledoc """
  location.
  """
  @derive Jason.Encoder
  defstruct [:id, :name]
end

defmodule Hiverec.Data.Hive do
  @moduledoc """
  Hive.
  """
  @derive Jason.Encoder
  defstruct [:id, :name, :queen_year, :is_queen_marked, :notes]
end

defmodule Hiverec.Data.Inspection do
  @moduledoc """
  Inspection.
  """
  @derive Jason.Encoder
  defstruct [:id, :date]
end



defmodule Hiverec.Data.LocationDetailPage do
  @moduledoc """
  Location detail page.
  """
  @derive Jason.Encoder
  @enforce_keys [:location, :get_location_update_data_url, :hive_list_items, :get_hive_add_data_url]
  defstruct [:location, :get_location_update_data_url, :hive_list_items, :get_hive_add_data_url]
end


defmodule Hiverec.Data.LocationDetailPage.HiveListItem do
  @moduledoc """
  hive list item.
  """
  @derive Jason.Encoder
  @enforce_keys [:hive, :get_hive_detail_data_url, :post_hive_delete_data_url, :csrf_token]
  defstruct [:hive, :get_hive_detail_data_url, :post_hive_delete_data_url, :csrf_token]
end





defmodule Hiverec.Data.LocationAddUpdatePage do
  @moduledoc """
  Page to add Location item.
  """
  @derive Jason.Encoder
  @enforce_keys [:title_msgid, :form, :csrf_token]
  defstruct [:title_msgid, :form, :csrf_token]
end


defmodule Hiverec.Data.HiveAddUpdatePage do
  @moduledoc """
  Page to add Hive item.
  """
  @derive Jason.Encoder
  @enforce_keys [:title_msgid, :form, :csrf_token]
  defstruct [:title_msgid, :form, :csrf_token]
end


defmodule Hiverec.Data.HiveDetailPage do
  @moduledoc """
  Hive detail page.
  """
  @derive Jason.Encoder
  @enforce_keys [:hive, :get_hive_update_data_url, :inspection_list_items, :get_inspection_add_data_url]
  defstruct [:hive, :get_hive_update_data_url, :inspection_list_items, :get_inspection_add_data_url]
end

defmodule Hiverec.Data.HiveDetailPage.InspectionListItem do
  @moduledoc """
  inspection list item.
  """
  @derive Jason.Encoder
  @enforce_keys [:inspection, :post_inspection_delete_data_url, :csrf_token]
  defstruct [:inspection, :post_inspection_delete_data_url, :csrf_token]
end


defmodule Hiverec.Data.InspectionAddUpdatePage do
  @moduledoc """
  Page to add Inspection item.
  """
  @derive Jason.Encoder
  @enforce_keys [:title_msgid, :form, :csrf_token]
  defstruct [:title_msgid, :form, :csrf_token]
end


