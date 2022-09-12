import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/NavBar"
import Sidebar from './Components/Sidebar';

import Home from './Components/Home';
import Teams from './Components/Teams';
import Games from './Components/Games';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
        <div fixed-left>
          <Sidebar />
        </div>
         
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/teams' element={<Teams />} />
            <Route path='/games' element={<Games/>} />

          </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
