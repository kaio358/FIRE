const express = require("express")
const rota = express()

const db_teste = require("../db_teste.json")

rota.get('/cards',(req,res)=>{
    res.json(db_teste)                                                                             
})

module.exports = rota