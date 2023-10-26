// DECLARACIÓN DE VARIABLES GLOBALES 
const colorJuego = document.querySelector('#color-juego');
const btnNuevoJuego = document.querySelector('#nuevo-juego');
const btnDificultadJuego = document.querySelector('#nivel-juego');

window.onload = () =>{
    console.log("La página se ha cargado con éxito.");

     // EVENT LISTENERS

  btnNewGame.addEventListener('click', function () {
    // PARA ARRANCAR EL JUEGO
    function empezarJuego(dificultad) {
      const coloresJuego = generadorColor(dificultad);
      console.log(coloresJuego);
    }
    empezarJuego(3);

  })

  btnGameLevel.addEventListener('click', function () {
    
  })


}

// GENERA ARRAY CON COLORES RGB ALEATORIOS
function generadorColor(dificultad) {
    let color = [];
  
    for (let i = 0; i < dificultad; i++) {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
  
      color.push(`rgb(${r},${g},${b})`);
    }
  
    return color;
  }


// ASIGNA A LOS CUADRADOS UN COLOR RGB ALEATORIO
var cuadrados = document.querySelectorAll(".cuadrado");

for(var i=0 ; i<squares.length ; i++){
    cuadrados[i].style.backgroundColor = colores[i];
}

// GENERA UNA SOLUCIÓN ALEATORIA
var colorEscogido = generadorColor();
var solucion = document.querySelectorAll("#color-juego");

document.getElementById("#color-juego").innerHTML = colorEscogido;



 













