import React from 'react'
import {useState, useEffect} from "react"
import Button from 'react-bootstrap/Button';
import { Offcanvas, Card, ListGroup } from 'react-bootstrap';
import "../App.css"
import {FlagsData} from "./FlagsData"

const findFlag = ( str ) => {
  for(let i = 0; i < FlagsData.length; i++ ) {
    if(FlagsData[i].name == str){
      return FlagsData[i].url
    }
  }
}


const TeamCard = (props) => {
	
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true) 

// console.log(props.fifa_code=== FlagsData[0].name)

	return (
		<>
      <Button
          className='boton-paises' 
          onClick={handleShow}
          type="submit"> {props.name}
          <img src={findFlag(props.fifa_code)} className="img-btn" alt="bandera"/>
      </Button>
			<Offcanvas show={show} onHide={handleClose} placement={"end"} >
				<Offcanvas.Header closeButton>
					<Offcanvas.Title className="text-success strong"> {props.name} </Offcanvas.Title>
          
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Card bg="light" className="col-lg-8 mb-4">
						
						<Card.Body>
							<ListGroup variant="flush" className="row justify-content-evenly">
								<ListGroup.Item className="bg-success text-light " > Grupo: {props.group_letter} </ListGroup.Item>
                <ListGroup.Item className="bg-success text-light " > Partidos Jugados: {props.games_played} </ListGroup.Item>
								<ListGroup.Item className="bg-success text-light " > Ganados: {props.wins}</ListGroup.Item>
								<ListGroup.Item className="bg-success text-light " > Empatados: {props.draws}</ListGroup.Item>
								<ListGroup.Item className="bg-success text-light " > Perdidos: {props.losses}</ListGroup.Item>
								<ListGroup.Item className="bg-success text-light " > Goles a Favor: {props.goals_for}</ListGroup.Item>
								<ListGroup.Item className="bg-success text-light " > Goles en Contra: {props.goals_against}</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Offcanvas.Body>
			</Offcanvas>

		</>
	)
}

 function Teams() {
  const [teams, setTeams] = useState([])

  

    useEffect (()=>{
        fetch("http://localhost:3000/group_results")
        .then(res => res.json())
        .then(data =>{
          const equiposA = data[0].ordered_teams
          const equiposB = data[1].ordered_teams
            setTeams([...data[0].ordered_teams, ...data[1].ordered_teams, ...data[2].ordered_teams, ...data[3].ordered_teams, ...data[4].ordered_teams, ...data[5].ordered_teams])
            console.log(equipos)
            console.log(data[1].ordered_teams)
        })
        .catch(err => console.log(err))
    },[])

  return (
    <div  className = "contenedor-paises">
       {teams.map((team, i) =>
         <TeamCard 
         key={team.id}
         fifa_code={team.fifa_code}
         name={team.country}
         group_letter={team.group_letter}
         games_played = {team.games_played}
         wins= {team.wins} 
         draws= {team.draws}
         losses = {team.losses}
         goals_for = {team.goals_for}
         goals_against = {team.goals_against}
          >
         </TeamCard>
         )
        } 
    </div>
  )
}

export default Teams;