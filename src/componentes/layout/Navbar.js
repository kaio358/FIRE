import {Link} from 'react-router-dom'
import Container from './Container'

import styles from './Navbar.module.css'

function Navbar(){
    return(
        <nav >
            <Container>
                <h2 className={styles.logo}>
                    <Link to='/' >FIRE</Link>
                </h2>
               
                <ul className={styles.lista}>
                    <li className={styles.item}><Link to='/' >Home</Link></li>
                </ul>
                
            </Container>
            
        </nav>
    )
}

export default Navbar