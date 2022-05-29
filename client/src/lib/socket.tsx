import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export type SocketType = {
  trigNote: (note: string) => void;
  triggeredNote: string;
};

export const SocketContext = React.createContext<SocketType | null>(null);

const SocketProvider = ({ children }: { children: JSX.Element | null }) => {
  const [triggeredNote, setTriggeredNote] = useState("");

  const trigNote = (note: string) => {
    setTriggeredNote(note);
  };

  useEffect(() => {
    const socket = io("http://localhost:4000");
    socket.on("note_trigger", (note_id) => {
      setTriggeredNote(note_id);
    });

    socket.emit("note_trigger", triggeredNote);
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ trigNote, triggeredNote }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
