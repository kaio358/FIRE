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

    getUmidade( id){
        return new Promise((resolve, reject) => {
            const sql = `SELECT umidade FROM Data WHERE id = ${id}`
            conexao.query(sql,(erro,resultado)=>{
                if(erro){
                    reject(erro);
                }else{
                    resolve(resultado);
                }
            })
        })
    }
    getTemperatura(id){
        return new Promise((resolve, reject) => {
            const sql = `SELECT temperatura FROM Data WHERE id = ${id}`
            conexao.query(sql,(erro,resultado)=>{
                if(erro){
                    reject(erro);
                }else{
                    resolve(resultado);
                }
            })
        })
    }

    adiciona(dados){
        const sql = `INSERT INTO Cards set ?`
        conexao.query(sql,dados,(erro,resultado)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log(resultado);
            }
        })
    }
    setUmidade(umidade){
        const sql = `INSERT INTO Data set ?`

        conexao.query(sql,umidade,(erro,resultado)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log(resultado);
            }
        })
    }
    setTemperatura(temperatura){
        const sql = `INSERT INTO Data set ?`

        conexao.query(sql,temperatura,(erro,resultado)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log(resultado);
            }
        })
    }
    atualizar(dados,id){
        const sql = `UPDATE Data SET ? WHERE id= ${id} `
        conexao.query(sql,dados,(erro,resultado)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log(resultado);
            }
        })
    }
}

module.exports = new Data