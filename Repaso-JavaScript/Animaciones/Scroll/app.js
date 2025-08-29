
// --- Observador ---
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {

        console.log(entrada);

        if (entrada.isIntersecting) {
            entrada.target.classList.add('mostrar');
        } else {
            entrada.target.classList.remove('mostrar');
        }
    })
});

const elementosOcultos = document.querySelectorAll('.texto-oculto');

console.log(elementosOcultos)

elementosOcultos.forEach(el => observador.observe(el));