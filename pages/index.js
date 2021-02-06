import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bug Report: Subdomain Takeover</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 >
          Subdomain Takeover <a href="#">POC</a>
        </h1>

        <div className={styles.grid}>
          <a href="mailto:devendermahto@gmail.com" className={styles.card}>
            <h3>Contact &rarr;</h3>
            <p>devendermahto@gmail.com</p>
          </a>
        </div>
           <div className={styles.grid}>
          <a href="https://twitter.com/devendermahto" className={styles.card}>
            <h3>Twitter &rarr;</h3>
            <p>https://twitter.com/devendermahto</p>
          </a>
        </div> 
  </div>
  )
}
