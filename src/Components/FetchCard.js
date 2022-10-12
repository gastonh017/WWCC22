import React, { useState, useEffect } from "react"
import getTeam from "../Helpers/getTeam"

const FetchCard= () => {
    const [team, setTeam] = useState()
		const [card, setCard] = useState([])
 
    const updateTeam = () => {
        getTeam()
					.then((newTeam)=> {
						setTeam(newTeam)
					})
    }
}

useEffect(()=> {
	updateTeam()
}, [])

return (
	<>
		<button onClick={updaTeam}> Team </button>
	</>
)

export default FetchCard