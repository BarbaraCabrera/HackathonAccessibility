let code = '';
const correctCode = '1889';

function appendToCode(digit) {
    if (code.length < 4) {
        code += digit;
        document.getElementById('code-input').value = code;  
    }

    setTimeout(() => {
        if (code.length === 4) {
            checkCode();
        }
    }, 500);
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

let lastHint = ''

function toggleHint(help) {
    const hintText = document.getElementById('hint-text');

    if (help === lastHint && hintText.style.display !== 'none') {
        hintText.style.display = 'none';
        return;
    }

    lastHint = help;
    
        hintText.style.display = 'block';
        if (help === "hint-button"){
            hintText.textContent ="Quizás buscamos una fecha.";
        }else{
            hintText.textContent="1 hombre se maravilló en el museo al ver 8 hermosas pinturas de 8 de las 9 hermanas que tuvo.";       }
    

}

function showSuccessAlert() {
    const alertMessage = '¡Has resuelto el acertijo! ¿Estás listo para la siguiente prueba?';
    
    if (confirm(alertMessage)) {
        window.location.href = 'next_tests.html';
    }else{
        resetCode();
    }
}
