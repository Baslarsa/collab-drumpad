import { useState } from "react";
import "./index.css";
import Login from "./components/Login.tsx";
import useLocalStorage from "./hooks/useLocalStorage.ts";
import DrumPad from "./components/DrumPad";

function App() {
  const [id, setId] = useLocalStorage("username");
  return (
    <div className="App bg-black w-full h-screen flex flex-col justify-center items-center">
      <p className="text-white font-bold">
        {id && <span>Welcome back {id}</span>}
      </p>
      {/* <Login setId={setId} /> */}
      <DrumPad />
    </div>
  );
}

export default App;
