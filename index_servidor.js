const express = require("express");
const http = require("http");  
const socketIo = require("socket.io");  

const app = express();
const cors = require("cors");

const server = http.createServer(app);  

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});  

const cards = require("./rotas/cards");
const arduino_update = require("./rotas/arduino_update"); 

app.use(cors());
app.use(express.json());
app.use("/", cards);
app.use("/",arduino_update(io))
const arduinoData = {
  "temperatura": 28,
  "umidade": 60,

};
io.on("connection", (socket) => {
    console.log("Novo cliente conectado:", socket.id);
    
  io.emit("novoArduinoData", JSON.stringify(arduinoData));
 
  socket.on("disconnect", () => {
    console.log('Cliente desconectado');
  });
});


server.listen(5000, () => {
  console.log("funcionando!!");
});
