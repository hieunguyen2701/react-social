import React , { useState ,useEffect } from 'react'
import "./Sort.css"
function Sort() {
    const [time, setTime] = useState(localStorage.getItem("sortByVote"))
    const test = () => { 
        
    }
    useEffect(() =>{
        localStorage.setItem("sortByVote", time)
    })
    return (
        <div>
            Sort By
            <span
                // onClick={()=>setTime(!time)}
                onClick={()=>
                className={`time color-red ${!time && 'text-blue'}`}>Time
            </span>
            <span
                onClick={()=>setTime(!time)}
                className={`time color-red ${time && 'text-blue'}`}>
                Vote
            </span>
        </div>
    )
}

export default Sort