const tarjetas = document.querySelectorAll('.tarjeta-foco');

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('mousemove', (evento) => {
        const rect = tarjeta.getBoundingClientRect();
        const x = evento.clientX - rect.left;
        const y = evento.clientY - rect.top;

        tarjeta.style.setProperty('--mouse-x', `${x}px`);
        tarjeta.style.setProperty('--mouse-y', `${y}px`);
    })
})