import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import DrumPad from "./components/DrumPad";
import { AudioPlayerProvider } from "react-use-audio-player";
import { io } from "socket.io-client";
import SocketProvider from "./lib/socket";

function App() {
  // const socket = io("http://localhost:4000");

  // socket.on("note_trigger", (note_id) => {
  //   setClickedPad(note_id);
  // });

  return (
    <SocketProvider>
      <AudioPlayerProvider>
        <div className="App bg-black text-white flex flex-col justify-center items-center">
          <DrumPad />
        </div>
      </AudioPlayerProvider>
    </SocketProvider>
  );
}

export default App;
