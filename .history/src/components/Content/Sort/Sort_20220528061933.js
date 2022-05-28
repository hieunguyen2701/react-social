import React , { useState } from 'react'
import "./Sort.css"
function Sort() {
    const [time, setTime] = useState(true)
    return (
        <div>
            Sort By
            <span
                onClick={()=>setTime(!time)}
                className={`time color-red ${!}`}>Time </span>
            <span
                onClick={()=>setTime(!time)}
                className={`vote`}>Votes </span>
        </div>
    )
}

export default Sort