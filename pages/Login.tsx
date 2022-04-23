import styles from '../styles/login.module.css'
import React, { useState } from 'react'
import Link from "next/link";
import Header from '../components/dashboard/Header'



export default function Login(){
    
    const [state, setState] = useState(true)

    const toggleForm = () => {  
        setState(!state)
    }


    return (
        <div className={styles.pagewrapper}>
            
            <div className={styles.imgCont}>
                <img src="/landingpage/images/sheep1.jpg"/>
            </div>

            {
            state ? 
                
                <form id="login" action="" method="post"  className={`${styles["form"]} ${styles["loginform"]}`}>
                    <h3>Login</h3>
                    <div className={styles.userName}>
                        <label ><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" />
                    </div>
                    <div>
                        <label ><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" />
                    </div>
                    <div>
                        <Link href="./Dashboard">
                            <a>
                                <button type="submit" >Login</button>
                            </a>
                        </Link>
                        
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="remember" /> Remember me
                        </label>
                        <div >
                            <button className={styles.signbtn} type="button" onClick={toggleForm}>SignUp</button>
                            <span >Create <a href="#">account?</a></span>
                        </div>
                    </div>
                </form>
            
                : 
                
                <form id="signup" action="" method="post" className={`${styles["form"]} ${styles["signform"]}`}>
                    <h3>Sign Up</h3>
                    <div className={styles.userName}>
                        <label ><b>Email</b></label>
                        <input type="text" placeholder="Enter email"   /><br/>
                        <label ><b>Username</b></label>
                        <input type="text" placeholder="Enter username"   />
                    </div>
                    <div>
                        <label ><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" /><br/>
                        <label ><b>Re-enter Password</b></label>
                        <input type="repassword" placeholder="Re-enter Password" name="psw" />
                    </div>
                    <div>
                        <Link href="./Dashboard">
                            <a>
                                <button type="submit">SignIn</button>
                            </a>
                        </Link>
                    </div>
                    <div>

                        <div >
                            <button type="button" onClick={toggleForm}>Login</button>
                            <span >Already have <a href="#">account?</a></span>
                        </div>
                    </div>
                
                </form>
            }

           
            
            
            
        </div>
    )
}