const conexao = require("../infraestrutura/conexao")


class Cards{
    lista(){
        const sql = `SELECT * FROM Cards`
        conexao.query(sql,(erro,resultado)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log(resultado);
                return resultado
            }
        })
    }
}
module.exports = new Cards