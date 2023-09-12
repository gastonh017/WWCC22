import React from "react";
import "./navBar.css";
import Logo from "../../images/icon.png"

export default function Navbar() {
  return (
    <>
      <nav className="nav-container ">
        <div className="nav-sections">
          <a className="nav-sections-icon" href="/">
            <img src={Logo} alt="WWC2019" />
          </a>
          <div className="nav-sections-links" id="">
            <ul>
              <li> <a href="/groups">Grupos</a> </li>

              <li> <a href="/teams">Equipos</a> </li>

              <li> <a href="/games">Todos los partidos</a> </li>

              <li> <a href="/stadiums">Estadios</a> </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};