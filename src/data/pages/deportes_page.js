const deportes = [
    {
        deporte: "Fútbol",
        descripcion: "Deporte de equipo donde se busca anotar goles con un balón.",
        requerido: "Balón, cancha, porterías, espinilleras y tenis con buen agarre.",
        ranking: 5
    },
    {
        deporte: "Natación",
        descripcion: "Actividad acuática que mejora resistencia, técnica y respiración.",
        requerido: "Piscina, traje de baño, gorra y lentes de natación.",
        ranking: 4
    },
    {
        deporte: "Baloncesto",
        descripcion: "Juego de conjunto donde se encesta un balón en el aro rival.",
        requerido: "Balón, aro, cancha y calzado deportivo con soporte.",
        ranking: 4
    },
    {
        deporte: "Atletismo",
        descripcion: "Conjunto de pruebas de velocidad, salto y resistencia física.",
        requerido: "Pista, ropa ligera, tenis y cronómetro para entrenamiento.",
        ranking: 3
    },
    {
        deporte: "Yoga",
        descripcion: "Práctica de posturas y respiración para equilibrio y flexibilidad.",
        requerido: "Mat o tapete, ropa cómoda y un espacio tranquilo.",
        ranking: 2
    }
];

const tablaParcialPreview = `<section class="grid">
  <div class="row">
    <div class="col-12">
      <h2>Tabla de Deportes</h2>
      <table class="table deportes-table">
        <thead>
          <tr>
            <th>Deporte</th>
            <th>Descripción</th>
            <th>¿Qué se requiere?</th>
            <th>Ranking</th>
          </tr>
        </thead>
        <tbody>
          {{#each deportes}}
          <tr>
            <td>{{deporte}}</td>
            <td>{{descripcion}}</td>
            <td>{{requerido}}</td>
            <td>{{ranking}}</td>
          </tr>
          {{/each}}
        </tbody>
      </table>
    </div>
  </div>
</section>`;

export default {
    deportes,
    deportes_json_preview: JSON.stringify({ deportes }, null, 2),
    tabla_parcial_preview: tablaParcialPreview
};