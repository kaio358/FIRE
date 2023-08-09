import styles from "./DadosIncendios.module.css"

import grafico_ultimos_anos from "../../img/graficos/ig0jm-queimadas-na-amaz-nia.jpg"
import grafico_meses_taxa from "../../img/graficos/mapa-mensal-queimadas-florestas.jpeg"
import grafico_pizza from "../../img/graficos/ab.png"
import graficos_biomas from "../../img/graficos/biomas.jpg"

function DadosIncendios(){

    return(
        <div id="dados_de_incendios" className={styles.dados_de_incendios_container}>
            <div className={styles.introducao_dados}>
                <h1>Dados de incêndios</h1>
                <p>Nos últimos anos a taxa de incêndios tenderam aumento no mundo inteiro, devido por diversos fatores, neste sentido apresentaremos alguns dados dos últimos anos para alertar das necessidades urgentes.</p>
            </div>
            <div className={styles.imgs_dados}>
                <a href="https://g1.globo.com/natureza/noticia/2020/07/01/focos-de-queimadas-na-amazonia-em-junho-foram-os-maiores-para-o-mes-desde-2007-diz-inpe.ghtml" target="_blank"><img src={grafico_ultimos_anos}/> </a> 
                <a href="https://noticias.ambientebrasil.com.br/clipping/2020/06/03/160185-temporada-de-queimadas-comeca-com-alta-nos-registros-de-incendios-no-pampa-pantanal-e-mata-atlantica.html" target="_blank"><img src={grafico_pizza}/> </a> 
                <a href="https://www.poder360.com.br/meio-ambiente/area-de-florestas-queimadas-no-brasil-quase-dobra-em-1-ano/" target="_blank"><img src={grafico_meses_taxa}/> </a> 
                <a href="https://iusnatura.com.br/queimadas-pantanal/" target="_blank"><img src={graficos_biomas}/> </a> 
            </div>
        </div>
    )
}

export default DadosIncendios