import Link from 'next/link'
import React from 'react'
import styles from '../../styles/navbar.module.css'

const navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.imageContainer}>
        </div>
        <div className={styles.linkContainer}>
          <Link href="/menu" className={styles.link}>
            Menu
          </Link>
          <Link href="/menu" className={styles.link}>
            Menu
          </Link>
          <Link href="/menu" className={styles.link}>
            Menu
          </Link>
          <Link href="/menu" className={styles.link}>
            Menu
          </Link>
        </div>
        <div className={styles.empty}></div>
      </div>
    </div>
  )
}

export default navbar
