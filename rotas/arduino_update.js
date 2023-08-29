
const Data = require("../modelos/data")

function arduinoRouter(io = 0) {
 
 setInterval(async ()=>{
    const dado = await Data.listar()
    io.emit("novoArduinoData", JSON.stringify(dado[0]));
  },5000)

 
}
module.exports = arduinoRouter;
