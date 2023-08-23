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
// const arduino_update = require("./rotas/arduino_update"); 
const arduinoData = require("./teste.json")

app.use(cors());
app.use(express.json());
app.use("/", cards);


const fs = require("fs"); // importa o módulo fs

io.on("connection", (socket) => {
    console.log("Novo cliente conectado:", socket.id);
    
    // lê o arquivo teste.json inicialmente e emite os dados para o cliente
    fs.readFile("./teste.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        io.emit("novoArduinoData", data);
      }
    });

    // monitora o arquivo teste.json e emite os dados atualizados para o cliente quando ele for modificado
    fs.watchFile("./teste.json", (curr, prev) => {
      fs.readFile("./teste.json", "utf8", (err, data) => {
        if (err) {
          console.error(err);
        } else {
          io.emit("novoArduinoData", data);
        }
      });
    });
 
  socket.on("disconnect", () => {
    console.log('Cliente desconectado');
  });
});



server.listen(5000, () => {
  console.log("funcionando!!");
});
