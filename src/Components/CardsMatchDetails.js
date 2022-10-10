import React from "react";
import {Row ,Col} from 'react-bootstrap';

export default function CardsMatchDetails ({title, teamCountry, team}) {
  
  return(
    <div className='my-container'>
      
        <Row>
          <Col>
            <div className="my-title-card" >{teamCountry}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="my-subtitle-card" >{title}</div>
          </Col>
        </Row>
        <Row>
          <Col lg='8' className='widthoutpadd-r'>
            <div className="my-subtitle-card" >Name</div>
          </Col>
          <Col lg='3' className = 'widthoutpadd-r widthoutpadd-l'>
            <div className="my-subtitle-card" >Position</div>
          </Col>
          <Col lg='1' className='widthoutpadd-l'>
            <div className="my-subtitle-card" >#</div>
          </Col>
        </Row>
        { team.map((player,i) =>
          <Row key={i}>
            <Col lg='8' className='widthoutpadd-r'>
              <div className="my-subtitle-card" >{player.name}</div>
            </Col>
            <Col lg='3' className = 'widthoutpadd-r widthoutpadd-l'>
              <div className="my-subtitle-card" >{player.position}</div>
            </Col>
            <Col lg='1' className='widthoutpadd-l'>
              <div className="my-subtitle-card" >{player.shirt_number}</div>
            </Col>
          </Row>    
        )}

        <Row>
          <Col>
            <div className="my-buttom-card" >.</div>
          </Col>
        </Row>
            
    </div>
  )
}