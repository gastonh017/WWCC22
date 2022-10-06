const DataMatchesFilter = (matches) => {
  let fase = [];
  let octavos = [];
  let cuartos = [];
  let semis = [];
  let final = [];
  let tercero = [];
  let dataMatchesFilter = []
  let loadingData = true;
  
  
  if (matches && matches.length > 0){
    dataMatchesFilter = matches.map(match => {
      const stage_name = match.stage_name
      const home_team_code = match.home_team.code
      const away_team_code = match.away_team.code
      const datetime = match.datetime
      const home_team_country = match.home_team_country
      const away_team_country = match.away_team_country
      const home_team_goals =  match.home_team.goals
      const away_team_goals = match.away_team.goals
      const city = match.venue
      const stadium = match.location
      return {stage_name, home_team_code, away_team_code,datetime, home_team_country, away_team_country,home_team_goals, away_team_goals, city, stadium};
    })
    
    fase    = dataMatchesFilter.filter(match => match.stage_name === "First Stage");
    octavos = dataMatchesFilter.filter(match => match.stage_name === "Round of 16");
    cuartos = dataMatchesFilter.filter(match => match.stage_name === "Quarter-final");
    semis   = dataMatchesFilter.filter(match => match.stage_name === "Semi-final");
    tercero = dataMatchesFilter.filter(match => match.stage_name === "Match for third place");
    final   = dataMatchesFilter.filter(match => match.stage_name === "Final");
    loadingData = false;
  }
  return {fase, octavos, cuartos,semis,tercero,final,loadingData};
}
export default DataMatchesFilter;