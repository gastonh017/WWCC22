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
        <div id='wrapper'>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path='/' exact component={Home} />
            <Route path='/teams' component={Teams} />
            <Route path='/games' component={Games} />

          </Routes>

        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
