import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      

      
      <a href="./Dashboard"><button>Dashboard</button></a>
      <a href="./informativeWeb"><button>Website</button></a>

    </div>
  )
}

export default Home;
