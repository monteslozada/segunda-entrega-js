alert('Bienvenido a Game Store ')

let lanzamientoIngresado;

while (isNaN(lanzamientoIngresado)) {
  lanzamientoIngresado = parseInt(prompt("Ingrese el año de lanzamiento del juego que desea cambiar:"));
}

let juegosCompatibles = juegosPS4.filter((juego) => juego.lanzamiento === lanzamientoIngresado);

while (juegosCompatibles.length === 0) {
  alert("Lo siento, no hay juegos compatibles.");
  lanzamientoIngresado = parseInt(prompt("Ingrese el año de lanzamiento de su juego:"));
  juegosCompatibles = juegosPS4.filter((juego) => juego.lanzamiento === lanzamientoIngresado);
}

const listaJuegos = juegosCompatibles.map((juego, index) => `${index + 1}. ${juego.nombre}`).join("\n");
const juegoElegido = parseInt(prompt(`Los juegos compatibles con el año de lanzamiento ingresado son:\n${listaJuegos}\nElija un número:`));

while (isNaN(juegoElegido) || juegoElegido < 1 || juegoElegido > juegosCompatibles.length) {
  alert("El número ingresado no es válido.");
  juegoElegido = parseInt(prompt(`Los juegos compatibles con el año de lanzamiento ingresado son:\n${listaJuegos}\nElija un número:`));
}

const juegoSeleccionado = juegosCompatibles[juegoElegido - 1];
alert(`El juego seleccionado es ${juegoSeleccionado.nombre}.\nEl costo del cambio es $1000.`);