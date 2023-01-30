
import styles from '../styles/waiting.module.css'
import OrdersList from 'components/ordersList/ordersList';
import Navbar from '../components/navbar/navbar';
import OrderCard from '../components/orderCard/orderCard';

const waitingOrder = () => {
  return (
    <div className={styles.section}>
      <Navbar />
      <div className={styles.container}>
        {/* <img className={styles.image} src="/landing.jpeg" alt="landing" /> */}
        <div className={styles.containerImage}>
          <div className={styles.containerContent}>
            <h1 className={styles.title}>Procesando su orden... Espere</h1>
            <h3 className={styles.subtitle}>Lista de ordenes</h3>
            <OrderCard></OrderCard>
            <div className={styles.containerButtons}>
              <button className={styles.button}>Menu</button>
              <button className={styles.button}>Ordenar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default waitingOrder
