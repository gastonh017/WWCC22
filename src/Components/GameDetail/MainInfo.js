import React from "react";
import { FlagsData } from "../FlagsData";

export default function MainInfo({ data, role }) {

  const findFlag = (teamFlag) => {
    for (let i = 0; i < FlagsData.length; i++) {
      if (FlagsData[i].name === teamFlag) {
        return FlagsData[i].url;
      }
    }
  };
  return (
    <div className={role}>
      <p>{data.home.code}</p>
      <img src={findFlag(data.home.code)} alt="" />
      <p>{data.home.goals}</p>
      {data.stage === "First Stage" ||
      data.home.goals !== data.away ? (
        <p></p>
      ) : (
        <p>( {data.home.penalties} )</p>
      )}
    </div>
  );
}
