const express = require("express");
const http = require("http");  
const socketIo = require("socket.io");  

const app = express();
const cors = require("cors");

const server = http.createServer(app);  

const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});  

const cards = require("./rotas/cards");
const arduino_update = require("./rotas/arduino_update"); 

app.use(cors());
app.use(express.json());
app.use("/", cards);
app.use("/",arduino_update(io))

io.on("connection", (socket) => {
    console.log("Novo cliente conectado:", socket.id);

    socket.on("novoArduinoData", () => {
      const arduinoData = {
        temperature: 25,
        humidity: 60,

      };
      io.emit("novoArduinoData", arduinoData); 
    });
  socket.on("disconnect", () => {
    console.log('Cliente desconectado');
  });
});


server.listen(5000, () => {
  console.log("funcionando!!");
});
