import React, {useState, useEffect} from "react";

// React-Bootstrap
import {Card, ListGroup, Button , Offcanvas} from 'react-bootstrap';

const Cards = (props) => {
    
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

    <Card className="bg-secondary text-dark margin_card text-center" style={{ width: '13rem'}}>
      <Card.Header className="bg-secondary text-light " >Partido {props.index + props.offset}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item className="bg-secondary text-light strong" >
          {props.home_team_code} <strong style={{ fontSize: '2rem'}}>{props.home_team_goals}</strong> - <strong style={{ fontSize: '2rem'}}>{props.away_team_goals}</strong> {props.away_team_code}
        </ListGroup.Item>
        
        <ListGroup.Item className="bg-secondary text-light weak" >{props.datetime.slice(0,10)}</ListGroup.Item>
        <ListGroup.Item className="bg-secondary text-light weak" >{props.datetime.slice(11,16)}</ListGroup.Item>
        
        <Button variant="primary" onClick={handleShow}>
          Más info ...
        </Button>

        <Offcanvas show={show} onHide={handleClose} placement={'bottom'}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              Partido {props.index + props.offset}: {props.home_team_country} Vs. {props.away_team_country}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <h6>Resultado: {props.home_team_code} {props.home_team_goals} - {props.away_team_goals} {props.away_team_code} </h6>
            <p className='parrafo-canvas'> Fecha : {props.datetime.slice(0,10)} - Hora: {props.datetime.slice(11,16)} Hs. </p>
            <p className='parrafo-canvas'> Estadio :{props.stadium}</p>
            <p className='parrafo-canvas'> Ciudad : {props.city}</p>
          </Offcanvas.Body>
        </Offcanvas>


      </ListGroup>

    </Card>
  )
}

export default function Games() {
    const [fase, setFase]       = useState([])
    const [octavos, setOctavos] = useState([])
    const [cuartos, setCuartos] = useState([])
    const [semis, setSemis]     = useState([])
    const [tercero, setTercero] = useState([])
    const [final,setFinal]      = useState([])


    useEffect(() => {
        fetch('https://worldcup.sfg.io/matches')
        .then(response => response.json())
        .then(data => {
            setFase(data.filter(match => match.stage_name === "First Stage"));
            setOctavos(data.filter(match => match.stage_name === "Round of 16"));
            setCuartos(data.filter(match => match.stage_name === "Quarter-final"));
            setSemis(data.filter(match => match.stage_name === "Semi-final"));
            setTercero(data.filter(match => match.stage_name === "Match for third place"));
            setFinal(data.filter(match => match.stage_name === "Final"));
        })
        .catch(error => console.log(error));
    },[])

    return (
    <div className = "container">

        <h1 className='text-center' >WorldCup 2019</h1>

        <div className = "row justify-content-evenly">

            <h3 className="mt-4 text-center">Fase de grupos</h3>
            {fase.map((element,index)=>
              <Cards key = {index}
                index = {index}
                offset = {1}
                home_team_code = {element.home_team.code}
                away_team_code = {element.away_team.code}
                datetime = {element.datetime}
                home_team_country = {element.home_team_country}
                away_team_country = {element.away_team_country}
                home_team_goals = {element.home_team.goals}
                away_team_goals = {element.away_team.goals}
                city = {element.venue}
                stadium = {element.location}
              />
            )}

            <h3 className="mt-4 text-center">Octavos de final</h3>
            {octavos.map((element,index)=>
              <Cards key = {index + 37}
                index = {index}
                offset = {37}
                home_team_code = {element.home_team.code}
                away_team_code = {element.away_team.code}
                datetime = {element.datetime}
                home_team_country = {element.home_team_country}
                away_team_country = {element.away_team_country}
                home_team_goals = {element.home_team.goals}
                away_team_goals = {element.away_team.goals}
                city = {element.venue}
                stadium = {element.location}
              />
            )}

            <h3 className="mt-4 text-center">Cuartos de final</h3>
            {cuartos.map((element,index)=>
              <Cards key = {index + 45}
                index = {index}
                offset = {45}
                home_team_code = {element.home_team.code}
                away_team_code = {element.away_team.code}
                datetime = {element.datetime}
                home_team_country = {element.home_team_country}
                away_team_country = {element.away_team_country}
                home_team_goals = {element.home_team.goals}
                away_team_goals = {element.away_team.goals}
                city = {element.venue}
                stadium = {element.location}
              />
            )}

            <h3 className="mt-4 text-center">Semi-finales</h3>
            {semis.map((element,index)=>
              <Cards key = {index + 49}
                index = {index}
                offset = {49}
                home_team_code = {element.home_team.code}
                away_team_code = {element.away_team.code}
                datetime = {element.datetime}
                home_team_country = {element.home_team_country}
                away_team_country = {element.away_team_country}
                home_team_goals = {element.home_team.goals}
                away_team_goals = {element.away_team.goals}
                city = {element.venue}
                stadium = {element.location}
              />
            )}

            <h3 className="mt-4 text-center">Tercer puesto</h3>
            {tercero.map((element,index)=>
              <Cards key = {index + 51}
                index = {index}
                offset = {51}
                home_team_code = {element.home_team.code}
                away_team_code = {element.away_team.code}
                datetime = {element.datetime}
                home_team_country = {element.home_team_country}
                away_team_country = {element.away_team_country}
                home_team_goals = {element.home_team.goals}
                away_team_goals = {element.away_team.goals}
                city = {element.venue}
                stadium = {element.location}
              />
            )}

            <h3 className="mt-4 text-center">Final</h3>
            {final.map((element,index)=>
              <Cards key = {index + 52}
                index = {index}
                offset = {52}
                home_team_code = {element.home_team.code}
                away_team_code = {element.away_team.code}
                datetime = {element.datetime}
                home_team_country = {element.home_team_country}
                away_team_country = {element.away_team_country}
                home_team_goals = {element.home_team.goals}
                away_team_goals = {element.away_team.goals}
                city = {element.venue}
                stadium = {element.location}
              />
            )}

        </div>
    </div>
    )
}
