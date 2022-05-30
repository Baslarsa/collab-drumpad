import "./App.css";
import DrumPad from "./components/DrumPad";
import { AudioPlayerProvider } from "react-use-audio-player";
import SocketProvider, {
  SocketContext,
  SocketType,
} from "./lib/context/socket";
import Login from "./components/Login";
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./components/Header";
import { useContext } from "react";

function App() {
  const [id, setId] = useLocalStorage(() => {
    localStorage.getItem("collab-drumpad-id" || "default");
  });

  const clearId = () => {
    setId("");
    localStorage.removeItem("collab-drumpad-id");
  };
  return (
    <SocketProvider id={id}>
      <AudioPlayerProvider>
        <div className="App bg-black text-white flex flex-col justify-center items-center">
          <Header id={id} clearId={clearId} />
          {id ? <DrumPad /> : <Login setId={setId} />}
        </div>
      </AudioPlayerProvider>
    </SocketProvider>
  );
}

export default App;
