import React from 'react'
import styles from './title.module.css'

export default function Title(props) {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>{props.title}</h1>
      <p className={styles.desc}>{props.description}</p>

    </main >
  )
}
