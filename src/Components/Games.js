import React from "react";
import Loading from './Loading';
import Instance from './Instance'
import DataMatchesFilter from './DataMatchesFilter'




export default function Games({matches}) {
  const {fase, octavos, cuartos,semis,tercero,final,loadingData} = DataMatchesFilter(matches)

  
  return (
    <div className = "container back-img">

      <h1 className='my-main-title' >Women's World Cup France 2019</h1>

      <div className = "row justify-content-evenly">
        
        { loadingData ?  <Loading /> : 
          <>
            <Instance
              title = 'First Stage'
              matches = {fase}
              offset = {1}
            />

            <Instance
              title = 'Round of 16'
              matches = {octavos}
              offset = {37}
            />

            <Instance
              title = 'Quarter-final'
              matches = {cuartos}
              offset = {45}
            />

            <Instance
              title = 'Semi-final'
              matches = {semis}
              offset = {49}
            />

            <Instance
              title = 'Third place'
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
