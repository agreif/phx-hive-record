defmodule RiotWatcher do
  @moduledoc """
  Watches changes on riot files and compiles if needed.
  Then tells the mac to say "ok" or "riot error"

  Run it with
  $ mix run riot_watcher.exs
  """

  use GenServer
  import Say

  def start_link(args) do
    GenServer.start_link(__MODULE__, args)
  end

  def init(args) do
    {:ok, watcher_pid} = FileSystem.start_link(args)
    FileSystem.subscribe(watcher_pid)
    {:ok, %{watcher_pid: watcher_pid}}
  end

  def handle_info({:file_event, watcher_pid, {path, events}}, %{watcher_pid: watcher_pid} = state) do
    if :closed in events do
      IO.puts(path)
      {_, result} = System.cmd(System.cwd <> "/node_modules/.bin/riot",
        [Path.basename(path), "-o", System.cwd <> "/priv/static/riot/"],
        cd: System.cwd <> "/priv/riot")
      case result do
        0 -> say("ok")
        _ -> say("riot error")
      end
      IO.puts("-----------------------------------------------------------")
    end
    {:noreply, state}
  end

  def loop do
    receive do
      msg ->
        IO.inspect(msg, label: "inside process loop")
        loop()
    end
  end

end


RiotWatcher.start_link(dirs: ["priv/riot/"])
IO.puts("riot watcher running...")
RiotWatcher.loop()
