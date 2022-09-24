import React, {useState, useEffect} from "react";
import Loading from './Loading';
import Cards from './CardsMatch'



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
    <div className = "container back-img">

      <h1 className='my-main-title' >Womens World Cup 2019</h1>

      <div className = "row justify-content-evenly">

        <h3 className="mt-4 my-secondary-title">Fase de grupos</h3>
        
        { fase.length === 0 ?
            
          <Loading />
    
          : fase.map((element,index)=>
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
          )
        }

        <h3 className="mt-4 my-secondary-title">Octavos de final</h3>
        { fase.length === 0 ?

          <Loading />
          
          :octavos.map((element,index)=>
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
          )
        }

        <h3 className="mt-4 my-secondary-title">Cuartos de final</h3>
        
        { fase.length === 0 ?
            
          <Loading />
              
          : cuartos.map((element,index)=>
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
          )
        }

        <h3 className="mt-4 my-secondary-title">Semi-finales</h3>
        
        { fase.length === 0 ?
            
          <Loading />
          
          : semis.map((element,index)=>
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
          )
        }

        <h3 className="mt-4 my-secondary-title">Tercer puesto</h3>
        { fase.length === 0 ?
            
          <Loading />
              
          : tercero.map((element,index)=>
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
          )
        }

        <h3 className="mt-4 my-secondary-title">Final</h3>
        
        { fase.length === 0 ?
            
          <Loading />
              
          : final.map((element,index)=>
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
          )
        }

      </div>
    </div>
  )
}
