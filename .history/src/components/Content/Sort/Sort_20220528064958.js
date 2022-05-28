import React , { useState ,useEffect } from 'react'
import "./Sort.css"
function Sort() {
    const [time, setTime] = useState(localStorage.getItem("sortByVote"))
    const test = () => { 
        console.log("test")
        setTime(!time)
    }
    useEffect(() =>{
        localStorage.setItem("sortByVote", time)
        window.location.reload()
    })
    return (
        <div>
            Sort By
            <span
                // onClick={()=>setTime(!time)}
                onClick={() => test()}
                className={`time ${!time ? 'color-red':'text-blue'}`}>Time
            </span>
            <span
                onClick={()=>setTime(!time)}
                className={`time ${time ?'color-red': 'text-blue'}`}>
                Vote
            </span>
        </div>
    )
}

export default Sort