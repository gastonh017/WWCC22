import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/NavBar"
import Sidebar from './Components/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Home from './Components/Home';
import Teams from './Components/Teams';
import Games from './Components/Games';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Row>
          <Navbar />
        </ Row>
        
        <Row className ='margin_top' >
          <Col lg='2' >
            <Sidebar />
          </Col>
          <Col lg='10' >
            <Routes>
              <Route path='/' exact element={<Home  />} />
              <Route path='/teams'  element={<Teams />} />
              <Route path='/games'  element={<Games />} />
            </Routes>
          </Col>
        </ Row>

      </BrowserRouter>
    </div>
  );
}

export default App;
