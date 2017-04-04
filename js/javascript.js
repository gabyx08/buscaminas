//bombas
var bombas = document.getElementsByClassName("bomba");
for (var i=0 ; i<bombas.length;i++){
  bombas[i].addEventListener("click",mostrarBomba);
}

function mostrarBomba(bomba){
  console.log(bomba);
  bomba.toElement.textContent= bomba.toElement.value;
  alert("Game Over");
  deshabilitarBotones();
}

function deshabilitarBotones(){
  var botones = document.getElementsByTagName("button");
  for (var i=0 ; i<botones.length - 1;i++){
    botones[i].disabled = true;
  }
}

//vacio - cambio de color
var vacios = document.getElementsByClassName("vacio");
for (var i=0 ; i<vacios.length;i++){
  vacios[i].addEventListener("click",cambiarColor);
}

function cambiarColor(vacio){
  console.log(vacio)
  vacio.toElement.style.background ="blue";
}

//mostrar numeros
var numeros = document.getElementsByClassName("num");
for (var i=0 ; i<numeros.length;i++){
  numeros[i].addEventListener("click",mostrar);
}

function mostrar(num){
console.log(num)
    num.toElement.textContent=num.toElement.value;
}

 //reiniciar
var reiniciar = document.getElementById("botonReiniciar");
reiniciar.addEventListener("click",reiniciarBuscaminas);

function reiniciarBuscaminas(){
  location.reload();
}
