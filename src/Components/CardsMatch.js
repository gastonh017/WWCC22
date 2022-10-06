import React, {useState} from "react";
import {Card, ListGroup, Button , Offcanvas} from 'react-bootstrap';

export default function Cards (props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
      // 'primary', => Azul
      // 'secondary', => gris oscuro
      //   'Success', => verde
      //   'Danger', => rojo
      //   'Warning', => amarillo
      //   'Info', => celeste
      //   'Light', => gris claro
      //   'Dark', => negro
    <>
      <Card className="my-bg-card  text-dark margin_card text-center" style={{ width: '14rem'}}>
        <Card.Header className=" my-bg-card text-light " >Match {props.index + props.offset}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className="my-bg-card text-light strong" >
            {props.home_team_code} <strong style={{ fontSize: '2rem'}}>{props.home_team_goals}</strong> - <strong style={{ fontSize: '2rem'}}>{props.away_team_goals}</strong> {props.away_team_code}
          </ListGroup.Item>
          
          <ListGroup.Item className="my-bg-card text-light weak" >{props.datetime.slice(0,10)}</ListGroup.Item>
          <ListGroup.Item className="my-bg-card text-light weak" >{props.datetime.slice(11,16)} hs.</ListGroup.Item>
          
          <ListGroup.Item className="my-bg-card text-light weak" >
            <Button variant="primary" onClick={handleShow} className="my-bg-card text-light weak">
              Details ...
            </Button>
          </ListGroup.Item>
          <ListGroup.Item className="my-bg-card text-light weak" >
            <Button href={`/games/${props.index + props.offset}`} >
              More information ...
            </Button>
          </ListGroup.Item>
  
          <Offcanvas show={show} onHide={handleClose} placement={'top'} className="my-bg-offcanvass" >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                MATCH {props.index + props.offset}: {props.home_team_country} Vs. {props.away_team_country}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <h6>Result: {props.home_team_code} {props.home_team_goals} - {props.away_team_goals} {props.away_team_code} </h6>
              <p className='parrafo-canvas'> Date : {props.datetime.slice(0,10)} - Time: {props.datetime.slice(11,16)} Hs. </p>
              <p className='parrafo-canvas'> Stadium :{props.stadium}</p>
              <p className='parrafo-canvas'> City : {props.city}</p>
            </Offcanvas.Body>
          </Offcanvas>
  
  
        </ListGroup>
  
      </Card>
    </>
    )
  }