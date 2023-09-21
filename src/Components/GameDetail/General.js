export default function General({ data }) {
  const fecha = data.fecha.substring(0, 10);
  const horario = data.horario.substring(11, 16);
  return (
    <div className="data">
      <h4>
        Ciudad: <p>{data.ciudad}</p>
      </h4>
      <h4>
        Estadio: <p>{data.estadio}</p>
      </h4>
      <h4>
        Espectadores: <p>{data.espectadores} personas</p>
      </h4>
      <h4>
        Etapa: <p>{data.fase}</p>
      </h4>
      <h4>
        Equipo local: <p>{data.local}</p>
      </h4>
      <h4>
        Equipo visitante: <p>{data.visita}</p>
      </h4>
      <h4>
        Fecha: <p>{fecha}</p>
      </h4>
      <h4>
        Horario: <p>{horario} hs.</p>
      </h4>
      <h4>
        Ganador:<p>{data.ganador}</p>
      </h4>
    </div>
  );
}
