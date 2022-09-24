import React from 'react'
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import TeamCard from "./TeamCard"
import Button from 'react-bootstrap/Button';
import "../App.css"


 function Teams() {
    const [teams, setTeams] = useState([])
   

    useEffect (()=>{
        fetch("https://worldcup.sfg.io/teams/results")
        .then(res => res.json())
        .then(data =>{
            setTeams(data)
            console.log(data)
        })
        .catch(err => console.log(err))
    },[])

  return (
    <div  className = "contenedor-paises">
       {teams.map((team, i) =>
         <Button
          key={team.id} 
          className='boton-paises' 
          type="submit">{team.country}</Button>
         )
        } 
    </div>
  )
}

export default Teams;