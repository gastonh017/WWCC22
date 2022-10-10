import CardsMatch from './CardsMatch'

const Instance = ({title,matches,offset})=> {
return(
  <>
    <h3 className="mt-4 my-secondary-title">{title}</h3>          
    {matches.map((element,index)=>
      <CardsMatch
        key = {index} 
        index = {index} 
        offset = {offset} 
        {...element} 
      />
    )}
  </>
)}

export default Instance
