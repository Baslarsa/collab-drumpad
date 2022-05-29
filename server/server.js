const io = require("socket.io")(4000, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", (socket) => {
  const id = socket.handshake.query.id;
  socket.join(id);

  socket.on("note_trigger", (note_id) => {
    io.to(id).emit("note_trigger", note_id);
  });

  console.log("Socket server up and running on port 4000");
});
