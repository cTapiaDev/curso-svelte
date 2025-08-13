// Filtro de Tareas con .filter()

// Crea un nuevo array (arreglo) solo con los elementos que pasa una prueba lógica.

const tareas = [
    { id: 1, descripcion: 'Estudiar Svelte', completada: true },
    { id: 2, descripcion: 'Hacer el quiz', completada: false },
    { id: 3, descripcion: 'Subir el proyecto', completada: false },
    { id: 4, descripcion: 'Repasar promesas', completada: true }
];

function obtenerTareasCompletadas(arrayTareas) {
    return arrayTareas.filter(tarea => tarea.completada === true);
}

const tareasCompletadas = obtenerTareasCompletadas(tareas);
console.log('Tareas completadas:', tareasCompletadas);