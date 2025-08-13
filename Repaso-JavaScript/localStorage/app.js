const themeToggleBtn = document.querySelector('#theme-toggle');
const body = document.body;

// -- Lógica --
function aplicarTema(tema) {
    if (tema === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = 'Activar Modo Claro ☀️';
    } else {
        body.classList.remove('dark-mode');
        themeToggleBtn.textContent = 'Activar Modo Oscuro 🌙';
    }
}

function cambiarTema() {
    let temaActual;

    if (body.classList.contains('dark-mode')) {
        temaActual = 'light';
    } else {
        temaActual = 'dark';
    }

    localStorage.setItem('theme', temaActual);
    aplicarTema(temaActual);
}

// Al iniciar una página, vamos a revisar si es que existe un tema guardado.
const temaGuardado = localStorage.getItem('theme');

if (temaGuardado) {
    aplicarTema(temaGuardado);
}

themeToggleBtn.addEventListener('click', cambiarTema);
