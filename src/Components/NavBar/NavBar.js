import React, {useState} from "react";
import "./navBar.css";
import Logo from "../../images/icon.png"
import Menu from "../../images/svg/menu.svg"
import CloseMenu from "../../images/svg/close.svg"

export default function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <>
      <nav className="nav-container ">
        <div className="nav-sections">
          <a className="nav-sections-icon" href="/">
            <img src={Logo} alt="WWC2019" />
          </a>
          <div className="nav-sections-links">
            <div className="pc-mode">
              <ul>
                <li> <a href="/groups">Grupos</a> </li>

                <li> <a href="/teams">Equipos</a> </li>

                <li> <a href="/games">Todos los partidos</a> </li>

                <li> <a href="/stadiums">Estadios</a> </li>
              </ul>
            </div>
            <div className="mobile-mode">
              <div className="icons-mobile-mode" >
                <div id="open-menu" onClick={()=> setMenuOpened(true)} className={`${menuOpened && "hidden-menu"}`}  >
                  <img src={Menu} alt="Open Menu"/>
                </div>
                <div id="close-menu" className={`${!menuOpened && "hidden-menu"}`} onClick={()=> setMenuOpened(false)}>
                  <img src={CloseMenu} alt="Close Menu"/>
                </div>
              </div>
              <div className={`${(!menuOpened && "hidden-menu")} " " ${(menuOpened && "list-mobile-mode visible-menu")}`} >
                <ul>
                  <li> <a href="/groups">Grupos</a> </li>

                  <li> <a href="/teams">Equipos</a> </li>

                  <li> <a href="/games">Todos los partidos</a> </li>

                  <li> <a href="/stadiums">Estadios</a> </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};