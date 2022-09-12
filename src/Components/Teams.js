import React from 'react'
import {useState, useEffect} from "react"

 function Teams() {
    const [teams, setTeams] = useState([])

    useEffect (()=>{
        fetch("https://worldcup.sfg.io/teams/results")
        .then(res => res.json())
        .then(data =>{
            setTeams(data)
            console.log("total de equipo: ", data)
        })
        .catch(err => console.log(err))
    },[])
  return (
    <div className='compMargin'>
        <ul>
            {teams && teams.map((team, i)=>
            <li key={i}>{team.country} {team.group_id}</li>)}
        </ul>
    </div>
  )
}

export default Teams;