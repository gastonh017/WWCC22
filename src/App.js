import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

// React-Bootstrap
import Row from 'react-bootstrap/Row';

import Home from './Components/Home';
import Teams from './Components/teams/Teams';
import Games from './Components/Games';
import GamesDetails from './Components/GamesDetails'
import Stadiums from './Components/Stadiums'
import Groups from './Components/groups/Groups'
import CarouselMatches from './Components/carouselMatches'
import useFetchMatches from "./Components/CustomHooks/useFetchMatches";

import NavBar2 from "./Components/NavBar/NavBar";
import MainHome from "./Components/MainHome/MainHome"



function App() {

  const {matches} = useFetchMatches('http://localhost:3000/matches');
  


  return (
    <div className="App">
      <BrowserRouter>
        <Row>
          <NavBar2 />
        </ Row>
        <Row>
            <Routes>
              <Route path='/'             element={<MainHome />}  exact/>
              <Route path='/teams'        element={<Teams />}       />
              <Route path='/games'        element={<Games matches = {matches}/>} exact  />
              <Route path='/games/:id'    element={<GamesDetails matches = {matches} />} />
              <Route path='/games/details'element={<CarouselMatches />} />
              <Route path='/stadiums'     element={<Stadiums />}    />
              <Route path='/groups'       element={<Groups />}    />
            </Routes>
        </ Row>


      </BrowserRouter>
    </div>
  );
}

export default App;