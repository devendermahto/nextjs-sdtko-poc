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
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Contact &rarr;</h3>
            <p>devendermahto%40gmail.com</p>
          </a>
        </div>
  )
}
