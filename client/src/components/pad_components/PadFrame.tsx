import { useContext } from "react";
import { SocketContext, SocketType } from "../../lib/context/socket";

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
    <div
      className="py-16 grid grid-cols-3 gap-4 max-w-6xl px-6"
      onKeyPress={(e) => handleKeyPress(e.code)}
      tabIndex={0}
    >
      {children}
    </div>
  );
}
