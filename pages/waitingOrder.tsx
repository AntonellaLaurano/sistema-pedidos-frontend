import React from 'react'
import styles from '../styles/waiting.module.css'
import OrderCard from '../components/orderCard/orderCard';
import { Layout } from 'components/layout';

const waitingOrder = () => {
  return (
    <Layout>
      <div className={styles.section}>
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
    </Layout>
  )
}

export default waitingOrder
