import React from 'react'
import {useState, useEffect} from "react"

 function Groups() {
    const [teams, setTeams] = useState([])
    const [group1, setGroup1] = useState([])
    const [group2, setGroup2] = useState([])
    const [group3, setGroup3] = useState([])
    const [group4, setGroup4] = useState([])
    const [group5, setGroup5] = useState([])
    const [group6, setGroup6] = useState([])

    useEffect (()=>{
        fetch("https://worldcup.sfg.io/teams/results")
        .then(res => res.json())
        .then(data =>{
            setTeams(data.country)
            setGroup1(data.filter(team => team.group_id === 1 ))
            setGroup2(data.filter(team => team.group_id === 2 ))
            setGroup3(data.filter(team => team.group_id === 3 ))
            setGroup4(data.filter(team => team.group_id === 4 ))
            setGroup5(data.filter(team => team.group_id === 5 ))
            setGroup6(data.filter(team => team.group_id === 6 ))
          
            console.log(data)
        })
        .catch(err => console.log(err))
    },[])
  return (
    <div className='compMargin'>
        <ul className='groups'>
            <p>Grupo A</p>
            {group1 && group1.map((team, i)=>
            <li key={i}>{team.country}</li>)}
        </ul>
        <ul className='groups'>
        <p>Grupo B</p>
            {group2 && group2.map((team, i)=>
            <li key={i}>{team.country}</li>)}
        </ul>
        <ul className='groups'>
        <p>Grupo C</p>
            {group3 && group3.map((team, i)=>
            <li key={i}>{team.country}</li>)}
        </ul>
        <ul className='groups'>
        <p>Grupo D</p>
            {group4 && group4.map((team, i)=>
            <li key={i}>{team.country}</li>)}
        </ul>
        <ul className='groups'>
        <p>Grupo E</p>
            {group5 && group5.map((team, i)=>
            <li key={i}>{team.country}</li>)}
        </ul>
        <ul className='groups'>
        <p>Grupo F</p>
            {group6 && group6.map((team, i)=>
            <li key={i}>{team.country}</li>)}
        </ul>
    </div>
  )
}

export default Groups;