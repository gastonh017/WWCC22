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
                <ListGroup.Item className="bg-success text-light " > PJ: {props.games_played} </ListGroup.Item>
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
         <TeamCard 
         key={team.id}
         fifa_code={team.fifa_code}
         name={team.country}
         group_letter={team.group_letter}
         PJ={team.games_played}
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