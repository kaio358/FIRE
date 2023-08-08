import styles from "./DadosIncendios.module.css"

function DadosIncendios(){
    return(
        <div id="dados_de_incendios" className={styles.dados_de_incendios_container}>
            <div className={styles.introducao_dados}>
                <h1>Dados de incendios</h1>
                <p>Nos últimos anos a taxa de incêndios tenderam aumento no mundo inteiro, devido por diversos fatores, neste sentido apresentaremos alguns dados dos últimos anos para alertar das necessidades urgentes.</p>
            </div>
            <div>

            </div>
        </div>
    )
}

export default DadosIncendios