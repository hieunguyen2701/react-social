import React , { useState ,useEffect } from 'react'
import "./Sort.css"
function Sort() {
    const [time, setTime] = useState(localStorage.getItem("sortByVote"))
    const sortTime = () => { 
        console.log("test")
        setTime(!time)
        setTimeout(() => {
            window.location.reload()
        },3000)
    }
    const sortVote = () => {
    useEffect(() =>{
        localStorage.setItem("sortByVote", time)
    })
    return (
        <div>
            Sort By
            <span
                // onClick={()=>setTime(!time)}
                onClick={() => sortTime()}
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