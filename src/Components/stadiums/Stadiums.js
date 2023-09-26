import React, {useState, useEffect} from "react";
import Loading from '../Loading';
import Stadium from './Stadium'
import './stadiums.css'
import banner from './banner estadios.png'

const Stadiums = () => {
  const [stadiums, setStadiums] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3000/matches')
      .then(response => response.json())
      .then(data => {
        let datos = data.map((estadio) => (estadio.location));
        let listado = [];
        let matchesJugados = [];
        while (datos.length > 0) {
          let valor = datos.shift();
          listado.push(valor);
          matchesJugados.push({cantidad:1});
          datos  = datos.filter( (element,index) => {
            if (element === valor){
              matchesJugados[matchesJugados.length-1].cantidad++;
            }
            return(element !== valor)});
        }
        setStadiums(listado);
        setMatches(matchesJugados);
      })
      .catch(error => console.log(error));
    },[])
  //console.log(stadiums);
  return (
    <>
      <img src={banner} alt='banner estadios'></img>
      <div className = "container-stadium">

        {
          stadiums.length === 0 ? 
            <Loading /> 
          :
            stadiums.map((stadium,index) =>  
              <Stadium key = {index}
                stadium = {stadium} 
                index = {index}
                gamesPlayed = {matches[index].cantidad}
              />
        )}
      </div>
    </>
  )
}

export default Stadiums;