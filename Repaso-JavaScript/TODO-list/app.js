
// --- SELECCIÓN DE ELEMENTOS DEL DOM ---
const formularioTareas = document.querySelector('#formulario-nueva-tarea');
const inputTarea = document.querySelector('#input-nueva-tarea');
const listaTareas = document.querySelector('#lista-tareas');
const contadorTareas = document.querySelector('#contador-tareas');

// --- MANEJO DE ESTADO ---
let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

// --- FUNCIONES EXTRAS ---
const guardarTareas = () => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
};

const actualizarContador = () => {
    const tareasPendientes = tareas.filter(tarea => !tarea.completada).length;
    contadorTareas.textContent = `Tienes ${tareasPendientes} tarea(s) pendiente(s).`;
}

// --- FUNCIÓN PRINCIPAL ---
const renderizarTareas = () => {
    listaTareas.innerHTML = '';

    if (tareas.length === 0) {
        listaTareas.innerHTML = '<li class="sin-tareas"><p>¡Felicidades, no hay tareas pendientes!</p></li>';
        actualizarContador();
        return;
    }

    tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.setAttribute('data-id', tarea.id);

        if (tarea.completada) {
            li.classList.add('completada');
        }

        li.innerHTML = `
            <span>${tarea.text}</span>
            <button class="boton-borrar">X</button>
        `

        listaTareas.appendChild(li);
    });

    actualizarContador();
}

// --- MANEJO DE EVENTOS ---
const agregarTarea = (evento) => {
    evento.preventDefault();
    const textoTarea = inputTarea.value.trim();

    if (textoTarea === '') {
        alert('Por favor, escribe una tarea.');
        return;
    }

    const nuevaTarea = {
        id: Date.now(),
        text: textoTarea,
        completada: false,
    }

    tareas.unshift(nuevaTarea); // Esto añade la tarea al principio.

    guardarTareas();
    renderizarTareas();

    inputTarea.value = '';
}

const manejarClicLista = (evento) => {
    const elemento = evento.target;
    const li = elemento.closest('li')

    if (!li) return;

    const idTarea = Number(li.getAttribute('data-id'));

    if (elemento.classList.contains('boton-borrar')) {
        tareas = tareas.filter(tarea => tarea.id !== idTarea);
    }
    // } else {
    //     tareas = tareas.map(tarea =>
    //         tarea.id === idTarea
    //             ? { ...tarea, completada: !tarea.completada }
    //             : tarea
    //     )
    // }

    guardarTareas();
    renderizarTareas();
}

// INICIALIZACIÓN //

document.addEventListener('DOMContentLoaded', renderizarTareas);
formularioTareas.addEventListener('submit', agregarTarea);
listaTareas.addEventListener('click', manejarClicLista);