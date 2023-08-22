const express = require("express");
const rota = express.Router();

function arduinoRouter(io) {
  rota.get("/arduino", (req, res) => {
    const arduinoData = {
      temperatura: 26,
      umidade: 60,

    };
    console.log(arduinoData); 
    
    io.emit("novoArduinoData", arduinoData);
    res.status(200).json({ message: "Dados do Arduino recebidos com sucesso!" });
  });
  

  return rota;
}
module.exports = arduinoRouter;
