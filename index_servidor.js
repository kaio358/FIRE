const express = require("express")

const app = express()
const cors = require("cors");

const cards = require("./rotas/cards") 

app.use(cors());
app.use('/',cards)
app.listen(5000,()=>{
    console.log("funcionando!!");
    

})