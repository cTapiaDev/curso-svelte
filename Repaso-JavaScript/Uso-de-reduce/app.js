// Total de un carrito de Compras con .reduce()

// Nos permite obtener un único valor a través de "reducir" un arreglo.

const carrito = [
    { producto: 'Laptop', precio: 800000, cantidad: 1 },
    { producto: 'Mouse', precio: 25000, cantidad: 2 },
    { producto: 'Audífonos', precio: 60000, cantidad: 1 }
];

function calcularTotal(arrayCarrito) {
    // Tiene un valor inicial y afecta directamente a una función callback.
    return arrayCarrito.reduce((acumulador, item) => {
        const subtotal = item.precio * item.cantidad;
        return acumulador + subtotal;
    }, 0); // 0 es el valor inicial.
}

const totalCompra = calcularTotal(carrito);
console.log(`El total a pagar es: ${totalCompra}`);