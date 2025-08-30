const barraProgreso = document.querySelector('#barra-progreso');

function actualizarBarraDeProgreso() {

    const scrollActual = document.documentElement.scrollTop || document.body.scrollTop;
    const alturaTotal = document.documentElement.scrollHeight;
    const alturaVisible = document.documentElement.clientHeight;

    const porcentaje = (scrollActual / (alturaTotal - alturaVisible)) * 100;

    barraProgreso.style.width = `${porcentaje}%`;
}

window.addEventListener('scroll', actualizarBarraDeProgreso);