import { useEffect,useState} from "react";

import io from "socket.io-client";

const socket = io('http://localhost:5000');
function DadosPrototipo(){

    const [arduinoData, setArduinoData] = useState(null);
    useEffect(() => {
        
        
      socket.on("novoArduinoData", (data) => {
        setArduinoData(data);
      });
      
    }, []);
    console.log(arduinoData);
    return(
        <div>
            <h1>Arduino Data</h1>
            {arduinoData ? (
              <pre>{JSON.stringify(arduinoData, null, 2)}</pre>
            ) : (
              <p>Aguardando dados do Arduino...</p>
            )}
        </div>
    )
}
export default DadosPrototipo