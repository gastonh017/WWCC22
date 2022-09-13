import React, {useState, useEffect} from "react";

const Card = ({index,offset,home_team_code,away_team_code,datetime}) => {
    return(
      <div className="card text-white bg-secondary mb-3 col-2" >
        <div className="card-header">Partido {index + offset}</div>
        <div className="card-body">
          <h5 className="card-title"  >{home_team_code} - {away_team_code} </h5>
          <p className="card-subtitle">{datetime.slice(0,10)}</p>
          <p className="card-subtitle">{datetime.slice(11,16)} hs.</p>
        </div>
      </div>
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

            <h3 className="mt-5">Fase de grupos</h3>
            {fase.map((element,index)=>
              <Card key = {index}
                index = {index}
                offset = {1}
                home_team_code = {element.home_team.code}
                away_team_code = {element.away_team.code}
                datetime = {element.datetime}
              />
            )}

            <h3 className="mt-5">Octavos de final</h3>
            {octavos.map((element,index)=>
              <Card key = {index + 37}
                index = {index}
                offset = {37}
                home_team_code = {element.home_team.code}
                away_team_code = {element.away_team.code}
                datetime = {element.datetime}
              />
            )}

            <h3 className="mt-5">Cuartos de final</h3>
            {cuartos.map((element,index)=>
              <Card key = {index + 45}
              index = {index}
              offset = {45}
              home_team_code = {element.home_team.code}
              away_team_code = {element.away_team.code}
              datetime = {element.datetime}
              />
            )}

            <h3 className="mt-5">Semi-finales</h3>
            {semis.map((element,index)=>
              <Card key = {index + 49}
                index = {index}
                offset = {49}
                home_team_code = {element.home_team.code}
                away_team_code = {element.away_team.code}
                datetime = {element.datetime}
              />
            )}

            <h3 className="mt-5">Tercer puesto</h3>
            {tercero.map((element,index)=>
              <Card key = {index + 51}
                index = {index}
                offset = {51}
                home_team_code = {element.home_team.code}
                away_team_code = {element.away_team.code}
                datetime = {element.datetime}
              />
            )}

            <h3 className="mt-5">Final</h3>
            {final.map((element,index)=>
             <Card key = {index + 52}
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
