import {Link} from 'react-router-dom'
import { HashLink} from 'react-router-hash-link'
import Container from './Container'

import styles from './Navbar.module.css'

function Navbar(props){
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }
    return(
        <nav className={`${styles.navbar} ${styles[props.fixo]}`}>
            <Container>
                <h2 className={styles.logo}>
                    <Link to='/' >FIRE</Link>
                </h2>
               
                <ul className={styles.lista}>
                    <li className={styles.item}><HashLink to='/#topo' scroll={scrollWithOffset}  >Home</HashLink></li>
                    <li className={styles.item}><HashLink to='/#dados_de_incendios' scroll={scrollWithOffset} >Incêndios</HashLink></li>
                    <li className={styles.item}><HashLink to='/#destaque' scroll={scrollWithOffset}  >Destaque</HashLink></li>
                    <li className={styles.item}><HashLink to='/#dados_prototipo' scroll={scrollWithOffset} >Protótipo</HashLink></li>
                   
                </ul>
                
            </Container>
            
        </nav>
    )
}

export default Navbar