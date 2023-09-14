// function TablaGrupos({team_name, games_played, wins, draws, losses, goals_for, goals_against, points}) {
    const TablaGrupos = (props) => {
        console.log('holaaaa===', props)
return (
    <tbody>
            <p> HOLAAAAAA</p>
			<tr>
				<td>{props.team_name}</td>
				<td>{props.games_played}</td>
				<td>{props.wins}</td>
				<td>{props.draws}</td>
				<td>{props.losses}</td>
				<td>{props.goals_for}</td>
				<td>{props.goals_against}</td>
				<td>{props.points}</td>
			</tr>
		</tbody>
)

}
export default TablaGrupos