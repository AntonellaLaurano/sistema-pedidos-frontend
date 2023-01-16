import { Layout } from 'components/layout';
import Link from 'next/link';
import styles from '../styles/index.module.css'

const Home = () => {
  return (
    // <Layout>
      <div className={styles.container}>
        {/* <img className={styles.image} src="/landing.jpeg" alt="landing" /> */}
        <div className={styles.containerImage}>
          <div className={styles.containerContent}>
            <h1 className={styles.title}>Bienvenidos a Vigus Lunch!!!</h1>
            <h3 className={styles.subtitle}>La tienda con los mejores pasteles y empanadas de toda la ciudad, con el menu mas variado</h3>
            <div className={styles.containerButtons}>
              <Link href="/menu">
                <button className={styles.button}>Menu</button>
              </Link>
              <Link href="#">
                <button className={styles.button}>Ordenar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    // </Layout>
  )
}

export default Home;
