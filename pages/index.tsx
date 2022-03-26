import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import InformativeWeb from '../components/informativeWeb'
import Dashboard from '../components/dashboard/Dashboard'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>

      {/* <InformativeWeb /> */}
      <Dashboard />

    </div>
  )
}

export default Home;
