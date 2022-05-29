const io = require("socket.io")(4000, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", (socket) => {
  const userName = socket.handshake.query.username;
  socket.join(userName);

  socket.on("note_trigger", (note_id) => {
    io.emit("note_trigger", note_id);
  });
});
