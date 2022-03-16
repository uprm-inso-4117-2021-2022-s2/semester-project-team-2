import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/main.module.css'

export default function InformativeWeb() {
    return (
        <div className={styles.pagewrapper}>
            <div className={styles.nav}>
                <h4>INSO-4115 TEAM PROJECT</h4>
            </div>

            <h1 className={styles.title}>Livestock Management <br/>System</h1>

            <div className={styles.slideshowcontainer}>

                <div className={styles.imgCont}>
                    <Image src="/landingpage/images/sheep1.jpg" className="sheeps" height={700} width={1000}/>
                </div>

                <div name="mySlides" className={`${styles["mySlides"]} ${styles["fade"]}`} >
                    <div className={styles.numbertext}>1 / 3</div>
                    <div className={styles.imgBox}>
                        <img src="/landingpage/images/calendar.jpg"/>
                    </div>
                    <div className={styles.text}>Calendar</div>
                </div>
                <div name="mySlides" className={`${styles["mySlides"]} ${styles["fade"]}`}>
                    <div className={styles.numbertext}>2 / 3</div>
                    <div className={styles.imgBox}>
                        <img src="/landingpage/images/insights.jpg"/>
                    </div>
                    <div className={styles.text}>Insights</div>
                </div>
                <div name="mySlides" className={`${styles["mySlides"]} ${styles["fade"]}`}>
                    <div className={styles.numbertext}>3 / 3</div>
                    <div className={styles.imgBox}>
                        <img src="/landingpage/images/stats.jpg"/>
                    </div>                    
                    <div className={styles.text}>Statistics</div>
                </div>
            </div>

            <div className={styles.infoBox} id="need">
                <h3>Why the App?</h3>
                <p>
                    There is a need for farmers to modernize the way they recollect livestock data. In many farms the workers still use physical books to recollect their data. This is not a bad thing, but it is not efficient. This new way to recollect the data needs to take into account the unique weather conditions, species, and policies of Puerto Rico, etc. It also needs to be minimalistic and easy to use. Many times employees may find themselves with an overlap in activities, such as having to move the livestock from one location to another, but the veterinarian comes to check in on the livestock. For such situations, there is a need for a way to prioritize tasks and there is also a need for a way to notify farmers/employees when tasks or activities are close due. 
                </p>
            </div>
            <div className={styles.infoImgBox}>
                <div className={styles.infoBox}>
                    <h3>LMS</h3>
                    <p>
                        The LMS (Livestock Management System) will embody a platform hosted on the web where users (mostly farm owners) will be able to manage their livestock by recollecting their data. Such as how many animals of each species are there on the farm, when is the next vet appointment, if they have been fed or not, etc. It is a minimalistic, very easy to use application for the convenience of the users. The main objective is to help improve the farmers ability to manage their livestock. Especially Puerto Rico farms. The platform will be useful to any farm owner that wants to manage both their livestock better. It will also be useful to anyone developing a farm. As a simple to use LMS as we have envisioned will be of help to anyone getting into the business. Specifically, the system will allow users to view how much stock of each specific race is there in the farm.
                    </p>
                </div>
                <div className={styles.imgBox}>
                    <img src="/landingpage/images/login.jpg" alt=""/>
                </div>
            </div>
            <div className={styles.support}>
                <h3>Browser support</h3>
                <div className={styles.icons}>
                    <i className="fa-brands fa-firefox"></i>
                    <i className="fa-brands fa-chrome"></i>
                    <i className="fa-brands fa-safari"></i>
                </div>
            </div>
            <div className={`${styles["infoImgBox"]} ${styles["infoImgBoxTwo"]}`}>
                <div className={styles.imgBox}>
                    <img src="/landingpage/images/stats.jpg" alt=""/>
                </div>
                <div className={styles.infoBox}>
                    <h3>Statistics</h3>
                    <p>
                        Statistics will be available for long term data, 
                        such as the lifespan of every species due to their living conditions, 
                        and short term data, such as how much is being spent on food or maintainance.
                        The application will organize and predict the following data:
                    </p>
                    <ul>
                        <li>Livestock Records</li>
                        <li>Feeding Management</li>
                        <li>Financial Report</li>
                        <li>Livestock Production</li>
                    </ul>
                </div>
            </div>
            <div className={styles.infoImgBox}>
                <div className={styles.infoBox}>
                    <h3>Calendar</h3>
                    <p>
                    The platform will have a calendar available for employees and farmers to see due tasks or activities throughout the day, month or even throughout the year and mark them done when completed.
                    </p>
                </div>
                <div className={styles.imgBox}>
                    <img src="/landingpage/images/calendar.jpg" alt="calendar"/>
                </div>
            </div>

            <img src="landingpage/images/animals.jpg" className={styles.cImg} alt=""/>

            <div className={`${styles["infoImgBox"]} ${styles["infoImgBoxTwo"]}`}>
                <div className={styles.imgBox}>
                    <img src="/landingpage/images/tasks.jpg" alt="calendar"/>                </div>
                <div className={styles.infoBox}>
                    <h3>tasks</h3>
                    <p>
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sapiente possimus consequuntur pariatur ab ipsam laborum commodi dicta. Repellendus autem at praesentium, quia explicabo harum dignissimos eveniet amet recusandae error?
                       Illo voluptates error perferendis quae a, rerum dolores laborum ab voluptatem, accusamus eum facilis dolore nam quos. Facere amet doloribus non, obcaecati quisquam voluptas ratione doloremque itaque quis ducimus asperiores.
                       Voluptas aspernatur, officia dignissimos quae ad id nihil tempora itaque nobis, ex veritatis expedita. Quidem, quaerat numquam odio temporibus iste quo voluptas fuga minus, necessitatibus aperiam dolorum, ea obcaecati sapiente.
                    </p>
                    
                </div>
            </div>

            <div className={styles.infoImgBox}>
                <div className={styles.infoBox}>
                    <h3>Insights</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis impedit ducimus dolore iste perferendis rem magnam minima rerum nesciunt vel. Velit, officia eveniet. Vel praesentium nulla corporis hic? Necessitatibus, quasi.
                    Velit magnam quo exercitationem labore pariatur quod commodi unde dicta itaque eius, fugiat beatae id molestiae excepturi sequi, nisi at eveniet qui nobis amet accusantium ducimus asperiores doloribus eos? Illo!
                    Asperiores facere assumenda, expedita velit, soluta quo quasi est saepe facilis aspernatur similique distinctio temporibus illo dolores eos? Officia expedita provident praesentium fugit magni consectetur nulla error libero natus enim?
                    </p>
                </div>
                <div className={styles.imgBox}>
                    <img src="/landingpage/images/calendar.jpg" alt="calendar"/>
                </div>
            </div>

            <footer className={styles.footer}>
                <a href="#_blank">
                    <i className="fa-brands fa-github"></i>
                </a>
                
            </footer>
            <Script src="landingpage/script.js" />
    
        </div>

    )
}