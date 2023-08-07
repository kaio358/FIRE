import {ImLocation,ImConnection,ImLeaf ,ImEyeBlocked,ImBin2} from "react-icons/im";

import styles from  "./Destaque.module.css"

import Cards from "../especificacoes/Cards"

function Destaque(){
    return(
        <div id="destaque" className={styles.destaque_container} >
            <Cards tipo={<ImLocation/>} nome="Localização" texto="A localização de cada detector terá uma distância considerável perto/media distancia, mesmo que perca um detector em um incêndio causado um incêndio espontâneo o mais perto detectará e informará a central mais rápido possível "/>
        </div>
    )
}

export default Destaque