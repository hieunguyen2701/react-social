import React from 'react'

function Sort() {
    const [time, set]
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