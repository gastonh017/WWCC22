import React from "react";
import {Row ,Col} from 'react-bootstrap';
import Linea from './Linea'

export default function CardsMatchStats ({homeTeam,visitingTeam}) {
  const local1 = Object.values(homeTeam);
  let local2 = local1.map(value => value.toString())
  local2 = local2.slice(0,18);
  const visita1 = Object.values(visitingTeam);
  let visita2 = visita1.map(value => value.toString())
  visita2 = visita2.slice(0,18);
  let title = Object.keys(homeTeam);
  
  let statsData = title.map((name,i) => {
    let texto = name.replace('_',' ');
    while (texto.match('_') != null) {
      texto = texto.replace('_',' ');
    }
    texto = texto.charAt(0).toUpperCase() + texto.slice(1)
    return texto
  })
  statsData = statsData.slice(0,18)
  const data = statsData.map((element,i)=>{return{elemento:element,local:local2[i],visita:visita2[i]}});
  
  return(
    statsData !== [] &&
    
    <div className='my-container'>
      
      <Row>
        <Col lg='4'>
          <div className="my-title-card" > </div>
        </Col>
        <Col lg='4'>
          <div className="my-title-card widthoutpadd-r widthoutpadd-l" >Local</div>
        </Col>
        <Col lg='4'>
          <div className="my-title-card" >Visit</div>
        </Col>
      </Row>
      
     { data.map((element,i) => 
        <Row key={i}>
          <Linea data = {element} />
        </Row>
        )}
    </div>
  )
}