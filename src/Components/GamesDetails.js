import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain , faTemperatureQuarter, faWind , faDroplet, faArrowLeft} from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardsMatchDetails from './CardsMatchDetails'

import { useParams } from "react-router-dom";


export default function GamesDetails({matches}) {
  const { id } = useParams();

  let match = []

  if (matches) {
    match = matches[id-1]
    console.log(match);  
  }
  return (
    
    match !== [] && matches &&
    <div className = "container back-img">
      
      <h1 className='my-main-title GD-Row'>Women's World Cup France 2019</h1>
      <div className = "row justify-content-evenly">
      {/* Data principal */}
      <Row>
          <Col lg='1' />
          <Col lg='10'  className='GD-Row'>
          <div className='my-container'>
            <div className='my-background-color'>
              <h4> City: {match.venue}</h4>
              <h4> Stadium: {match.location}</h4>
              <h4> Local team: {match.home_team_country}</h4>
              <h4> Visiting team: {match.away_team_country}</h4>
              <h4> Date: {match.datetime.slice(0,10)}</h4>
              <h4> Hour: {match.datetime.slice(11,16)} hs.</h4>
              <h4> Result: {match.home_team.code} {match.home_team.goals} - {match.away_team.goals} {match.away_team.code} </h4>
              <h4> Stages:{match.stage_name}</h4>
              <h4> Number of spectators: {match.attendance} personas. </h4>
            </div>
          </div>
        </Col>
        <hr />
      </Row>
      {/* Football teams */}
      <Row>
        <h3 className="mt-4 my-secondary-title">Football teams</h3>
        {/* Starting eleven */}
        <Row className='GD-Row'>
          <Col lg='6'>
            <CardsMatchDetails 
              title = "Starting eleven"
              teamCountry = {match.home_team_statistics.country}
              team = {match.home_team_statistics.starting_eleven} 
            />
          </Col>
          <Col lg='6'>
            <CardsMatchDetails 
              title = "Starting eleven"
              teamCountry = {match.away_team_statistics.country}
              team = {match.away_team_statistics.starting_eleven} 
            />
          </Col>
        </Row>
        {/* Substitutes */}
        <Row className='GD-Row'>
          <Col lg='6'>
            <CardsMatchDetails 
              title = "Substitutes"
              team = {match.home_team_statistics.substitutes} 
            />
          </Col>
          <Col lg='6'>
            <CardsMatchDetails 
              title = "Substitutes"
              team = {match.away_team_statistics.substitutes} 
            />
          </Col> 
        </Row>
        {/* Referees */}
        <Row className='GD-Row'>
          <Col lg='2' />
          <Col lg='8' >
            <div className='my-container'>
            <div className='my-background-color'>
              <h4>Referees</h4>
                  { match.officials.map((officials) => <p className='referees-style'>{officials}</p>) }
              </div>
            </div>
          </Col>
        </Row>
        <hr />
      </Row>
      {/* Stats for nerds */}
      <Row>
        {/* Stats for nerds */}
        <Row className='GD-Row'> 
          <h3 className="mt-4 my-secondary-title">Stats for nerds</h3>
          {/* Weather */}
          <Col lg='2' />
          <Col lg='8' >
          <div className='my-container'>
            <div className='my-background-color'>
              <h4>Weather</h4>
              <dl>
                <dt><FontAwesomeIcon icon={faCloudSunRain} className='style-icon' /> {match.weather.description} </dt> 
                <dt><FontAwesomeIcon icon={faTemperatureQuarter}  /> {match.weather.temp_celsius}ºC / {match.weather.temp_farenheit}ºF</dt> 
                <dt><FontAwesomeIcon icon={faDroplet} className='style-icon' /> {match.weather.humidity} %</dt> 
                <dt><FontAwesomeIcon icon={faWind} className='style-icon' /> {match.weather.wind_speed} Km/hr.</dt>
              </dl>
            </div>  
          </div>
          </Col>
        </Row>

        <Row className='GD-Row'>
          <Col lg='6'>
            Eventos del local
            <ul>
              {match.home_team_events.map(events => <li><h6> minuto {events.time} : {events.type_of_event} of {events.player}</h6> </li>)}
            </ul>
          </Col>
          <Col lg='6'>
            Eventos del Visitante
            <ul>
              {match.away_team_events.map(events => <li><h6> minuto {events.time} : {events.type_of_event} of {events.player}</h6> </li>)}
            </ul>
          </Col>
        </Row>

        <Row className='GD-Row'>
          <Col lg='6'>
            Estadisticas del local:
            <ul>
              <li>attempts_on_goal: {match.home_team_statistics.attempts_on_goal}</li>
              <li>on_target: {match.home_team_statistics.on_target}</li>
              <li>off_target: {match.home_team_statistics.off_target}</li>
              <li>blocked: {match.home_team_statistics.blocked}</li>
              <li>corners: {match.home_team_statistics.corners}</li>
              <li>offsides: {match.home_team_statistics.offsides}</li>
              <li>ball_possession: {match.home_team_statistics.ball_possession}</li>
              <li>pass_accuracy: {match.home_team_statistics.pass_accuracy}</li>
              <li>num_passes: {match.home_team_statistics.num_passes}</li>
              <li>passes_completed: {match.home_team_statistics.passes_completed}</li>
              <li>distance_covered: {match.home_team_statistics.distance_covered}</li>
              <li>tackles: {match.home_team_statistics.tackles}</li>
              <li>clearances: {match.home_team_statisticsclearances}</li>
              <li>yellow_cards: {match.home_team_statistics.yellow_cards}</li>
              <li>red_cards: {match.home_team_statistics.red_cards}</li>
              <li>fouls_committed: {match.home_team_statistics.fouls_committed}</li>
              <li>tactics: {match.home_team_statistics.tactics}</li>
            </ul>
          </Col>
          <Col lg='6'>
            Estadisticas del visitante:
            <ul>
              <li>attempts_on_goal: {match.away_team_statistics.attempts_on_goal}</li>
              <li>on_target: {match.away_team_statistics.on_target}</li>
              <li>off_target: {match.away_team_statistics.off_target}</li>
              <li>blocked: {match.away_team_statistics.blocked}</li>
              <li>corners: {match.away_team_statistics.corners}</li>
              <li>offsides: {match.away_team_statistics.offsides}</li>
              <li>ball_possession: {match.away_team_statistics.ball_possession}</li>
              <li>pass_accuracy: {match.away_team_statistics.pass_accuracy}</li>
              <li>num_passes: {match.away_team_statistics.num_passes}</li>
              <li>passes_completed: {match.away_team_statistics.passes_completed}</li>
              <li>distance_covered: {match.away_team_statistics.distance_covered}</li>
              <li>tackles: {match.away_team_statistics.tackles}</li>
              <li>clearances: {match.away_team_statisticsclearances}</li>
              <li>yellow_cards: {match.away_team_statistics.yellow_cards}</li>
              <li>red_cards: {match.away_team_statistics.red_cards}</li>
              <li>fouls_committed: {match.away_team_statistics.fouls_committed}</li>
              <li>tactics: {match.home_team_statistics.tactics}</li>
            </ul>
          </Col>
        </Row>
        <hr />
      </Row>
      {/* Back buttom */}
      <Row className='GD-Row'>
        <Col lg='5' />
        <Col lg='2'>
          <Button href={`/games`} > <FontAwesomeIcon icon={faArrowLeft}/>     Back </Button>     
        </Col> 
      </Row>  

      </div>
    </div> 
  )
}