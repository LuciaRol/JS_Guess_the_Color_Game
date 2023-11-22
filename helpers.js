const colorContainer = document.querySelector('#colors-container');

function colorGenerator(dificultad) {
  let color = [];

  // Generar colores aleatorios
  for (let i = 0; i < dificultad; i++) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    color.push(`rgb(${r}, ${g}, ${b})`);
  }
  return color;
}

// Funcion setear y limpiar HTML
function limpiarHTML() {
  while (colorContainer.firstChild) {
    colorContainer.removeChild(colorContainer.firstChild);
  }
}

export {
  colorGenerator,
  limpiarHTML
};

