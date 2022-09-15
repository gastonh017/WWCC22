import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function TeamCard({ name, group_letter, wins, draws, losses, goals_for, goals_against }) {
    return (
    <Card bg="light" className="col-lg-3 mb-2">
        <Card.Header className="bg-secondary text-light ">{name}</Card.Header>
        <Card.Body>
            <ListGroup variant="flush"  className = "row justify-content-evenly">
                <ListGroup.Item className="bg-secondary text-light strong" > Grupo: {group_letter} </ListGroup.Item>
                <ListGroup.Item className="bg-secondary text-light strong" > Ganados: {wins}</ListGroup.Item>
                <ListGroup.Item className="bg-secondary text-light strong" > Empatados: {draws}</ListGroup.Item>
                <ListGroup.Item className="bg-secondary text-light strong" > Perdidos: {losses}</ListGroup.Item>
                <ListGroup.Item className="bg-secondary text-light strong" > Goles a Favor: {goals_for}</ListGroup.Item>
                <ListGroup.Item className="bg-secondary text-light strong" > Goles en Contra: {goals_against}</ListGroup.Item>
            </ListGroup>
        </Card.Body>
    </Card>)
}