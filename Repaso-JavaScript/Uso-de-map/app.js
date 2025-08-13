// Actualizar los Precios con .map()

// Es un método que crea un nuevo array (arreglo) aplicando una función sobre cada elemento del array original.

const productos = [
    { id: 1, nombre: 'Teclado', precio: 100 },
    { id: 2, nombre: 'Mouse', precio: 50 },
    { id: 3, nombre: 'Monitor', precio: 300 }
];

function aumentarPrecios(arrayProductos) {
    // .map() recorre cada producto que tenga el arreglo. Y devuelve un nuevo objeto en su lugar.
    return arrayProductos.map(producto => {
        // Creamos un nuevo objeto en base al original (sin modificarlo).
        // A este proceso se le conoce como: Inmutabilidad.
        return {
            ...producto, // Copiamos las propiedades del producto original
            precio: producto.precio *1.20 // Sobrescribimos solo el dato de precio.
        };
    });
}

const productosConAumento = aumentarPrecios(productos);
console.log("Productos originales:", productos);
console.log("Productos con aumento:", productosConAumento);