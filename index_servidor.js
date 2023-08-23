const express = require("express");
const http = require("http");  
const socketIo = require("socket.io");  
const cors = require("cors");
const bodyParser = require("body-parser")
const fs = require("fs"); 

const app = express();
const server = http.createServer(app);  


const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});  

const cards = require("./rotas/cards");
// const arduino_update = require("./rotas/arduino_update"); 
// const arduinoData = require("./teste.json")

const conexao = require("./infraestrutura/conexao")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(express.json());
app.use("/", cards);



// conexao.connect(erro=>{
//     if(erro){
//         console.log(erro);
//     }else{

//     }
// })

io.on("connection", (socket) => {
    console.log("Novo cliente conectado:", socket.id);
    
  
    fs.readFile("./teste.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        io.emit("novoArduinoData", data);
      }
    });

   
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
  console.log("Conectado: http://localhost:5000");
});
