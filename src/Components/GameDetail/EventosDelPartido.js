import clock from "./images/clock.png";
import ball from "./images/ball.png";
import substitutionIn from "./images/greenArrow.png";
import substitutionOut from "./images/redArrow.png";
import dobleYellowCard from "./images/dobleYelowCard.png";
import yellowCard from "./images/yelowCard1.png";
import redCard from "./images/redCard1.png";

export default function EventosDelPartido({ data,role }) {
  return (
    <div className="data">
      {data.map((element, index) => (
        <h4 key={index} className={role}>
          <p className={role}>
            <img src={clock} className="shirt" alt={index} />
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
              <img src={substitutionIn} className="shirt" alt={index} />
            ) : (
              ""
            )}
            {element.type_of_event === "substitution-out" ? (
              <img src={substitutionOut} className="shirt" alt={index} />
            ) : (
              ""
            )}
            {element.type_of_event === "yellow-card" ? (
              <img src={yellowCard} className="shirt" alt={index} />
            ) : (
              ""
            )}
            {element.type_of_event === "red-card" ? (
              <img src={redCard} className="shirt" alt={index} />
            ) : (
              ""
            )}
            {element.type_of_event === "yellow-card-second" ? (
              <img src={dobleYellowCard} className="shirt" alt={index} />
            ) : (
              ""
            )}
          </p>
        </h4>
      ))}
    </div>
  );
}
