import React from 'react'
import styles from './styles/styles.module.css'
import icon from './icon-thank-you.svg'
import { Helmet } from 'react-helmet'
export default function ThankYou() {
  return (
    <main className={styles.main}>
       <Helmet>
        <title>Thank You</title>
      </Helmet>
        <section className={styles.imgSection}>
            <img src={icon} alt="thank you icon" />
        </section>
        <section className={styles.pSection}>
            <h1> Thank you!</h1>
            <p className={styles.p}>
            Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.
            </p>
        </section>

    </main>
  )
}
