import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      
      <h2>Welcome to Team 9 LMS</h2>
      <h3>Select where to go</h3>
      <div className={styles.linkCont}>
        <a href="./Dashboard"><button>App</button></a>
        <a href="./informativeWeb"><button>Informative Website</button></a>
      </div>
      

    </div>
  )
}

export default Home;
