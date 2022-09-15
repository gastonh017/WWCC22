import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/NavBar"
import Sidebar from './Components/Sidebar';

import Home from './Components/Home';
import Teams from './Components/Teams';
import Games from './Components/Games';
import Groups from './Components/Groups';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <Sidebar />
        </div>
         
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/teams' element={<Teams />} />
            <Route path='/games' element={<Games/>} />
            <Route path='/groups' element={<Groups/>} />

          </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
