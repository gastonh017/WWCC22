import React from "react";
import "./mainHome.css";
import CardMainHome from "./CardMainHome";

export default function MainHome() {
  return (
    <div className="main-container">
      
      <CardMainHome
        title="Grupos"
        description="Encuentra todas las posiciones de cada equipo en la fase de grupo"
        id="img01"
        link="/groups"
      />

      <CardMainHome
        title="Equipos"
        description="Podrás ver que equipos fueros los que participaron y algunos datos más"
        id="img02"
        link="/teams"
      />

      <CardMainHome
        title="Todos los partidos"
        description="Fijate el detalle de cada partido que se jugó"
        id="img03"
        link="/games"
      />

      <CardMainHome
        title="Estadios"
        description="Estos son los estadios donde se jugó el mundial"
        id="img04"
        link="/stadiums"
      />

    </div>
  );
}
