const DataGroup = (teams) => {
    let groupA= [];
    let groupB= [];
    let groupC= [];
    let groupD= [];
    let groupE= [];
    let groupF= [];
    let groupFilter= [];

    if (teams & teams.lenght >0){
        groupFilter = teams.map (team => {
            const group = team.group;
            const teamName = team.team_name;
            const gamesPlayed = team.games_played;
            const wins = team.wins;
            const draws = team.draws;
            const losses = team.losses;
            const goals_for = team.goals_for;
            const goals_against = team.goals_against;
            const points = team.points;

            return {group, teamName, gamesPlayed, wins, draws, losses, goals_for, goals_against, points}
        })

        const groupA = groupFilter.filter (team => team.group == "A")
        const groupB = groupFilter.filter (team => team.group == "B")
        const groupC = groupFilter.filter (team => team.group == "C")
        const groupD = groupFilter.filter (team => team.group == "D")
        const groupE = groupFilter.filter (team => team.group == "E")
        const groupF = groupFilter.filter (team => team.group == "F")

    }
    return { groupA, groupB, groupC, groupD, groupE, groupF}
}
export default DataGroup;