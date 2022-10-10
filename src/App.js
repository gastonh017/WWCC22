import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/NavBar"
import Sidebar from './Components/Sidebar';
// React-Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Home from './Components/Home';
import Teams from './Components/Teams';
import Games from './Components/Games';
import GamesDetails from './Components/GamesDetails'
import Stadiums from './Components/Stadiums'
import CarouselMatches from './Components/carouselMatches'
import useFetchMatches from "./Components/CustomHooks/useFetchMatches";


function App() {

  const {matches} = useFetchMatches('https://worldcup.sfg.io/matches');
  
  return (
    <div className="App">
      <BrowserRouter>
        <Row>
          <Navbar />
        </ Row>
        
        <Row className = 'margin_top_sidebar' >
          <Col lg='2' >
            <Sidebar />
          </Col>
          <Col lg='10' className = 'no-margin' >
            <Routes>
              <Route path='/'             element={<Home />}  exact />
              <Route path='/teams'        element={<Teams />}       />
              <Route path='/games'        element={<Games matches = {matches}/>} exact  />
              <Route path='/games/:id'    element={<GamesDetails matches = {matches} />}/>
              <Route path='/games/details'element={<CarouselMatches />} />
              <Route path='/stadiums'     element={<Stadiums />}    />
            </Routes>
          </Col>
        </ Row>

      </BrowserRouter>
    </div>
  );
}

export default App;