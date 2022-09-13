import React, {useState, useEffect} from "react";
// React-Bootstrap
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Cards = ({index,offset,home_team_code,away_team_code,datetime}) => {
    return(
      // 'primary', => Azul
      // 'secondary',
      //   'Success',
      //   'Danger',
      //   'Warning',
      //   'Info',
      //   'Light',
      //   'Dark',
    <Card className="bg-secondary text-dark margin_card text-center" style={{ width: '11rem' }}>
      <Card.Header className="bg-secondary text-light " >Partido {index + offset}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item className="bg-secondary text-light strong" >{home_team_code} - {away_team_code}</ListGroup.Item>
        <ListGroup.Item className="bg-secondary text-light weak" >{datetime.slice(0,10)}</ListGroup.Item>
        <ListGroup.Item className="bg-secondary text-light weak" >{datetime.slice(11,16)}</ListGroup.Item>
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

        <h1>WorldCup 2019</h1>

        <div className = "row justify-content-evenly">

            <h3 className="mt-4">Fase de grupos</h3>
            {fase.map((element,index)=>
              <Cards key = {index}
                index = {index}
                offset = {1}
                home_team_code = {element.home_team.code}
                away_team_code = {element.away_team.code}
                datetime = {element.datetime}
              />
            )}

            <h3 className="mt-4">Octavos de final</h3>
            {octavos.map((element,index)=>
              <Cards key = {index + 37}
                index = {index}
                offset = {37}
                home_team_code = {element.home_team.code}
                away_team_code = {element.away_team.code}
                datetime = {element.datetime}
              />
            )}

            <h3 className="mt-4">Cuartos de final</h3>
            {cuartos.map((element,index)=>
              <Cards key = {index + 45}
              index = {index}
              offset = {45}
              home_team_code = {element.home_team.code}
              away_team_code = {element.away_team.code}
              datetime = {element.datetime}
              />
            )}

            <h3 className="mt-4">Semi-finales</h3>
            {semis.map((element,index)=>
              <Cards key = {index + 49}
                index = {index}
                offset = {49}
                home_team_code = {element.home_team.code}
                away_team_code = {element.away_team.code}
                datetime = {element.datetime}
              />
            )}

            <h3 className="mt-4">Tercer puesto</h3>
            {tercero.map((element,index)=>
              <Cards key = {index + 51}
                index = {index}
                offset = {51}
                home_team_code = {element.home_team.code}
                away_team_code = {element.away_team.code}
                datetime = {element.datetime}
              />
            )}

            <h3 className="mt-4">Final</h3>
            {final.map((element,index)=>
             <Cards key = {index + 52}
              index = {index}
              offset = {52}
              home_team_code = {element.home_team.code}
              away_team_code = {element.away_team.code}
              datetime = {element.datetime}
            />
            )}

        </div>
    </div>
    )
}
