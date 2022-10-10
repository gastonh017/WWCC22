import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain , faTemperatureQuarter, faWind , faDroplet, faArrowLeft} from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardsMatchDetails from './CardsMatchDetails';
import CardsMatchStats from './CardsMatchStats';

import { useParams } from "react-router-dom";


export default function GamesDetails({matches}) {
  const { id } = useParams();

  let match = []
  if (matches) {
    match = matches[id-1] 
  }
  return (
    
    match !== [] && matches &&
    <div className = "container back-img">
      
      <h1 className='my-main-title GD-Row'>Women's World Cup France 2019</h1>
      <div className = "row justify-content-evenly">
      {/* Data principal */}
      <Row>
          <Col lg='0' />
          <Col lg='12'  className='GD-Row'>
          <div className='my-container'>
            <div className='my-background-color'>
              <h4> City: {match.venue}</h4>
              <h4> Stadium: {match.location}</h4>
              <h4> Local team: {match.home_team_country}</h4>
              <h4> Visiting team: {match.away_team_country}</h4>
              <h4> Date: {match.datetime.slice(0,10)}</h4>
              <h4> Hour: {match.datetime.slice(11,16)} hs.</h4>
              <h4> Result: {match.home_team.code} {match.home_team.goals} - {match.away_team.goals} {match.away_team.code} </h4>
              <h4> Stages: {match.stage_name}</h4>
              <h4> Number of spectators: {match.attendance} people. </h4>
            </div>
          </div>
        </Col>
        <hr />
      </Row>
      {/* Football teams */}
      <Row>
        <h3 className="mt-4 my-secondary-title">Football teams</h3>
        {/* Starting eleven */}
        <Row>
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
          <Col lg='12' >
            <div className='my-container my-secondary-title'>
              <h4>Referees</h4>
              <div className='my-background-color'>
                  { match.officials.map((officials,i) => <p key={i} className='referees-style'>{officials}</p>) }
              </div>
            </div>
          </Col>
        </Row>
        <hr />
      </Row>
      {/* Stats for nerds */}
      <Row>
        <h3 className="mt-4 my-secondary-title">Stats for nerds</h3>
        
        {/* Weather */}
        <Row className='GD-Row'> 
          <Col lg='12'> <div className='my-container my-secondary-title'>
              <h4>Weather</h4>
              <div className='my-background-color'>
              <Row>
                <Col lg='3'>
                  <p className='style-icon'><FontAwesomeIcon icon={faCloudSunRain}  /> {match.weather.description}</p>
                </Col>

                <Col lg='3'>
                  <p className='style-icon'><FontAwesomeIcon icon={faTemperatureQuarter}/> {match.weather.temp_celsius}ºC / {match.weather.temp_farenheit}ºF</p>
                </Col>
                <Col lg='3'>
                  <p className='style-icon'><FontAwesomeIcon icon={faDroplet}/> {match.weather.humidity} % </p>
                </Col>
                <Col lg='3'>
                  <p className='style-icon'><FontAwesomeIcon icon={faWind}/> {match.weather.wind_speed} Km/hr.</p>
                </Col>
              </Row>  
                
              </div>
            </div>
          </Col>
        </Row>

        <Row className='GD-Row my-container'>
          <Col lg='6' className='my-secondary-title'>
            Eventos del local
            <ul>
              {match.home_team_events.map((events,i) => <h6 key={i}> minuto {events.time} : {events.type_of_event} of {events.player}</h6>)}
            </ul>
          </Col>
          <Col lg='6' className='my-secondary-title'>
            Eventos del Visitante
            <ul>
              {match.away_team_events.map((events,i) => <h6 key={i}> minuto {events.time} : {events.type_of_event} of {events.player}</h6>)}
            </ul>
          </Col>
        </Row>

        <Row className='GD-Row'>
          <Col lg='12'> 
            <div className='my-container my-secondary-title'>
              <h4>Match statistics</h4>
              <div className='my-background-color'>
                <CardsMatchStats 
                  homeTeam = {match.home_team_statistics}
                  visitingTeam = {match.away_team_statistics}
                />
              </div>
            </div>
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