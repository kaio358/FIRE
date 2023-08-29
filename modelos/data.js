const conexao = require("../infraestrutura/conexao")
class Data{
    listar(){
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM Data`
            conexao.query(sql,(erro,resultado)=>{
                if(erro){
                    reject(erro);
                }else{
        
                    resolve(resultado);
                }
            })
        })
    }

    getUmidade(){
        return new Promise((resolve, reject) => {
            const sql = `SELECT umidade FROM Data`
            conexao.query(sql,(erro,resultado)=>{
                if(erro){
                    reject(erro);
                }else{
                    resolve(resultado);
                }
            })
        })
    }
    getTemperatura(){
        return new Promise((resolve, reject) => {
            const sql = `SELECT temperatura FROM Data`
            conexao.query(sql,(erro,resultado)=>{
                if(erro){
                    reject(erro);
                }else{
                    resolve(resultado);
                }
            })
        })
    }
}

module.exports = new Data