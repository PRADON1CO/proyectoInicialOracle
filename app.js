const numeroSecreto = 6;
let nuemeroUsuario = prompt("Me puedes indicar un número por favor: ");

console.log(nuemeroUsuario);

const mensajeElemento = document.getElementById("mensaje");

if (nuemeroUsuario == numeroSecreto) {
  mensajeElemento.innerHTML = `
        <h1><span class="container__texto-azul">Correcto!</span></h1>
        <h2>Descubriste el número secreto!</h2>
    `;
} else {
  mensajeElemento.innerHTML = `
        <h1 class="container__texto-azul">Lo siento</h1>
        <h2>El número secreto era ${numeroSecreto}</h2>
    `;
}
