class Tabela{
    init(conexao){
        this.conexao = conexao
        this.criarCards()
        this.criarArduinoData()
        this.criarImagens()
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
    criarArduinoData(){
        const sql = `CREATE TABLE IF NOT EXISTS Data ( id INT AUTO_INCREMENT PRIMARY KEY,temperatura FLOAT,umidade FLOAT)`
        this.conexao.query(sql,erro =>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Data criado");
            }
        })
    }
    criarImagens(){
        const sql = `CREATE TABLE IF NOT EXISTS Imagens (id INT AUTO_INCREMENT PRIMARY KEY, nome varchar(45),tipo varchar(30),dados longblob)`
        this.conexao.query(sql,erro=>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Imagens feito !!!");
            }
        })
    }
}
module.exports = new Tabela