import {useState, useEffect} from "react";

const useFetchMatches = url => {

  // const [loadingData, setLoadingData] = useState(true);
  // const [fase, setFase]       = useState([]);
  // const [octavos, setOctavos] = useState([]);
  // const [cuartos, setCuartos] = useState([]);
  // const [semis, setSemis]     = useState([]);
  // const [tercero, setTercero] = useState([]);
  // const [final,setFinal]      = useState([]);
  const [matches, setMatches] = useState();

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then( matches => {
      // setFase(matches.filter(match => match.stage_name === "First Stage"));
      // setOctavos(matches.filter(match => match.stage_name === "Round of 16"));
      // setCuartos(matches.filter(match => match.stage_name === "Quarter-final"));
      // setSemis(matches.filter(match => match.stage_name === "Semi-final"));
      // setTercero(matches.filter(match => match.stage_name === "Match for third place"));
      // setFinal(matches.filter(match => match.stage_name === "Final"));
      // setLoadingData(false);
      setMatches(matches);

    })
    .catch(error => console.log(error));
  },[url])

  return {matches};
}

export default useFetchMatches;
