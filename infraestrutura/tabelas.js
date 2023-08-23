class Tabela{
    init(conexao){
        this.conexao = conexao
        this.criarCards()
    }
    criarCards(){
        const sql = `CREATE TABLE IF NOT EXISTS Cards(id int NOT NULL AUTO_INCREMENT, nome varchar(255) NOT NULL, texto text, PRIMARY KEY(id) )`
        this.conexao.query(sql,erro =>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Cards criado");
            }
        })
    }
}
module.exports = new Tabela