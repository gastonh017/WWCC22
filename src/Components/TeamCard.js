import React, { useState, useEffect } from 'react';
import { ListGroup, Offcanvas } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const TeamCard = ({ name, group_letter, games_played ,wins, draws, losses, goals_for, goals_against }) => {
	
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<>
			<Offcanvas show={show} onHide={handleClose} placement={"bottom"}>
				<Offcanvas.Header CloseButton>
					<Offcanvas.Title> {name} </Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Card bg="light" className="col-lg-3 mb-2">
						<Card.Header className="bg-secondary text-light ">{name}</Card.Header>
						<Card.Body>
							<ListGroup variant="flush" className="row justify-content-evenly">
								<ListGroup.Item className="bg-secondary text-light strong" > Grupo: {group_letter} </ListGroup.Item>
								<ListGroup.Item className="bg-secondary text-light strong" > Jugados: {games_played} </ListGroup.Item>
								<ListGroup.Item className="bg-secondary text-light strong" > Ganados: {wins}</ListGroup.Item>
								<ListGroup.Item className="bg-secondary text-light strong" > Empatados: {draws}</ListGroup.Item>
								<ListGroup.Item className="bg-secondary text-light strong" > Perdidos: {losses}</ListGroup.Item>
								<ListGroup.Item className="bg-secondary text-light strong" > Goles a Favor: {goals_for}</ListGroup.Item>
								<ListGroup.Item className="bg-secondary text-light strong" > Goles en Contra: {goals_against}</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Offcanvas.Body>
			</Offcanvas>

		</>
	)
}

export default TeamCard