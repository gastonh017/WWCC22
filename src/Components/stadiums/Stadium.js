import { Height } from '@mui/icons-material';
import {StadiumsData} from './StadiumsData'
import {Card, ListGroup} from 'react-bootstrap';


const Stadium = (props) => {
  return(
    <>
    
      <Card className="my-bg-card text-dark margin_card text-center" style={{height: 'auto', width: '75%'}}>
        <Card.Header className=" bg-primary text-light strong" >{props.stadium}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-primary text-light strong" >
              <img src={StadiumsData[props.index].urlImage} alt={props.stadium} className='w-100' />
            </ListGroup.Item>
            <ListGroup.Item className="bg-primary text-light" > Partidos realizados: {props.gamesPlayed} </ListGroup.Item>
          </ListGroup>
      </Card>
      <hr />
    </>
  )
}

export default Stadium;