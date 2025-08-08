// --- Arrays (arreglos) ---

// Un array se crea con corchetes []
// Cada elemento se separa por una coma.
const tareas = [
    "Estudiar JavaScript", // 0
    "Hacer el desafío práctico", // 1
    "Descansar 15 minutos", // 2
    "Revisar la clase anterior" // 3
];
// En los arrays siempre el primer elemento está en la posición 0
// Y, el último elemento tiene una posición del total - 1
// Por ejemplo, si tengo 4 elementos, la última posición es 3

console.log(tareas.length); // Esto me muestra la cantidad de elementos que tiene un array

console.log("La primera tarea es:", tareas[0]);
console.log("La tercera tarea es:", tareas[2]);


// Obtener elementos de un Array a través de un Bucle

for (let i = 0; i < tareas.length; i++) {
    console.log((i + 1) + ". " + tareas[i]);
}


// Definir un Objeto

// El objeto se crea con llaves {}
// La estructura es clave: valor.
// La clave de los objetos no lleva "" -> "nombre": "Audífonos..."
const producto = {
    nombre: "Audífonos Gamer Pro",
    precio: 7500,
    enStock: true,
    categorias: [
        "Audio", // 0
        "Gamer", // 1
        "PC" // 2
    ],
    fabricante: {
        nombre: "TechMasters",
        pais: "Chile"
    },
}

console.log("Producto:", producto.nombre);
console.log("Precio:", producto.precio);

console.log("Primera categoría:", producto.categorias[0]);

console.log("País del fabricante:", producto.fabricante.pais);


// --- Funciones con Objetos - "Simulador de Compra" ---

// Nuestra función recibe el objeto de un producto como parámetro = item.
function procesarCompra(item) {
    console.log("Iniciando proceso de compra para:", item.nombre);

    if (item.enStock === true) {
        console.log("¡Producto disponible!");
        console.log("El precio total es: $" + item.precio);
        console.log("Compra realizada con éxito. ¡Gracias!");
    } else {
        console.log("Lo sentimos, este producto está agotado.");
    }
}

// Llamamos a la función y le pasamos el objeto 'producto" como argumento.
procesarCompra(producto);

producto.enStock = false;

console.log("--- Intentando comprar de nuevo ---");
procesarCompra(producto);