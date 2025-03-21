// // Declaración de función

function loguear() {
        let identificar = true;
        let intentos = 1;

// // Declaración de variables y constantes

const submitDatos = (evento) => {
    evento.preventDefault ();

console.log(formulario["nombre"].value);
}

const formulario = document.getElementById('formulario');

formulario.addEventListener("submit",submitDatos);

const usuario = {
    nombre: formulario["nombre"].value,
    apellido: formulario["apellido"].value,
    Nacimiento: formulario["nacimiento"].value,
    localidad: formulario["localidad"].value,
    domicilio: formulario["domicilio"].value, 
}

console.log (usuario);

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
let usuarios = ["Amilcar Unsain", "Nicolás Unsain", "Ezequiel Unsain", "José Luis Unsain","Gabriel Gudiño", "Silvana Rodrígez", "Flavio Kuhn", "Gonzalo Kuhn"];
console.log (usuarios);

for (let i = 0; i < usuarios.length; i++){
        console.log ("Este usuario tiene inhabilitado el carnet de conducir por infracciones de tránsito hasta el 31 de diciembre de 2025");
    }

// Declaración funciones de orden superior

const usuariosPorCadaUno = usuarios

function porCadaUno (array, fn) {
    for(let i=0; i<array.length; i++){
        fn(array[i])
    }
}

porCadaUno(usuarios, console.log)

const usuariosProhibidos = usuarios.filter(function(usuarios) {
    return usuarios.includes('Unsain');
});

console.log(usuariosProhibidos);

// Uso del método sort

const nombres = usuarios
nombres.sort((a,b)=> a.localeCompare(b));
console.log(nombres);

// Acceso a DOM y utilización de eventos

function cambiarTexto1() {
    let subtitulo1 = document.getElementById('subtitulo1')
    subtitulo1.textContent = "Por favor, completá los siguientes datos para gestionar tu licencia de conducir desde cero";
}
function cambiarTexto2() {
    let subtitulo2 = document.getElementById('subtitulo2')
    subtitulo2.textContent = "Por favor, completá los siguientes datos para renovar tu licencia de conducir"
}