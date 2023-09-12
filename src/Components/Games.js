import React from "react";
import Loading from './Loading';
import Instance from './Instance'
import DataMatchesFilter from './DataMatchesFilter'

export default function Games({matches}) {
  
  const {fase, octavos, cuartos,semis,tercero,final,loadingData} = DataMatchesFilter(matches)

  
  return (
    <div className = "back-img">

      <h1 className='my-main-title' >Women's World Cup France 2019</h1>

      <div className = "row justify-content-evenly">
        
        { loadingData ?  <Loading /> : 
          <>
            <Instance
              title = 'Fase de grupo'
              matches = {fase}
              offset = {1}
            />

            <Instance
              title = 'Octavos de final'
              matches = {octavos}
              offset = {37}
            />

            <Instance
              title = 'Cuartos de final'
              matches = {cuartos}
              offset = {45}
            />

            <Instance
              title = 'Semifinal'
              matches = {semis}
              offset = {49}
            />

            <Instance
              title = 'Tercer puesto'
              matches = {tercero}
              offset = {51}
            />

            <Instance
              title = 'Final'
              matches = {final}
              offset = {52}
            />
          </>   
        }

      </div>
    </div>
  )
}
