
document.addEventListener('DOMContentLoaded', () => {

    // --- BASE DE DATOS LOCAL --- 
    const baseDeDatos = [
        { id: 1, nombre: 'Laptop Gamer', precio: 1200, imagen: 'https://i.pinimg.com/1200x/df/8b/c8/df8bc81afb3df8bafb18e5b11a02267b.jpg' },
        { id: 2, nombre: 'Mouse Vertical', precio: 85, imagen: 'https://i.pinimg.com/1200x/19/46/18/194618a7e53c2c4df1e5d95665b249e2.jpg' },
        { id: 3, nombre: 'Teclado Mecánico', precio: 150, imagen: 'https://i.pinimg.com/736x/b1/fa/5c/b1fa5cda298ce9933e9a85430fefa6aa.jpg' },
        { id: 4, nombre: 'Monitor Curvo 27', precio: 450, imagen: 'https://i.pinimg.com/736x/d4/41/5f/d4415f9441ed34c12abbb3524efaf27d.jpg' }
    ];

    // --- LISTA DEL CARRITO ---
    let carrito = [];

    // --- ELEMENTOS DEL DOM ---
    const contenedorProductos = document.querySelector('#contenedor-productos');
    const mensajeCarritoVacio = document.querySelector('#carrito-vacio-mensaje');
    const listaCarrito = document.querySelector('#lista-carrito');
    const totalCarrito = document.querySelector('#total-carrito');
    const botonVaciarCarrito = document.querySelector('#boton-vaciar-carrito');

    // --- FUNCIONES ---
    function renderizarProductos() {
        baseDeDatos.forEach((producto) => {
            const tarjetaProducto = document.createElement('div');
            tarjetaProducto.classList.add('tarjeta-producto');
            tarjetaProducto.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="info-producto">
                    <h3>${producto.nombre}</h3>
                    <p class="precio">$${producto.precio}</p>
                    <button class="boton-agregar" data-id="${producto.id}">Añadir al Carrito</button>
                </div>
            `;
            contenedorProductos.appendChild(tarjetaProducto);
        })
    }

    function renderizarCarrito() {
        listaCarrito.innerHTML = '';

        mensajeCarritoVacio.style.display = carrito.length === 0 ? 'block' : 'none';
        botonVaciarCarrito.style.display = carrito.length === 0 ? 'none' : 'block';

        const carritoSinDuplicados = [...new Set(carrito)];

        carritoSinDuplicados.forEach(idProducto => {
            const producto = baseDeDatos.find(p => p.id === idProducto);
            const cantidad = carrito.filter(pId => pId === idProducto).length;

            const li = document.createElement('li');
            li.innerHTML = `<span>${cantidad} x ${producto.nombre}</span> <span>$${(producto.precio * cantidad).toFixed(2)}</span>`;
            listaCarrito.appendChild(li);
        });

        const total = carrito.reduce((acumulador, idProducto) => {
            const producto = baseDeDatos.find(p => p.id === idProducto);
            return acumulador + producto.precio;
        }, 0);

        totalCarrito.textContent = `$${total.toFixed(2)}`
    }

    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
    }

    // --- LOCALSTORAGE ---
    function guardarCarritoEnLocalStorage() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDesdeLocalStorage() {
        const carritoGuardado = localStorage.getItem('carrito');
        if (carritoGuardado) {
            carrito = JSON.parse(carritoGuardado);
        } 
    }

    // --- MANEJO DE EVENTOS ---
    function agregarProductoAlCarrito(evento) {
        if (evento.target.classList.contains('boton-agregar')) {
            const idProductoSeleccionado = Number(evento.target.getAttribute('data-id'));
            carrito.push(idProductoSeleccionado);
            renderizarCarrito();
            guardarCarritoEnLocalStorage();
        }
    }

    // --- INICIALIZAR ---
    cargarCarritoDesdeLocalStorage();
    renderizarProductos();
    renderizarCarrito();

    // --- LISTENERS ---
    contenedorProductos.addEventListener('click', agregarProductoAlCarrito);
    botonVaciarCarrito.addEventListener('click', vaciarCarrito);
});