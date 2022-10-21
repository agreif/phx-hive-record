defprotocol Hiverec.Datable do
  @moduledoc """
  Protocol controling how data structures, also recursive,
  are converted to simple data that can be converted to JSON.
  """

  @fallback_to_any true
  def to_data(struct)
end

defimpl Hiverec.Datable, for: Any do
  def to_data(%{} = map) do
    map
    |> Enum.map(fn {k, v} ->
      case v do
        %Ecto.Association.NotLoaded{} -> {k, nil}
        [_ | _] = list -> {k, Hiverec.Datable.to_data(list)}
        vv -> {k, vv}
      end
    end)
    |> Map.new
  end

  def to_data([head | tail]) do
    [Hiverec.Datable.to_data(head) | Hiverec.Datable.to_data(tail)]
  end

  def to_data(value), do: value

end

defimpl Hiverec.Datable, for: Hiverec.Model.Location do
  def to_data(location) do
    struct(Hiverec.Data.Location,
      Hiverec.Datable.to_data(Map.from_struct(location)))
  end
end

defimpl Hiverec.Datable, for: Hiverec.Model.Hive do
  def to_data(hive) do
    struct(Hiverec.Data.Hive,
      Hiverec.Datable.to_data(Map.from_struct(hive)))
  end
end

defimpl Hiverec.Datable, for: Hiverec.Model.Inspection do
  def to_data(inspection) do
    struct(Hiverec.Data.Inspection,
      Hiverec.Datable.to_data(Map.from_struct(inspection)))
  end
end
