import React from 'react'

function Sort() {
    localStorage.setItem("sortBy","time")
    return (
        <div>
            Sort By
            <span>Time</span>
            <span>Votes</span>
        </div>
    )
}

export default Sort