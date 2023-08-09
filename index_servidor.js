const express = require("express");
const http = require("http");  
const socketIo = require("socket.io");  

const app = express();
const cors = require("cors");
const server = http.createServer(app);  

const io = socketIo(server);  

const cards = require("./rotas/cards");

app.use(cors());
app.use("/", cards);

io.on("connection", (socket) => {
  console.log("A new socket connection has been established!");


  socket.on("disconnect", () => {
    console.log("A socket connection has been disconnected!");
  });
});

server.listen(5000, () => {
  console.log("funcionando!!");
});
