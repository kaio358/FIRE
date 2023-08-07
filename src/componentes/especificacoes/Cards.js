import styles from "./Cards.module.css"

function Cards({tipo,texto,nome}){
    return(
        <div className={styles.card} >
            <div>
                {tipo}
            </div>
            <div>
                <h2>{nome}</h2>
                
            </div>
            <div>
                {texto}
            </div>
           
            
        </div>
    )
}
export default Cards