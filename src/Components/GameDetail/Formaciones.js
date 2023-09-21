import Shirt from "./images/shirt.png";
import captain from "./images/captain.png";

export default function Formaciones({ data,role }) {
  const posicion = (position) => {
    let posicion;
    position === "Goalie"
      ? (posicion = "Arquera")
      : position === "Defender"
      ? (posicion = "Defensora")
      : position === "Midfield"
      ? (posicion = "Mediocampista")
      : position === "Forward"
      ? (posicion = "Delantera")
      : (posicion =
          position + "-----------------------------------------------");

    return posicion;
  };
  return (
    <>
      <div className="data">
        {data.map((element, index) => (
          <h4 key={index} className={role}>
            <p className={role}>
              <spam className="boldie">{posicion(element.position)}</spam>
              <spam className="boldie">{" : "}</spam>
              <spam>{element.name}</spam>
              <img src={Shirt} className="shirt" alt={index} />
              {`[${element.shirt_number}]`}
              {element.captain ? (
                <img src={captain} className="shirt" alt={index} />
              ) : (
                ""
              )}
            </p>
          </h4>
        ))}
      </div>
    </>
  );
}
