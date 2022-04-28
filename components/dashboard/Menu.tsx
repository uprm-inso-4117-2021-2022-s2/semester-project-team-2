// import styles from '../../styles/menu.module.css'
import Link from "next/link";



function Menu() {
    function clickNav(){
        var x = document.getElementById("myTopnav");

        // console.log(x.classList.contains("topnav"))
        if (!x.classList.contains("responsive")) {

            x.className += " responsive";
            // console.log(x)

        } else {
            // console.log("to topnav")
            // console.log(x)
            x.classList.remove("responsive")
    }
    }
    
    return (
    <div>
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        
        
        <div className='topnav' id="myTopnav">
            

            <Link href="./Calendar" >
                <a className="a"> <i className="material-icons circle one"
                style={{fontSize:"48px"}}>event</i></a>


            </Link>
            
            <Link href="./Stats">
                <a href="">
                    <i className="material-icons circle two"
                    style={{fontSize:"48px"}}>bar_chart</i>
                </a>
            </Link>

            <Link href="./Dashboard">
                <a >
                    <i className="material-icons circle three"
                    style={{fontSize:"48px"}}>home</i>
                </a>
            </Link>


            <Link href="./Inventory">
                <a >
                    <i className="material-icons circle two"
                    style={{fontSize:"48px"}}>list_alt_outlined</i>
                </a>
            </Link>


            <Link href="./Tasks">
                <a >
                    <i className="material-icons circle one"
                    style={{fontSize:"48px"}}>task_outlined</i>
                </a>
            </Link>

            <button id="icon" onClick={clickNav}>
                <i className="fa fa-bars"></i>
            </button>

            
           

            

            
        </div>
       
        <style jsx>{`
            .topnav {
                position: absolute;
                bottom: 0px;
                z-index: 999;
                width: 35rem;
               
                display: flex;
                justify-content: center;
               
                flex-wrap: wrap;
                transition: all .5s ease-in-out;
            }
            a {
                display: block;
            }
            #icon {
                color: white;
                transform: scale(1.5);
                display: none;
                background: none;
                border:none;
                
            }
            .circle {
                border-radius: 100%;
                width: 80px;
                height: 80px;
                margin: 10px 15px;
                display: block;
                overflow: hidden;
                
                background-color: white; 
                border: none; 
                color: #4C782A; 
                padding: 17px 13px; 
                font-size: 48px; 
                cursor: pointer; 
            }
            .circle:hover {
                background-color:  #7CC047;
            }
            
            .two {
                transform: translateY(-20px);
            }
            .three {
                transform: translateY(-40px);
            }
            
            
            
            
            @media screen and (min-width: 790px){
                .topnav {

                    left: 50%; 
                    transform: translate(-50%, -50%);
                }
            }
            
            @media screen and (max-width: 790px) {
                .two {
                    transform: none;
                }
                .three {
                    transform: none;
                }
                .topnav {

                    height: 50px;
                    width: 50px;
                    
                    transform: none;

                    top: 0px;
                    right: 0;
                    
                }
                a {
                    display: none;
                }
                
                #icon {
                    display: block;
                    position: absolute;
                    
                    cursor: pointer;
                
                }
            }
            
            
            @media screen and (max-width: 790px) {
               
                .topnav.responsive {
                    background: coral;


                    position: fixed;
                    z-index: 999;


                    height: 100%;
                    width: 100%;
                    
            
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    
                   
                }
               
                .topnav.responsive a {
                    color: white;
                    float: none;
                    display: block;
                    text-align: left;
                }
                #icon {
                    display: block;
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    cursor: pointer;
                
                }
            }
            
            
        `}</style>

    </div>
    )
}

export default Menu