import React , { useState } from 'react'
import "./Sort.css"
function Sort() {
    const [time, setTime] = useState(false)
    return (
        <div>
            Sort By
            <span
                className={`time`}>Time </span>
            <span className={`vote`}>Votes </span>
        </div>
    )
}

export default Sort