import React , { useState } from 'react'
import 
function Sort() {
    const [time, setTime] = useState(false)
    localStorage.setItem("sortBy","time")
    return (
        <div>
            Sort By
            <span >Time </span>
            <span>Votes </span>
        </div>
    )
}

export default Sort