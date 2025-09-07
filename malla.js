const materias = [
  // ------------------ 1er Semestre ------------------
  { nombre: "Cuestión Social", semestre: "1er Semestre", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Problema del Desarrollo", semestre: "1er Semestre", creditos: 8, nota: "", estado: "Pendiente" },
  { nombre: "Principios de Economía", semestre: "1er Semestre", creditos: 8, nota: "", estado: "Pendiente" },
  { nombre: "Matemática", semestre: "1er Semestre", creditos: 8, nota: "", estado: "Pendiente" },
  { nombre: "Introducción al Trabajo Social", semestre: "1er Semestre", creditos: 6, nota: "", estado: "Pendiente" },

  // ------------------ 2do Semestre ------------------
  { nombre: "Sociedad moderna y desigualdades sociales", semestre: "2do Semestre", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Poder, estado y sistema político", semestre: "2do Semestre", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Estadística social", semestre: "2do Semestre", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Metodología de la investigación", semestre: "2do Semestre", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Introducción a la Comunicación Educativa Comunitaria", semestre: "2do Semestre", creditos: 6, nota: "", estado: "Pendiente" },

  // ------------------ 3er Semestre ------------------
  { nombre: "Historia contemporánea de América Latina", semestre: "3er Semestre", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Brasil: Cultura, Política y Sociedad", semestre: "3er Semestre", creditos: 6, nota: "", estado: "Pendiente" },

  // ------------------ 4to Semestre ------------------
  { nombre: "Seminario multidisciplinario", semestre: "4to Semestre", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Psicología Social", semestre: "4to Semestre", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Género y Desigualdades", semestre: "4to Semestre", creditos: 6, nota: "", estado: "Pendiente" },

  // ------------------ Materias Ciclo Avanzado ------------------
  // 3er Semestre Avanzado
  { nombre: "Planificación y gestión I", semestre: "3er Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Metodología cuantitativa I", semestre: "3er Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Metodología cualitativa I", semestre: "3er Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },

  // 4to Semestre Avanzado
  { nombre: "Trabajo Social I", semestre: "4to Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Introducción a Proyectos Integrales", semestre: "4to Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Laboratorio", semestre: "4to Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Planificación y gestión II", semestre: "4to Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Teorías sociales I", semestre: "4to Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Historia universal contemporánea", semestre: "4to Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },

  // 5to Semestre Avanzado
  { nombre: "Trabajo Social II", semestre: "5to Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Proyectos Integrales I", semestre: "5to Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Políticas sociales", semestre: "5to Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Psicología", semestre: "5to Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Teorías sociales II", semestre: "5to Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },

  // 6to Semestre Avanzado
  { nombre: "Trabajo Social III", semestre: "6to Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Proyectos Integrales I", semestre: "6to Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Psicología social", semestre: "6to Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Antropología de las sociedades contemporáneas", semestre: "6to Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Indicadores de desarrollo (optativa)", semestre: "6to Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Ética filosófica", semestre: "6to Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },

  // 7mo Semestre Avanzado
  { nombre: "Trabajo Social IV", semestre: "7mo Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Proyectos Integrales II", semestre: "7mo Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Políticas de vivienda en Uruguay", semestre: "7mo Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Saberes Profesionales (optativa)", semestre: "7mo Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Derecho Social", semestre: "7mo Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Taller de Investigación", semestre: "7mo Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Aportes filosóficos (optativa)", semestre: "7mo Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Historia del Uruguay Contemporáneo", semestre: "7mo Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },

  // 8vo Semestre Avanzado
  { nombre: "Proyectos Integrales II", semestre: "8vo Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Sexualidad", semestre: "8vo Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Optativa", semestre: "8vo Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" },
  { nombre: "Epistemología", semestre: "8vo Semestre Ciclo Avanzado", creditos: 6, nota: "", estado: "Pendiente" }
];
Luego agregaremos todas las demás materias
];

function renderMalla() {
  const tbody = document.querySelector("#malla tbody");
  tbody.innerHTML = "";
  materias.forEach((m, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${m.nombre}</td>
      <td>${m.semestre}</td>
      <td>${m.creditos}</td>
      <td><input type="number" value="${m.nota}" onchange="updateNota(${i}, this.value)" /></td>
      <td><button onclick="cambiarEstado(${i})">${m.estado}</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function updateNota(index, value) {
  materias[index].nota = value;
}

const estados = ["Pendiente", "En curso", "Aprobada"];
function cambiarEstado(index) {
  const estadoActual = materias[index].estado;
  const nuevo = estados[(estados.indexOf(estadoActual)+1) % estados.length];
  materias[index].estado = nuevo;
  renderMalla();
}

renderMalla();
