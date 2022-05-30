import { useContext } from "react";
import { SocketContext, SocketType } from "../../lib/context/socket";
import ElkLogo from "../ElkLogo";

export default function PadFrame({ children }: { children: JSX.Element }) {
  const { socket } = useContext(SocketContext) as SocketType;

  const handleKeyPress = (key: string) => {
    switch (key) {
      case "KeyQ":
        return socket.emit("note_trigger", "A1");
      case "KeyW":
        return socket.emit("note_trigger", "B1");
      case "KeyE":
        return socket.emit("note_trigger", "C1");
      case "KeyR":
        return socket.emit("note_trigger", "A2");
      case "KeyT":
        return socket.emit("note_trigger", "B2");
      case "KeyY":
        return socket.emit("note_trigger", "C2");
      case "KeyU":
        return socket.emit("note_trigger", "A3");
      case "KeyI":
        return socket.emit("note_trigger", "B3");
      case "KeyO":
        return socket.emit("note_trigger", "C3");
      default:
        return;
    }
  };
  return (
    <div className="p-6 bg-zinc-900 rounded-lg">
      <div className="text-left flex items-start justify-between">
        <ElkLogo style={{ fill: "#f6dd00" }} />
        <h2 className="text-white font-bold">Cool kinda 808</h2>
      </div>
      <div
        className="py-6 grid grid-cols-3 gap-4 max-w-6xl"
        onKeyPress={(e) => handleKeyPress(e.code)}
        tabIndex={0}
      >
        {children}
      </div>
    </div>
  );
}
