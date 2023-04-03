  
//   // Definir una función para buscar juegos por año de lanzamiento
//   function buscarPorLanzamiento(lanzamiento) {
//     return juegosPS4.filter(juego => juego.lanzamiento === lanzamiento);
//   }
  
//   // Pedir al usuario que ingrese el año de lanzamiento del juego
//   let lanzamientoUsuario = prompt("Ingrese el año de lanzamiento del juego que desea cambiar:");
  
//   // Validar el año de lanzamiento ingresado por el usuario
//   while (isNaN(lanzamientoUsuario) || lanzamientoUsuario.trim() === "") {
//     lanzamientoUsuario = prompt("Ingrese un año de lanzamiento válido:");
//   }
  
//   // Convertir el año de lanzamiento a un número entero
//   lanzamientoUsuario = parseInt(lanzamientoUsuario);
  
//   // Buscar juegos con el mismo año de lanzamiento
//   let juegosCompatibles = buscarPorLanzamiento(lanzamientoUsuario);
  
//   // Mostrar una lista de juegos compatibles en un alert
//   let mensaje = "Juegos compatibles:\n";
//   juegosCompatibles.forEach(juego => mensaje += "- " + juego.nombre + "\n");
//   alert(mensaje);
  
//   // Pedir al usuario que seleccione un juego
//   let seleccionUsuario = prompt("Seleccione un juego para cambiar:");
  
//   // Buscar el juego seleccionado en el array
//   let juegoSeleccionado = juegosPS4.find(juego => juego.nombre === seleccionUsuario);
  
//   // Mostrar el costo del cambio en un alert
//   if (juegoSeleccionado) {
//     alert("El costo del cambio es $1000.");
//   } else {
//     alert("El juego seleccionado no está disponible para cambio.");
//   }
  
//   // Mostrar un mensaje de agradecimiento al usuario
//   alert("¡Gracias por elegirnos!");



//bienvenida

alert('bienvenido a Game store')
  
  // pedir al usuario el año de lanzamiento del juego
  const lanzamientoJuego = prompt('Ingrese el año de lanzamiento del juego que desea cambiar:');
  
  // filtrar los juegos por año de lanzamiento
  const juegosCompatibles = juegosPS4.filter(juego => juego.lanzamiento == lanzamientoJuego);
  
  // mostrar la lista de juegos compatibles
  let mensaje = 'Juegos compatibles:\n';
  juegosCompatibles.forEach((juego, index) => {
    mensaje += `${index + 1}. ${juego.nombre}\n`;
  });
  
  // pedir al usuario que seleccione un juego
  const seleccion = prompt(`${mensaje}Ingrese el número del juego que desea seleccionar:`);
  
  // acceder al objeto del juego seleccionado y mostrar el mensaje de costo
  const juegoSeleccionado = juegosCompatibles[seleccion - 1];
  alert(`El costo del cambio para ${juegoSeleccionado.nombre} es de $1000. ¡Gracias por elegirnos!`);