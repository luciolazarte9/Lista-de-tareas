const inputTarea = document.getElementById('tarea');
const btnAgregar = document.getElementById('agregarTarea');
const listaTareas = document.getElementById('listaTareas');

function agregarTarea() {
  const tarea = inputTarea.value;

  const nuevoElementoLista = document.createElement('li');
  nuevoElementoLista.innerHTML = tarea;
  nuevoElementoLista.className = 'mt-5'

  const btnEliminar = document.createElement('button');
  btnEliminar.innerHTML = 'Eliminar';
  btnEliminar.className = 'btn btn-primary mx-3 mt-1'
  btnEliminar.addEventListener('click', () => {
    nuevoElementoLista.remove();
  });  
  nuevoElementoLista.appendChild(btnEliminar);

  listaTareas.appendChild(nuevoElementoLista);

  inputTarea.value = '';
}

btnAgregar.addEventListener('click', agregarTarea);
