function mostrarBotones(event) {
	document
		.querySelectorAll('.check-button')
		.forEach((button) => button.classList.add('d-none'));
	document
		.querySelectorAll('.move-button')
		.forEach((button) => button.classList.add('d-none'));

	event.target.parentElement
		.querySelector('.check-button')
		.classList.toggle('d-none');
	event.target.parentElement
		.querySelector('.move-button')
		.classList.toggle('d-none');
	const container = document.getElementById('container');
}

function main() {
	document
		.querySelectorAll('.transparent-button')
		.forEach((button) => button.addEventListener('click', mostrarBotones));
}

main();


function mostrarTexto(element) {
    const textoElement = document.getElementById('texto-botones')
    textoElement.innerHTML = "";

	if (element === "view-paint-lady") {
		textoElement.textContent =
			'Estás viendo un cuadro de una señora que mira hacia abajo, quizás sería interesante ver el cuadro que hay debajo.';
	} else if (element === "move-paint-lady") {
		textoElement.textContent =
			'Has movido el cuadro pero no hay nada detrás.';
	} else if (element === "view-paint-caravaggio") {
		textoElement.textContent =
			'Estás viendo una pintura de Caravaggio llamada Narciso, en la que éste mira su propio reflejo.';
	} else if (element === "move-paint-caravaggio") {
		textoElement.textContent =
			'Has movido el cuadro y has descubierto que escondía una caja fuerde detrás. ¡Bien hecho!.';
	}else if (element === "view-lamp") {
		textoElement.textContent =
			'Ves un reflejo raro proveniente de la lámpara. Te fijas con mayor detenimiento y descubres que se trata de una llave. ¿Qué abrirá?';
	}else if (element === "view-paint-velazquez") {
		textoElement.textContent =
			'Estás viendo La Rendición de Breda. Un cuadro de Velazquez donde los personajes protagonistas llevan lanzas y palos de gran altura.';
	}else if (element === "move-paint-velazquez") {
		textoElement.textContent =
			'Has movido el cuadro y ha caído al suelo un palo con un gancho en su extremo. ¿Para qué puede servir?';
	}
}
