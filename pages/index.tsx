import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import InformativeWeb from './informativeWeb'
import Dashboard from './Dashboard'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>

      {/* <Dashboard /> */}
      <Link href="./Dashboard">
        <a><button>Dashboard</button></a>
      </Link>
      <Link href="./informativeWeb">
        <a><button>webpage</button></a>
      </Link>

    </div>
  )
}

export default Home;
