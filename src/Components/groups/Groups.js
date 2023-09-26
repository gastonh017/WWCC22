import React from "react";
import Spinner from "react-bootstrap/Spinner";
// import TablaGrupos from "../TablaGrupos";
import "./groups.css";
import banner from './banner-grupos2.png'

import { useState, useEffect } from "react";
import { FlagsData } from "../FlagsData";

const findFlag = (str) => {
  for (let i = 0; i < FlagsData.length; i++) {
    if (FlagsData[i].name === str) {
      return FlagsData[i].url;
    }
  }
};

function Groups() {
  const [teams, setTeams] = useState([]);
  const [groupA, setGroupA] = useState([]);
  const [groupB, setGroupB] = useState([]);
  const [groupC, setGroupC] = useState([]);
  const [groupD, setGroupD] = useState([]);
  const [groupE, setGroupE] = useState([]);
  const [groupF, setGroupF] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/group_results")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
        //console.log(data);
        //console.log(data[0].group);
        //				setGroup1(data.filter(team => team.group_id === 1))
        const teamsGroupA = data.filter((team) => team.group === "A");
        const teamsGroupB = data.filter((team) => team.group === "B");
        const teamsGroupC = data.filter((team) => team.group === "C");
        const teamsGroupD = data.filter((team) => team.group === "D");
        const teamsGroupE = data.filter((team) => team.group === "E");
        const teamsGroupF = data.filter((team) => team.group === "F");
        // console.log(teamsGroupA);
        setGroupA(teamsGroupA);
        setGroupB(teamsGroupB);
        setGroupC(teamsGroupC);
        setGroupD(teamsGroupD);
        setGroupE(teamsGroupE);
        setGroupF(teamsGroupF);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
     <img src={banner} className="" alt="banner"></img>
    <div className="contenedor-tablas">
      <div className="clase-grupo">
        <p> Grupo A</p>
        <table className="tabla-grupo" summary="Tabla de posiciones de grupos">
          <thead>
            <tr className="">
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">J</th>
              <th scope="col">G</th>
              <th scope="col">E</th>
              <th scope="col">P</th>
              <th scope="col">GF</th>
              <th scope="col">GC</th>
              <th scope="col">Pts</th>
            </tr>
          </thead>
          {groupA.length === 0 ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            groupA.map((team, index) => (
              <tbody key={index}>
                <tr>
                  <img
                    src={findFlag(team.fifa_code)}
                    
                    alt="bandera"
                  />
                  <td>{team.fifa_code}</td>
                  <td>{team.games_played}</td>
                  <td>{team.wins}</td>
                  <td>{team.draws}</td>
                  <td>{team.losses}</td>
                  <td>{team.goals_for}</td>
                  <td> {team.goals_against}</td>
                  <td>{team.points}</td>
                </tr>
              </tbody>
            ))
          )}
        </table>
      </div>
      <div className="clase-grupo">
      <p>Grupo B</p>
      <table className="tabla-grupo">
        <thead>
          <tr className="">
            <th scope="col"></th>
            <th scope="col"></th>
            <th>J</th>
            <th>G</th>
            <th>E</th>
            <th>P</th>
            <th>GF</th>
            <th>GC</th>
            <th>Pts</th>
          </tr>
        </thead>
        {groupB.length === 0 ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          groupB.map((team, index) => (
            <tbody key={index}>
              <tr>
                <img
                  src={findFlag(team.fifa_code)}
                  
                  alt="bandera"
                />
                <td>{team.fifa_code}</td>
                <td>{team.games_played}</td>
                <td>{team.wins}</td>
                <td>{team.draws}</td>
                <td>{team.losses}</td>
                <td>{team.goals_for}</td>
                <td>{team.goals_against}</td>
                <td>{team.points}</td>
              </tr>
            </tbody>
          ))
        )}
      </table>
      </div>
      <div className="clase-grupo">
      <p>Grupo C</p>
      <table className="tabla-grupo">
        <thead>
          <tr className="">
            <th scope="col"></th>
            <th scope="col"></th>
            <th>J</th>
            <th>G</th>
            <th>E</th>
            <th>P</th>
            <th>GF</th>
            <th>GC</th>
            <th>Pts</th>
          </tr>
        </thead>
        {groupC.length === 0 ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          groupC.map((team, index) => (
            <tbody key={index}>
              <tr>
                <img
                  src={findFlag(team.fifa_code)}
                  
                  alt="bandera"
                />
                <td>{team.fifa_code}</td>
                <td>{team.games_played}</td>
                <td>{team.wins}</td>
                <td>{team.draws}</td>
                <td>{team.losses}</td>
                <td>{team.goals_for}</td>
                <td>{team.goals_against}</td>
                <td>{team.points}</td>
              </tr>
            </tbody>
          ))
        )}
      </table>
      </div>
      <div className="clase-grupo">
      <p>Grupo D</p>
      <table className="tabla-grupo">
        <thead>
          <tr className="">
            <th scope="col"></th>
            <th scope="col"></th>
            <th>J</th>
            <th>G</th>
            <th>E</th>
            <th>P</th>
            <th>GF</th>
            <th>GC</th>
            <th>Pts</th>
          </tr>
        </thead>
        {groupD.length === 0 ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          groupD.map((team, index) => (
            <tbody key={index}>
              <tr>
                <img
                  src={findFlag(team.fifa_code)}
                  
                  alt="bandera"
                />
                <td>{team.fifa_code}</td>
                <td>{team.games_played}</td>
                <td>{team.wins}</td>
                <td>{team.draws}</td>
                <td>{team.losses}</td>
                <td>{team.goals_for}</td>
                <td>{team.goals_against}</td>
                <td>{team.points}</td>
              </tr>
            </tbody>
          ))
        )}
      </table>
      </div>
      <div className="clase-grupo">
      <p>Grupo E</p>
      <table className="tabla-grupo">
        <thead>
          <tr className="">
            <th scope="col"></th>
            <th scope="col"></th>
            <th>J</th>
            <th>G</th>
            <th>E</th>
            <th>P</th>
            <th>GF</th>
            <th>GC</th>
            <th>Pts</th>
          </tr>
        </thead>
        {groupE.length === 0 ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          groupE.map((team, index) => (
            <tbody key={index}>
              <tr>
                <img
                  src={findFlag(team.fifa_code)}
                  
                  alt="bandera"
                />
                <td>{team.fifa_code}</td>
                <td>{team.games_played}</td>
                <td>{team.wins}</td>
                <td>{team.draws}</td>
                <td>{team.losses}</td>
                <td>{team.goals_for}</td>
                <td>{team.goals_against}</td>
                <td>{team.points}</td>
              </tr>
            </tbody>
          ))
        )}
      </table>
      </div>
      <div className="clase-grupo">
      <p>Grupo F</p>
      <table className="tabla-grupo">
        <thead>
          <tr className="">
            <th scope="col"></th>
            <th scope="col"></th>
            <th>J</th>
            <th>G</th>
            <th>E</th>
            <th>P</th>
            <th>GF</th>
            <th>GC</th>
            <th>Pts</th>
          </tr>
        </thead>
        {groupF.length === 0 ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          groupF.map((team, index) => (
            <tbody key={index}>
              <tr>
                <img
                  src={findFlag(team.fifa_code)}
                  
                  alt="bandera"
                />
                <td>{team.fifa_code}</td>
                <td>{team.games_played}</td>
                <td>{team.wins}</td>
                <td>{team.draws}</td>
                <td>{team.losses}</td>
                <td>{team.goals_for}</td>
                <td>{team.goals_against}</td>
                <td>{team.points}</td>
              </tr>
            </tbody>
          ))
        )}
      </table>
      </div>
    </div>
    </>
  );
}
export default Groups;
