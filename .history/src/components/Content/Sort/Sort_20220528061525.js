import React , { useState } from 'react'
import "./Sort.css"
function Sort() {
    const [time, setTime] = useState(false)
    localStorage.setItem("sortByTime",)
    return (
        <div>
            Sort By
            <span className={`time`}>Time </span>
            <span className={`vote`}>Votes </span>
        </div>
    )
}

export default Sort