import {Row ,Col} from 'react-bootstrap';

export default function Linea({data}){
  return(
    <>
      <Col lg='4'>
        <div className="my-subtitle-card" >{data.elemento} </div>
      </Col>
      <Col lg='4'>
        <div className="my-subtitle-card widthoutpadd-r widthoutpadd-l" >{data.local}</div>
      </Col>
      <Col lg='4'>
        <div className="my-subtitle-card" >{data.visita}</div>
      </Col>
    </>
  )
}