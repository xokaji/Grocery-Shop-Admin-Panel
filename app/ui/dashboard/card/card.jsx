import styles from './card.module.css'
import { MdSupervisedUserCircle } from 'react-icons/md'

const Cards = ()=> {
    return(
        <div className={styles.container}>
            <MdSupervisedUserCircle/>
            <div className={styles.texts}>
                <span className={styles.title}>Total Users</span>
                <span className={styles.number}>10.928</span>
                <span className={styles.details}>
                    <span className={styles.positive}>12%</span> more than previous week
                </span>
            </div>
        </div>
    )
}

export default Cards