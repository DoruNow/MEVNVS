const express = require("express");
const app = express();
const port = 3000;
const server = require("http").createServer(app);
const io = require("socket.io")(server);

server.listen(port, () => {
  console.log("Server listening to port %d", port);
});

io.on("connection", socket => {
  setInterval(() => {
    socket.emit("newdata", "tick at 5 seconds");
  }, 5000);
});
