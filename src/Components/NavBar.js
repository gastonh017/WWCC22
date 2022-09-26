import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// import {Link} from "react-router-dom"
import img_cup from "../images/img_cup.png"


function NavbarX() {
  return (
    <Navbar bg="secondary" expand="lg" fixed="top">
      <Container fluid>
      <Nav.Link href='/'> <img src={img_cup} height="60px" alt='World Cup 2019 Icon' /> </Nav.Link>
         {/* <Navbar.Brand href="/">WWC19</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <NavDropdown title="Groups" id="navbarScrollingDropdown" className='mx-auto'>
              <NavDropdown.Item href="/action3">Group A</NavDropdown.Item>
              <NavDropdown.Item href="/action3">Group B</NavDropdown.Item>
              <NavDropdown.Item href="/action3">Group C</NavDropdown.Item>
              <NavDropdown.Item href="/action3">Group D</NavDropdown.Item>
              <NavDropdown.Item href="/action3">Group E</NavDropdown.Item>
              <NavDropdown.Item href="/action3">Group F</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="/action5">
                Fixture
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/action2">Round of 16</Nav.Link>
            <Nav.Link href="#" >
              Quater Finals
            </Nav.Link>
            <Nav.Link href="#" >
              Semi-Finals
            </Nav.Link>
            <Nav.Link href="#" >
              Final
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarX;
