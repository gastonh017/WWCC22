const getTeam = async () => {

    const url = "https://worldcup.sfg.io/teams/results"
    const res = await fetch(url)
    const team = await res.json()

    return team
}
export default getTeam;