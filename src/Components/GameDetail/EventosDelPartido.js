import clock from "./images/clock.svg";
import ball from "./images/ball.png";
import substitutionIn from "./images/greenArrow.svg";
import substitutionOut from "./images/redArrow.svg";
//import dobleYellowCard from "./images/dobleYelowCard.svg";
import yellowCard from "./images/yelowCard.svg";
import redCard from "./images/redCard.svg";

export default function EventosDelPartido({ data,role }) {
  return (
    <div className="data">
      {data.map((element, index) => (
        <h4 key={index} className={role}>
          <p className={role}>
            <img src={clock} className="shirt" alt={index} style={{color:"#fff"}}/>
            <spam>{element.time}</spam>
            <spam>{" - "}</spam>
            <spam>{element.player}</spam>
            {element.type_of_event === "goal" ? (
              <img src={ball} className="shirt" alt={index} />
            ) : (
              ""
            )}
            {element.type_of_event === "goal-penalty" ? (
              <img src={ball} className="shirt" alt={index} />
            ) : (
              ""
            )}

            {element.type_of_event === "substitution-in" ? (
              <img src={substitutionIn} className="shirt" alt={index} style={{ transform: 'rotate(180deg)' }} />
            ) : (
              ""
            )}
            {element.type_of_event === "substitution-out" ? (
              <img src={substitutionOut} className="shirt" alt={index} style={{ transform: 'rotate(0deg)' }}/>
            ) : (
              ""
            )}
            {element.type_of_event === "yellow-card" ? (
              <img src={yellowCard} className="shirt" alt={index} style={{ transform: 'rotate(90deg)' }}/>
            ) : (
              ""
            )}
            {element.type_of_event === "red-card" ? (
              <img src={redCard} className="shirt" alt={index} />
            ) : (
              ""
            )}
            {element.type_of_event === "yellow-card-second" ? (
              <>
                <img src={yellowCard} className="shirt" alt={index} style={{ transform: 'rotate(90deg)' }}/>
                <img src={yellowCard} className="shirt" alt={index} style={{ transform: 'rotate(90deg)' }}/>
              </>
            ) : (
              ""
            )}
          </p>
        </h4>
      ))}
    </div>
  );
}
