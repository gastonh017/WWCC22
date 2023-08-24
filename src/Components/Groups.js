import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

import { useState, useEffect } from "react"

function Groups() {
	const [teams, setTeams] = useState([])
	const [group1, setGroup1] = useState([])
	const [group2, setGroup2] = useState([])
	const [group3, setGroup3] = useState([])
	const [group4, setGroup4] = useState([])
	const [group5, setGroup5] = useState([])
	const [group6, setGroup6] = useState([])

	useEffect(() => {
		fetch("http://localhost:3000/group_results")
			.then(res => res.json())
			.then(data => {
				setTeams(data.country)
//				setGroup1(data.filter(team => team.group_id === 1))
setGroup1(data[0].ordered_teams)
setGroup2(data[1].ordered_teams)
setGroup3(data[2].ordered_teams)
setGroup4(data[3].ordered_teams)
setGroup5(data[4].ordered_teams)
setGroup6(data[5].ordered_teams)
				// setGroup2(data.filter(team => team.group_id === 2))
				// setGroup3(data.filter(team => team.group_id === 3))
				// setGroup4(data.filter(team => team.group_id === 4))
				// setGroup5(data.filter(team => team.group_id === 5))
				// setGroup6(data.filter(team => team.group_id === 6))

				console.log(data)
				console.log(data[0].ordered_teams)
			})
			.catch(err => console.log(err))
	}, [])
	return (
		<div className='compMargin'>
			<ul className='groups'>
			<p>Grupo A</p>
				{
					group1.length === 0 ?
					<Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				
				:
            group1.map((team, i) =>
						<li key={i}>{team.country}</li>)
				
						}
			</ul>
			<ul className='groups'>
				<p>Grupo B</p>

				{ group2.length == 0 ?
				<Spinner animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		
				:  group2.map((team, i) =>
					<li key={i}>{team.country}</li>)}
			</ul>
			<ul className='groups'>
				<p>Grupo C</p>

				{group3.length == 0 ? 
				<Spinner animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		
				: group3.map((team, i) =>
					<li key={i}>{team.country}</li>)}
			</ul>
			<ul className='groups'>
				<p>Grupo D</p>
				{group4 && group4.map((team, i) =>
					<li key={i}>{team.country}</li>)}
			</ul>
			<ul className='groups'>
				<p>Grupo E</p>

				{group5.length == 0 ? 
				<Spinner animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		
				: group5.map((team, i) =>
					<li key={i}>{team.country}</li>)}
			</ul>
			<ul className='groups'>
				<p>Grupo F</p>
				{group6.length == 0 ? 
				<Spinner animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		 : group6.map((team, i) =>
					<li key={i}>{team.country}</li>)}
			</ul>
		</div>
	)
}

export default Groups;