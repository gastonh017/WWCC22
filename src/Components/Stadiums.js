import React, {useState, useEffect} from "react";
import Loading from './Loading';

const Stadiums = () => {
  const [stadiums, setStadiums] = useState([]);

  useEffect(() => {
      fetch('https://worldcup.sfg.io/matches')
      .then(response => response.json())
      .then(data => {
        const datos = data.map((estadio)=> (estadio.location));
        setStadiums(datos);
      })
      .catch(error => console.log(error));
    },[])
  
  return (
    <div className="container">
      <h2>All the Stadiums</h2>
      {
        stadiums.length === 0 ? <Loading /> :
          stadiums.map((match,index) => <p key={index}>{match}</p>)
      }
    </div>
  )
}

export default Stadiums;