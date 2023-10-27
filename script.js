let code = '';
const correctCode = '1889';

function appendToCode(digit) {
    if (code.length < 4) {
        code += digit;
        document.getElementById('code-input').value = code;
        if (code.length === 4) {
            checkCode();
        }
    }
}

function checkCode() {
    if (code === correctCode) {
        showSuccessAlert();
    } else {
        document.getElementById('message').textContent = 'Código incorrecto. Inténtalo de nuevo.';
        resetCode();
    }
}

function resetCode() {
    code = '';
    document.getElementById('code-input').value = code;
    setTimeout(() => {
        document.getElementById('message').textContent = '';
    }, 2000);
}

function toggleHint() {
    const hintText = document.getElementById('hint-text');
    if (hintText.style.display === 'none') {
        hintText.style.display = 'block';
    } else {
        hintText.style.display = 'none';
    }
}

function showSuccessAlert() {
    const alertMessage = '¡Has resuelto el acertijo! ¿Estás listo para la siguiente prueba?';
    const confirmationButton = 'Pasar a la siguiente prueba';
    
    if (confirm(alertMessage)) {
        window.location.href = 'siguiente_prueba.html';
    }
}

function mostrarBotones(event) {

    event.target.querySelector('.check-button').classList.toggle('d-none');
    event.target.querySelector('.move-button').classList.toggle('d-none');
    const container = document.getElementById('container');
}

function mostrarTexto(accion) {
    const textoElement = document.getElementById('texto');
    if (accion === 'ver') {
        textoElement.textContent = 'Estás viendo un cuadro de una señora que mira hacia abajo, quizás sería interesante ver el cuadro que hay debajo.';
    } else if (accion === 'mover') {
        textoElement.textContent = 'Has movido el cuadro pero no hay nada detrás.';
    }
}