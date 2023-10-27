function mostrarBotones(event) {
    event.target.parentElement.querySelector('.check-button').classList.toggle('d-none');
    event.target.parentElement.querySelector('.move-button').classList.toggle('d-none');
    const container = document.getElementById('container');

    // Limpiar el contenido del contenedor

    // const verButton = document.createElement('button');
    // verButton.textContent = 'Ver';
    // verButton.onclick = () => mostrarTexto('ver');

    // const moverButton = document.createElement('button');
    // moverButton.textContent = 'Mover';
    // moverButton.onclick = () => mostrarTexto('mover');

    // container.appendChild(verButton);
    // container.appendChild(moverButton);
}

function main() {
    document.querySelectorAll('.transparent-button').forEach(button => button.addEventListener('click', mostrarBotones))
}

main();

function mostrarTexto(accion) {
    const textoElement = document.getElementById('texto');
    if (accion === 'ver') {
        textoElement.textContent = 'Estás viendo un cuadro de una señora que mira hacia abajo, quizás sería interesante ver el cuadro que hay debajo.';
    } else if (accion === 'mover') {
        textoElement.textContent = 'Has movido el cuadro pero no hay nada detrás.';
    }
}