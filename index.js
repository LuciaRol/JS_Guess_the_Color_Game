window.onload = () =>{
    console.log("La página se ha cargado con éxito.");

    //generaAleatorios();
    //colorMain();

}


/* function generaAleatorios(){
    const titulo = document.getElementById("titulo");

    titulo.addEventListener("click", (event) =>{
        let arrayNumeros = [];

        for (var i = 0; i < 3; i++) {
          arrayNumeros.push(Math.floor(Math.random()*1000));
        }
        event.target.style.bacgroundColor = titulo;
        //alert(arrayNumeros)
    })
   
    
}

function colorMain() {
    var main = document.getElementById("main");
    main.style.backgroundColor = "grey";
    } */


    
// GENERA ARRAY CON COLORES RGB ALEATORIOS
var colores = []
for (var i = 0; i < 3; i++) {
    colores.push(Math.floor(Math.random()*255));
  }


// ASIGNA A LOS CUADRADOS UN COLOR RGB ALEATORIO
var cuadrados = document.querySelectorAll(".container");

for(var i=0 ; i<squares.length ; i++){
    cuadrados[i].style.backgroundColor = colores[i];
}

// GENERA UNA SOLUCIÓN ALEATORIA
var colorEscogido = colores[3];
var solucion = document.querySelectorAll("#solucion");




 













