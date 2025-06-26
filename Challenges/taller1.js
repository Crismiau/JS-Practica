// ## Parte 1: Arrays orientados al DOM

// 1. Tienes un array de colores. Recorre ese array y crea un mensaje por cada color en formato: `"El color X es muy bonito"`. Imagina que luego mostrarás cada mensaje en un `<div>`.

let colores = ["Amarillo", "Verde", "Negro", "Blanco"];
let coloresReales = ["yellow", "green", "black", "white"];

let contenedor = document.getElementById("contenedor");

colores.forEach((color, index) => {
  contenedor.innerHTML += `El color <p style="color: ${coloresReales[index]}">${color}</p>  es muy bonito`;
  contenedor.innerHTML += `<br>`;
});

let frutas = ["Banano", "Uva", "Manzana", "Pera"];
let coloresFrutas = ["yellow", "purple", "red", "green"];

let contenedor2 = document.getElementById("contenedor2");

frutas.forEach((fruta, index) => {
  contenedor2.innerHTML += `La fruta <span style="color: ${coloresFrutas[index]}">${fruta}</span> es muy rica`;
  contenedor2.innerHTML += `<br>`;
});

let juguetes = ["Carro", "Dinosuario", "Elefante"];
let contenedor3 = document.getElementById("contenedor3");

juguetes.forEach((juguete) => {
  contenedor3.innerHTML += `${juguete} <br>`;
});

// 2. A partir de un array de frases motivadoras, crea un nuevo array donde cada frase esté envuelta en una etiqueta HTML (por ejemplo: `<p>`). Esto te ayudará a simular contenido que luego iría al DOM.

let frases = [
  "¡Tú puedes!",
  "Sigue adelante.",
  "Nunca te rindas.",
  "Cree en ti.",
  "Eres capaz.",
];
let contenedor4 = document.getElementById("contenedor4");

frases.forEach((frase) => {
  contenedor4.innerHTML += `<p> ${frase} </p>`;
});

// 3. Recorre un array de números y devuelve otro array de `<li>` con cada número. Piensa que será una lista HTML para mostrar luego en pantalla.

let numeros = [1, 2, 3, 4, 5, 6];
let contenedor5 = document.getElementById("contenedor5");

contenedor5.innerHTML = `<ul>`;

numeros.forEach((numero) => {
  contenedor5.innerHTML += `<li>${numero}</li>`;
});

contenedor5.innerHTML = `</ul>`;

// ## Parte 2: Objetos pensados para mostrarse

// 1. Dado un objeto `persona` con `nombre`, `edad` y `ocupación`, construye un string en formato HTML para mostrar esa información como una tarjeta.

let persona = {
  nombre: "Cristian",
  edad: 18,
  ocupacion: "Empresario",
  ubicacion: "Medellín",
};
let contenedor6 = document.getElementById("contenedor6");

for (let info in persona) {
  contenedor6.innerHTML = `Hola soy ${persona.nombre} 🪄, tengo ${persona.edad} soy ${persona.ocupacion} 🐕 y vivo en ${persona.ubicacion} 🚀</p>`;
}

// 2. A partir de un objeto que representa una canción (`titulo`, `artista`, `duracion`), crea una estructura HTML en formato `<div>` que contenga esa información. Piensa cómo inyectarías eso al DOM.

let cancion = {
  titulo: "Tropicoqueta",
  artista: "Karol g",
  duracion: "2:55",
};
let contenedor7 = document.getElementById("contenedor7");
for (let info in cancion) {
  contenedor7.innerHTML = `<div> La canción es <span style="color: white">${cancion.titulo} </span> de la artista <span style="color: pink">${cancion.artista}</span> Y la canción dura aproximadamente ${cancion.duracion}</div>`;
}

// 3. Dado un objeto con múltiples propiedades (como `producto.nombre`, `producto.precio`, `producto.stock`), construye una lista `<ul>` donde cada propiedad sea un `<li>` con clave y valor.

let producto = {
  nombre: "Aromatel",
  precio: 2500,
  stock: 29,
};
let contenedor8 = document.getElementById("contenedor8");

contenedor8.innerHTML = `<ul>`;

for (let item in producto) {
  contenedor8.innerHTML = `<li> El producto es: ${producto.nombre} 🧂</li> <li> Precio: 💸${producto.precio} </li> <li>Y el stock es de: ${producto.stock} </li>`;
}

// Parte 3: Listas de Objetos enfocadas en visualización

// 1. Recorre un array de usuarios (con `nombre` y `correo`) y crea un array de etiquetas `<div>` que incluyan esa información formateada como tarjeta de contacto.

let usuarios = [
  { nombre: "Cristian", correo: "Heycristian26@gmail.com" },
  { nombre: "Pepe", correo: "Oggyteamu123@gmail.com" },
];
let contenedor9 = document.getElementById("contenedor9");

usuarios.forEach((usuario) => {
  contenedor9.innerHTML += `<h2>Nombre:</h2> ${usuario.nombre}
      <h2>Correo:</h2> ${usuario.correo}</p>`;
});

// 2. Dado un array de libros con `titulo`, `autor` y `año`, transforma cada uno en una cadena de texto con formato: `"Título (Año) - Autor"`. Luego imagina que cada una irá dentro de un `<li>`.

let libros = [
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel Garcia Marquez",
    año: 1967,
  },
  {
    titulo: "La insoportable levedad del ser",
    autor: "Milan Kundera",
    año: 1984,
  },
  { titulo: "Akelarre", autor: "Mario mendoza", año: 1967 },
];

let contenedor10 = document.getElementById("contenedor10");

let listaLibros = libros.map((libro) => {
  contenedor10.innerHTML += `<li> ${libro.titulo}, (${libro.año}) - ${libro.autor}</li>`;
});

// 3. Tienes una lista de tareas (con `descripcion` y `completada`). Crea una función que genere una estructura HTML diferente si la tarea está completa o pendiente. Por ejemplo: mostrar un ✅ o ❌ antes del texto.

let tareas = [
  { descripcion: "Hacer la cama", estado: true },
  { descripcion: "Ir al gym", estado: true },
  { descripcion: "Ir a disneyland", estado: false },
];
let contenedor11 = document.getElementById("contenedor11");

function calificarTarea(listaTareas) {
  return listaTareas.map((tarea) => {
    let simbolo = tarea.estado ? "✅" : "❌";
    contenedor11.innerHTML += `<li> ${simbolo}: ${tarea.descripcion} </li>`;
  });
}
calificarTarea(tareas);
