import { useState,useEffect } from "react";

import {ImLocation,ImConnection,ImLeaf ,ImEyeBlocked,ImBin2} from "react-icons/im";

import styles from  "./Destaque.module.css"

import Cards from "../especificacoes/Cards"


function Destaque(){
    const icons = [<ImLocation/>,<ImConnection/>,<ImLeaf/>,<ImEyeBlocked/>,<ImBin2/>]
    const [card,setCards] = useState([{cards:[]}])
    useEffect(()=>{
        fetch('http://localhost:5000/cards',{
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
        }).then(resp=>resp.json()).then(data=>setCards(data)).catch(err=>console.log(err))
    
    },[])
 

    return(
        <div id="destaque" className={styles.destaque_container} >

                {
                    card?.cards?.length > 0 && 
                    card?.cards?.map(c=>{
                       
                        return <Cards tipo={icons[c.icon_id]} nome={c.nome} texto={c.texto}/>
                    })
                }
       
          

            
        </div>
    )
}

export default Destaque