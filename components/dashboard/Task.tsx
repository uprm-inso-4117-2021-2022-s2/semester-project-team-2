import React, { useState } from 'react'



export default function Task({ styles, tasks}) {

    const [complete, setComplete] = useState(false)

    const colorChange = () => {  
        setComplete(!complete)
    }
    return (
        <div className={styles.dtcon}>
                <div className={styles.dtcircle} onClick={colorChange} style={complete ? {background: 'yellow'} : {background: 'white'}}></div>
                <p>{tasks.content}</p>
        </div>
    )
}
