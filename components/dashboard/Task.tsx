import React, { useState } from 'react'


/**
 * Renders a single task (checkmark + title)
 */
export default function Task({ styles, task }) {

    const [complete, setComplete] = useState(false)

    const colorChange = () => {  
        setComplete(!complete)
    }
    return (
        <div className={styles.dtcon}>
                <div className={styles.dtcircle} onClick={colorChange} style={complete ? {background: 'lightgreen'} : {background: 'white'}}></div>
                <p>{task.title}</p>
        </div>
    )
}
