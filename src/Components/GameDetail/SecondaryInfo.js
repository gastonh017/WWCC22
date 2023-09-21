import React from "react";
import ball from "./images/ball.png";

export default function SecondaryInfo({ data, role }) {
  return (
    <div className={role}>
      {data.map((element,index) => (
        <div key={index}>
          <p>{element.time}</p>
          <p>{element.player}</p>
          <img src={ball} alt="" className="img-ball" />
        </div>
      ))}
    </div>
  );
}
