import {FaGithub,FaLinkedin} from "react-icons/fa6";

import styles from "./Foooter.module.css"

function Footer() {
    return(
        <div className={styles.divFooter}>
            <h1>Colaboradores</h1>
            <ul className={styles.listaColab}>
                <div>
                    <h3>Gustavo Brito</h3>
                    <div className={styles.divLinks}>
                        <li> <a><FaGithub/></a> </li>
                        <li> <a><FaLinkedin/></a> </li>
                        
                    </div>
                    
                </div>   
                <div>
                    <h3>Kaio Luiz Ferreira</h3>
                    <div className={styles.divLinks}>
                        <li><a><FaGithub/></a> </li>
                        <li> <a> <FaLinkedin/></a></li>
                        
                    </div>
                    
                </div>   
                <div>
                    <h3>Eduardo Solano</h3>
                    <div className={styles.divLinks}>
                        <li><a><FaGithub/></a> </li>
                        <li> <a> <FaLinkedin/></a></li>

                    </div>
                    
                </div>   
                <div>
                    <h3>Celso</h3>
                    <div className={styles.divLinks}>
                        <li><a><FaGithub/></a> </li>
                        <li> <a> <FaLinkedin/></a></li>

                    </div>
                    
                </div>   
                 
                   
            </ul>
        </div>
    )
}

export default Footer