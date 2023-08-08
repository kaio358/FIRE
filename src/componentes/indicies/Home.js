import styles from './Home.module.css'

function Home (){
    return(
        <div className={styles.home}>
            <div className={styles.conteudo}>

                <h1>FIRE</h1>
                <div>
                    <p>Projeto feito em parcerias para zelar as nossas florestas. Com os aumentos de focos de incêndios é necessário encontrar de forma rápida para não se degradar a fauna, é por isso que o modulo FIRE tem o princípio de detectar.</p>
                </div>
                
            
                <button className={styles.btn}>Contacte-nos</button>
            </div>
           <img src='http://placeholder.com/500'/>
        </div>
    )
}
export default Home