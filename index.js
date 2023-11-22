// Importar funciones
import { colorGenerator, limpiarHTML } from './helpers.js';

// Variables Globales
const btnNewGame = document.querySelector('#nuevo-juego');
const btnLevelEasy = document.querySelector('#nivel-juego-facil');
const btnLevelHard = document.querySelector('#nivel-juego-dificil');

document.addEventListener('DOMContentLoaded', () => {
  // Pordefecto el juego comienza en nivel facil
  let level = 3;

  btnLevelEasy.addEventListener('click', (e) => {
    e.target.classList.add('active-level');
    btnLevelHard.classList.remove('active-level');
    level = 3;
  });

  btnLevelHard.addEventListener('click', (e) => {
    e.target.classList.add('active-level');
    btnLevelEasy.classList.remove('active-level');
    level = 6;
  });

  // Event listeners
  btnNewGame.addEventListener('click', () => {

    // Resetear el juego
    limpiarHTML();

    // Comprobar nivel juego
    if (level === undefined) {
      level = 3;
    }

    // Arrancar el nuevo juego
    const coloresJuego = startGame(level);

    // Crear los contenedores de colores
    createColorElements(coloresJuego);

    // Una vez creados los colores al comenzar juego, seteamos un listener
    const colorDiv = document.querySelectorAll('.colorDiv');
    colorDiv.forEach(div => {
      div.addEventListener('click', () => {
        const colorJuego = document.querySelector('#color-juego');

        // Al hacer click, comprobar si el color es correcto
        const feedback = checkColor(div.style.backgroundColor, colorJuego.textContent);

        // Checkear si el resultado es correcto o no
        if (feedback === false) {
          // Eliminar el contenedor incorrecto con javascript -> div.remove();
          // Eliminar el contenedor incorrecto con CSS y mantenerlo en su lugar -> div.style.opacity = '0';
          // Eliminar el contenedor incorrecto con CSS y quitarlo de su lugar -> div.style.display = 'none';
        }
        /*
          condicion de que si es false, el contenedor debe desaparecer
        */
      })
    })
  })
})

// Funciones del juego
function startGame(dificultad) {
  // Generar colores
  const gameColors = colorGenerator(dificultad);

  // Generar el color de la solución
  const numSolucion = Math.floor(Math.random() * dificultad);
  const solucion = gameColors[numSolucion]
  // Imprimir en el HTML el valor de la solución
  const solucionHTML = document.querySelector('#color-juego')
  solucionHTML.textContent = solucion;

  return gameColors;
}

function createColorElements(colores) {
  const colorContainer = document.getElementById('colors-container');

  colores.forEach((color) => {
    const div = document.createElement('DIV');
    div.classList.add('colorDiv');
    div.style.backgroundColor = color;

    colorContainer.appendChild(div);
  });
}

function checkColor(color, colorSolucion) {
  const feedback = document.querySelector('#feedback-resultado');
  let respuesta;
  if (color === colorSolucion) {
    feedback.textContent = 'Correcto!'
    respuesta = true;
  } else {
    feedback.textContent = 'Incorrecto!'
    respuesta = false;
  }
  return respuesta;
}