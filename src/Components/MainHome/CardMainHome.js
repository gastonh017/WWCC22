import React from "react";

export default function CardMainHome(props) {
  return (
    <section className="secciones">
      <article className="text-secciones">
        <h2 className="text-title">{props.title}</h2>
        <h3 className="text-description">
          {props.description}
        </h3>
      </article>
      <article className="container">
        <div className="card">
          <div id={props.id} className="front"></div>
            <a href={props.link} className="back">Clickeá para ver</a>
        </div>
      </article>
    </section>
  );
}
