import React from 'react'
import {useState, useEffect} from "react"
//import {Link} from "react-router-dom"
import TeamCard from "./TeamCard"


 function Teams() {
    const [teams, setTeams] = useState([])
   

    useEffect (()=>{
        fetch("https://worldcup.sfg.io/teams/results")
        .then(res => res.json())
        .then(data =>{
            setTeams(data)
        })
        .catch(err => console.log(err))
    },[])
  return (
    <div  className = "row justify-content-evenly compMargin">
       {teams.map((team, i) =>
        <TeamCard key={i}
        name= {team.country}
        group_letter= {team.group_letter}
        wins = {team.wins}
        draws = {team.draws}
        losses = {team.losses}
        goals_for = {team.goals_for}
        goals_against = {team.goals_against}
        
        />
        )} 
    </div>
  )
}

export default Teams;