import classNames from "classnames";
import { useContext, useEffect, useState } from "react";
import { SocketContext, SocketType } from "../lib/context/socket";
import ElkLogo from "./ElkLogo";

export default function Header({
  id,
  clearId,
}: {
  id: string;
  clearId: () => void;
}) {
  const [statusMessage, setStatusMessage] = useState("Not connected");
  const { socket } = useContext(SocketContext) as SocketType;

  useEffect(() => {
    socket.on("connect", () => {
      setStatusMessage("Connected to server");
    });
    socket.on("disconnect", () => {
      setStatusMessage("Disconnected from server");
    });
  }, []);
  return (
    <div className="w-full p-5 flex justify-between items-center">
      <div className="text-left">
        <ElkLogo style={{ fill: "#fff" }} />
        <h2 className="text-white font-bold">Collab Drumpad</h2>
      </div>
      {id && (
        <div className="flex items-center">
          <p
            className={classNames("mx-4", {
              "text-red-500": statusMessage === "Disconnected from server",
              "text-green-500": statusMessage === "Connected to server",
            })}
          >
            {statusMessage}
          </p>
          <p>
            <span className="font-bold">Room ID:</span>&nbsp;{id}
          </p>
          <button
            onClick={clearId}
            className="inline-flex my-2 ml-4 items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-black bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700"
          >
            Switch Room
          </button>
        </div>
      )}
    </div>
  );
}
