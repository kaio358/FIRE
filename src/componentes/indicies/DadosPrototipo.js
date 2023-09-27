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
    const [temp,setTemeperatura] = useState()
    const [tipo,setTipo] = useState()
    
    var contador = 0 
    useEffect(()=>{
      const  intervalId = setInterval(()=>{
        let aux = 0
        if(contador == 0){
          aux = arduinoData.temperatura
          setTemeperatura(aux)
          setTipo("°C")
          contador++
        }
        else if(contador == 1){
          aux = (arduinoData.temperatura * 9/5) + 32
          setTemeperatura(aux)
          setTipo("°F")
          contador++
        }
        else{
          aux = arduinoData.temperatura + 273.15
          setTemeperatura(aux)
          setTipo("K")
          contador = 0
        }
       
      },6000);
      return () => {
        clearInterval(intervalId);
      };
    },[])
  
    return(
        <div id="dados_prototipo" className={styles.dsp}>
            <h1>Dados do Fire</h1>
          
            {arduinoData ? (
              <div className={styles.caixaDeDados}>
                <div className={ `${styles.divTemperatura} ${styles.divsDados}`} >{temp ? temp : arduinoData.temperatura} {tipo} {<PiThermometerBold/>} </div>
                <div className={ `${styles.divTemperatura} ${styles.divsDados}`}>{arduinoData.umidade} {<PiDropBold/>} </div>
              
              </div>
            ) : (
              <p>Aguardando dados do Arduino...</p>
            )}
        </div>
    )
}
export default DadosPrototipo