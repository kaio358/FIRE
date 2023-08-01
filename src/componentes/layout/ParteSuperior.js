import styles from './ParteSuperior.module.css'

function ParteSuperior(props){
    return(
        <div className={styles.principal}>
            {props.children}
        </div>
    )
}

export default ParteSuperior