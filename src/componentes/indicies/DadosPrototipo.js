import styles from "./DadosPrototipo.module.css"


import { useEffect,useState} from "react";
import {PiThermometerBold,PiDropBold} from "react-icons/pi"

import io from "socket.io-client";

const socket = io('http://localhost:5000');
function DadosPrototipo(){

    const [arduinoData, setArduinoData] = useState(null);
    useEffect(() => {
      socket.connect()
      socket.on("novoArduinoData", (data) => {

        setArduinoData(JSON.parse(data) );
      });
      
    }, []);

    return(
        <div id="dados_prototipo" className={styles.dsp}>
            <h1>Dados do Fire</h1>
            {arduinoData ? (
              <div className={styles.caixaDeDados}>
                <div className={ `${styles.divTemperatura} ${styles.divsDados}`}>{arduinoData.temperatura}° {<PiThermometerBold/>} </div>
                <div className={ `${styles.divTemperatura} ${styles.divsDados}`}>{arduinoData.umidade} {<PiDropBold/>} </div>
              
              </div>
            ) : (
              <p>Aguardando dados do Arduino...</p>
            )}
        </div>
    )
}
export default DadosPrototipo