import React, {useRef} from "react";
import "./navBar.css";
import Logo from "../../images/icon.png"
import Menu from "../../images/svg/menu.svg"
import CloseMenu from "../../images/svg/close.svg"

export default function Navbar() {

  let refMenu = useRef();
  let refCloseMenu = useRef();
  let refLinksMobile = useRef()

  const openMenu = () => {
    refCloseMenu.current.style.display = "block";
    refMenu.current.style.display = "none";
    refLinksMobile.current.style.display = "flex";
  }

  const closeMenu = () => {
    refCloseMenu.current.style.display = "none";
    refMenu.current.style.display = "block";
    refLinksMobile.current.style.display = "none";
  }

  return (
    <>
      <nav className="nav-container">
        {/* <div className="nav-sections"> */}
        <a className="nav-section-icon" href="/"> <img src={Logo} alt="WWC2019" /> </a>
        
        <div className="nav-section-links">
          {/* modo mobile */}
          <div className="mobile-mode">

            <div className="icons-mobile-mode" >
              <div id="open-menu" ref={refMenu} onClick={()=>openMenu()}>
                <img src={Menu} alt="Open Menu" />
              </div>
              <div id="close-menu" ref={refCloseMenu} onClick={()=>closeMenu()}>
                <img src={CloseMenu} alt="Close Menu" />
              </div>
            </div>
            <div className="list-mobile-mode" ref={refLinksMobile } >
              <ul>
                <li> <a href="/groups">Grupos</a> </li>

                <li> <a href="/teams">Equipos</a> </li>

                <li> <a href="/games">Todos los partidos</a> </li>

                <li> <a href="/stadiums">Estadios</a> </li>
              </ul>
            </div>
          </div>
          {/* modo pc */}
          <div className="pc-mode">
            <ul>
              <li> <a href="/groups">Grupos</a> </li>

              <li> <a href="/teams">Equipos</a> </li>

              <li> <a href="/games">Todos los partidos</a> </li>

              <li> <a href="/stadiums">Estadios</a> </li>
            </ul>
          </div>


        </div>

        {/* </div> */}
      </nav>
    </>
  );
};