import { createContext, useState } from "react";
import { io, Socket } from "socket.io-client";

export type SocketType = {
  socket: Socket;
};

export const SocketContext = createContext<SocketType | null>(null);

const SocketProvider = ({
  children,
  id,
}: {
  children: JSX.Element | null;
  id: string;
}) => {
  const socket = io("http://localhost:4000", {
    query: { id: id },
  });

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
