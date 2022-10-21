defmodule Hiverec.Handler.Breadcrumb do
  @moduledoc """
  Breadcrumb business logic.
  """

  alias Hiverec.{Data}
  alias HiverecWeb.Router.Helpers, as: Routes

  def locations(conn) do
    %Data.Breadcrumb{
      breadcrumb_items: [
        locations_item(conn)
      ]
    }
  end

  def location(conn, location) do
    %Data.Breadcrumb{
      breadcrumb_items: [
        locations_item(conn),
        location_item(conn, location)
      ]
    }
  end

  def location_add(conn) do
    %Data.Breadcrumb{
      breadcrumb_items: [
        locations_item(conn),
        %Data.BreadcrumbItem{
          label: nil,
          label_msgid: "Add Location",
          url: nil,
          data_url: nil
        }
      ]
    }
  end

  def location_update(conn, location) do
    %Data.Breadcrumb{
      breadcrumb_items: [
        locations_item(conn),
        location_item(conn, location),
        %Data.BreadcrumbItem{
          label: nil,
          label_msgid: "Edit Location",
          url: nil,
          data_url: nil
        }
      ]
    }
  end

  def hive_add(conn, location) do
    %Data.Breadcrumb{
      breadcrumb_items: [
        locations_item(conn),
        location_item(conn, location),
        %Data.BreadcrumbItem{
          label: nil,
          label_msgid: "Add Hive",
          url: nil,
          data_url: nil
        }
      ]
    }
  end

  def hive(conn, location, hive) do
    %Data.Breadcrumb{
      breadcrumb_items: [
        locations_item(conn),
        location_item(conn, location),
        hive_item(conn, hive)
      ]
    }
  end

  def hive_update(conn, location, hive) do
    %Data.Breadcrumb{
      breadcrumb_items: [
        locations_item(conn),
        location_item(conn, location),
        hive_item(conn, hive),
        %Data.BreadcrumbItem{
          label: nil,
          label_msgid: "Edit Hive",
          url: nil,
          data_url: nil
        }
      ]
    }
  end

  def inspection_add(conn, location, hive) do
    %Data.Breadcrumb{
      breadcrumb_items: [
        locations_item(conn),
        location_item(conn, location),
        hive_item(conn, hive),
        %Data.BreadcrumbItem{
          label: nil,
          label_msgid: "Add Inspection",
          url: nil,
          data_url: nil
        }
      ]
    }
  end

  # breadcrumb items

  defp locations_item(conn) do
    %Data.BreadcrumbItem{
      label: nil,
      label_msgid: "Locations",
      url: Routes.page_url(conn, :get_location_list_page),
      data_url: Routes.page_url(conn, :get_location_list_data)
    }
  end

  defp location_item(conn, location) do
    %Data.BreadcrumbItem{
      label: location.name,
      label_msgid: nil,
      url: Routes.page_url(conn, :get_location_detail_page, location),
      data_url: Routes.page_url(conn, :get_location_detail_data, location)
    }
  end

  defp hive_item(conn, hive) do
    %Data.BreadcrumbItem{
      label: hive.name,
      label_msgid: nil,
      url: Routes.page_url(conn, :get_hive_detail_page, hive),
      data_url: Routes.page_url(conn, :get_hive_detail_data, hive)
    }
  end
end
