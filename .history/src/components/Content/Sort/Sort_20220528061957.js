import React , { useState } from 'react'
import "./Sort.css"
function Sort() {
    const [time, setTime] = useState(true)
    return (
        <div>
            Sort By
            <span
                onClick={()=>setTime(!time)}
                className={`time color-red ${!time && 'text-blue'}`}>Time </span>
            <span
                onClick={()=>setTime(!time)}
                className={`vote color-blue ${}`}>Votes </span>
        </div>
    )
}

export default Sort