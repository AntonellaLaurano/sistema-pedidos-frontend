import React from 'react'
import styles from '../styles/waiting.module.css'


const waitingOrder = () => {
  return (
    <div className={styles.container} style={{width: '100vw', height: '100vh'}}>
      {/* <img className={styles.image} src="/landing.jpeg" alt="landing" /> */}
      <div className={styles.containerImage}>
        <div className={styles.containerContent}>
          <h1 className={styles.title}>Bienvenidos a Vigus Lunch!!!</h1>
          <h3 className={styles.subtitle}>La tienda con los mejores pasteles y empanadas de toda la ciudad, con el menu mas variado</h3>
          <div className={styles.containerButtons}>
            <button className={styles.button}>Menu</button>
            <button className={styles.button}>Ordenar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default waitingOrder
