//querySelector

const heading = document.querySelector('#heading') //retorna 0 o 1 elemento
// heading.textContent = 'Aprendiendo JS'
heading.classList = 'nueva_clase'


//querySelectorAll

// const enlaces = document.querySelectorAll('.navegacion a') //retorna de 0 a todos los que concuerden con el selector
//console.log(enlaces);
// enlaces[0].textContent = 'Nuevo Enlace' //Cambia el contenido del elemento
// enlaces[0].href = 'https://google.com' //Se le cambia el destino del enlace
// enlaces[0].classList.add('nueva_clase') //Agrega una clase al elemento
// enlaces[0].classList.remove('navegacion__enlace') //Elimina una clase del elemento

//getElementById

const heading2 = document.getElementById('heading')
console.log(heading2)

// Generar un nuevo enlace

const nuevoEnlace = document.createElement('A')

// Agregamos el href del nuevo enlace

nuevoEnlace.href = 'nuevo-enlace.html';

// Agregamos el texto que muestra el enlace

nuevoEnlace.textContent = 'Tienda Virtual';

// Agregamos la clase

nuevoEnlace.classList.add('navegacion__enlace');

// Agregamos el enlace para que aparezca en la pagina web o documento

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

//eventos

console.log(1);


window.addEventListener('load', function(){ //load espera que el JS y los archivos que dependen del HTML esten listos
    console.log(2);
})

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){ //Solo espera por el HTML, no por CSS o imagenes
    console.log(4);
})


console.log(5);

// window.onscroll = function(){
//     console.log('scroling...')

//     //Seleccionar elementos y asociarle un evento

//     const btnEnviar = document.querySelector('.boton--primario')
//     btnEnviar.addEventListener('click', function(e){ //se registra el evento dentro del parametro de la funcion
//         console.log(e);
//         e.preventDefault(); //Evita que el evento haga su accion por defecto (en este caso enviar el formulario)
//         console.log('enviando formulario')
//     }) 
// }

//Eventos de los input y textarea
const datos = {
    nombre: '',
    email: '',   //Objeto que se ira llenando con los datos que el usuario coloque en el formulario. Las propiedades deben tener los mismos nombres de los ID de los elementos registrados en el HTML
    mensaje: ''

}


const nombre = document.querySelector('#nombre') //Se seleccionan los elementos que se quieren validar a traves de su ID
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')

nombre.addEventListener('input', leerTexto) //Se registra el evento que se quiere recojer de ese elemento
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)

function leerTexto(e){
    //console.log(e.target.value)

    datos[e.target.id] = e.target.value //Con esta sintaxis se llenan las propiedades del objeto segun corresponda mientras el usuario va rellenando el formulario

    console.log(datos)
}

//El Evento submit para enviar los formularios

const formulario = document.querySelector('.formulario')
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    console.log('Enviando Formulario')
});