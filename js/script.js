// // Declaración de función

function loguear() {
        let identificar = true;
        let intentos = 1;

// // Declaración de variables y constantes

const nombreUsuario = prompt("Ingresá tu nombre y apellido");
let edadUsuario = prompt("Ingresá tu edad ", 21);
confirm (`¿Estás seguro que tienes ${edadUsuario} años`)

// Declaración de condicionales

if (edadUsuario >= 21) {
    console.log ("¡Bienvenido! Completá los siguientes datos para continuar");
    alert(`Bienvenido ${nombreUsuario} al sitio oficial del Gobierno de Entre Ríos para tramitar tu carnet de conductor profesional`)
}   else if (edadUsuario < 21) {
    console.log ("Lo sentimos, no tienes la edad suficiente para rendir el carnet de conductor profesional");
    alert ("No tienes la edad suficiente para obtener el carnet de conducor profesional. ¡Te esperamos cuando cuentes con este requisito!")
 }
}

loguear();


// Declaración de array
let usuarios = ["Amilcar Unsain", "Nicolás Unsain", "Ezequiel Unsain", "José Luis Unsain"];
console.log (usuarios);

for (let i = 0; i < usuarios.length; i++){
        console.log ("Este usuario tiene inhabilitado el carnet de conducir por infracciones de tránsito hasta el 31 de diciembre de 2025");
    }