let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
let contenedor1 = document.getElementById("contenedor1");
mostrarTareas();

function agregarTarea() {
  let input = document.getElementById("nuevaTarea");
  let texto = input.value.trim();

  if (texto === "") return; // aca si no escribe nada, que no haga nada (Return)

  tareas.push(texto); // mete la tarea en la libreta que tenemos en el localstorage

  localStorage.setItem("tareas", JSON.stringify(tareas)); // aqui estamos convirtiendo todo en un string con el JSON.stringify
  input.value = ""; // aqui limpia el cuadro
  mostrarTareas(); // aqui volvemos a llamar a la funcion para que vuelva a mostrar todo
}

function mostrarTareas() {
  contenedor1.innerHTML = "<ul>";

  tareas.forEach((tarea, index) => {
    contenedor1.innerHTML += `<li>${tarea} <button onclick="eliminarTarea(${index})">❌</button></li>`;
  });

  contenedor1.innerHTML += "</ul>";
}

function eliminarTarea(indice) {
  tareas.splice(indice, 1); // borra una tarea
  localStorage.setItem("tareas", JSON.stringify(tareas)); // actualiza el objeto
  mostrarTareas();
}
