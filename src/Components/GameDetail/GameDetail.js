import React from "react";
import "./gameDetail.css";
import Logo from "./images/icon.png";

import { useParams } from "react-router-dom";

import MainInfo from "./MainInfo";
import SecondaryInfo from "./SecondaryInfo";
import General from "./General";
import Formaciones from "./Formaciones";
import EventosDelPartido from "./EventosDelPartido";
import Referies from "./Referies";

export default function GamesDetails({ matches }) {
  const { id } = useParams();

  let match = [];
  let away_goals = [];
  let home_goals = [];

  if (matches) {
    match = matches[id - 1];
    // console.log(match);
    home_goals = match.home_team_events.filter(
      (event) =>
        event.type_of_event === "goal" || event.type_of_event === "goal-penalty"
    );
    away_goals = match.away_team_events.filter(
      (event) =>
        event.type_of_event === "goal" || event.type_of_event === "goal-penalty"
    );
  }

  const Selected = () => {
    let page = document.querySelectorAll(".page-detail");
    let description = document.querySelectorAll(".info-description");
    let pageDetail = document.querySelectorAll(".page-detail");

    page.forEach((flap, i) => {
      flap.addEventListener("click", () => {
        enableInfo(i);
      });
    });

    const enableInfo = (idSelect) => {
      for (let i = 0; i < description.length; i++) {
        idSelect === i
          ? description[i].classList.add("enable-info")
          : description[i].classList.remove("enable-info");
        idSelect === i
          ? pageDetail[i].classList.add("selected")
          : pageDetail[i].classList.remove("selected");
      }
    };
  };

  Selected();

  return (
    matches && (
      <>
        <section className="main-info">
          <article className="icon-WWCC19">
            <img src={Logo} alt="" />
          </article>
          <article className="title-WWCC19">
            <MainInfo
              data={{
                home: match.home_team,
                stage: match.stage_name,
                away: match.away_team.goals,
              }}
              role="info-local"
            />
            <p style={{color:"#18014d"}}>-</p>
            <MainInfo
              data={{
                home: match.away_team,
                stage: match.stage_name,
                away: match.home_team.goals,
              }}
              role="info-visita"
            />
          </article>
          <article className="goals-WWCC19">
            <SecondaryInfo data={home_goals} role="local" />
            <SecondaryInfo data={away_goals} role="visita" />
          </article>
        </section>
        <section className="info-detail" id="">
          <article>
            <nav>
              <div className="secondary-nav-links" id="">
                <ul className="">
                  <li className="page-detail selected" onClick={Selected}>
                    General
                  </li>
                  <li className="page-detail" onClick={Selected}>
                    Formaciones
                  </li>
                  <li className="page-detail" onClick={Selected}>
                    Eventos
                  </li>
                  <li className="page-detail" onClick={Selected}>
                    Referies
                  </li>
                </ul>
              </div>
            </nav>
          </article>
          <article>
            <div className="info-description enable-info">
              <div>
                <General
                  data={{
                    ciudad: match.venue,
                    estadio: match.location,
                    espectadores: match.attendance,
                    fase: match.stage_name,
                    local: match.home_team_country,
                    visita: match.away_team_country,
                    fecha: match.datetime,
                    horario: match.datetime,
                    ganador: match.winner,
                  }}
                  />
              </div>
            </div>

            <div className="info-description">
              <div>
                <div>
                  <h3>{match.home_team_country}</h3>
                  <h5 className="title-team">Titulares</h5>
                  <Formaciones data={match.home_team_statistics.starting_eleven} role={""} />
                  <h5 className="title-team">Suplentes</h5>
                  <Formaciones data={match.home_team_statistics.substitutes} role={""}/>
                </div>
                <div className="right">
                  <h3>{match.away_team_country}</h3>
                  <h5 className="title-team">Titulares</h5>
                  <Formaciones data={match.away_team_statistics.starting_eleven} role={"visitante"}/>
                  <h5 className="title-team">Suplentes</h5>
                  <Formaciones data={match.away_team_statistics.substitutes} role={"visitante"}/>
                </div>
              </div>
            </div>

            <div className="info-description">
              <div>
                <div>
                  <h3>{match.home_team_country}</h3>
                  <EventosDelPartido data={match.home_team_events} role={""} />
                </div>
                <div className="right">
                  <h3>{match.away_team_country}</h3>
                  <EventosDelPartido data={match.away_team_events} role={"visitante"} />
                </div>
              </div>
            </div>

            <div className="info-description">
              <div>
                <Referies
                  data={{
                    arbitro: match.officials[0],
                    arbitroAsistente1: match.officials[1],
                    arbitroAsistente2: match.officials[2],
                    cuartoArbitro: match.officials[3],
                    asistenteVAR1: match.officials[4],
                    asistenteVAR2: match.officials[5],
                    asistenteVAR3: match.officials[6],
                    reservaAsistenteVAR: match.officials[7]
                  }}
                />
              </div>
            </div>

          </article>
        </section>
      </>
    )
  );
}
