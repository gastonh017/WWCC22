export default function Referies({ data }) {
  return (
    <div className="data">
      <h4>
        Árbitro/a: <p>{data.arbitro}</p>
      </h4>
      <h4>
        Árbitro/a Asistente 1: <p>{data.arbitroAsistente1}</p>
      </h4>
      <h4>
        Árbitro/a Asistente 2: <p>{data.arbitroAsistente2}</p>
      </h4>
      <h4>
        Cuarto Árbitro/a: <p>{data.cuartoArbitro}</p>
      </h4>
      <h4>
        Asistente VAR: <p>{data.asistenteVAR1}</p>
      </h4>
      <h4>
        Asistente VAR: <p>{data.asistenteVAR2}</p>
      </h4>
      <h4>
        Asistente VAR: <p>{data.asistenteVAR3}</p>
      </h4>
      <h4>
        Reserva de asistente: <p>{data.reservaAsistenteVAR}</p>
      </h4>
    </div>
  );
}
