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
}

function main() {
	document
		.querySelectorAll('.transparent-button')
		.forEach((button) => button.addEventListener('click', mostrarBotones));
}

let hasStick = false;
let hasKey = false;

main();

function mostrarTexto(element) {
	const textoElement = document.getElementById('texto-botones');
	textoElement.innerHTML = '';

	if (element === 'view-paint-lady') {
		textoElement.textContent =
			'Estás viendo un cuadro de una señora que mira hacia abajo, quizás sería interesante ver el cuadro que hay debajo.';
	} else if (element === 'move-paint-lady') {
		textoElement.textContent =
			'Has movido el cuadro pero no hay nada detrás.';
	} else if (element === 'view-paint-caravaggio') {
		textoElement.textContent =
			'Estás viendo una pintura de Caravaggio llamada Narciso, en la que éste mira su propio reflejo.';
	} else if (element === 'move-paint-caravaggio') {
		if (hasKey) {
			const inventory = document.querySelector('.inventory ul');

			inventory.innerHTML = '';

			textoElement.textContent =
				'Has movido el cuadro y has descubierto que escondía una caja fuerde detrás. ¡Bien hecho!.';
		} else {
			textoElement.textContent = 'Bárbara, no tengo llave..';
		}
	} else if (element === 'view-lamp') {
		if (hasStick) {
			textoElement.textContent =
				'Ves un reflejo raro proveniente de la lámpara. Te fijas con mayor detenimiento y descubres que se trata de una llave. ¿Qué abrirá?';

			lampAction();
		} else {
			textoElement.textContent = 'No tengo llave, Bárbara, que hago?';
		}
	} else if (element === 'view-paint-velazquez') {
		textoElement.textContent =
			'Estás viendo La Rendición de Breda. Un cuadro de Velazquez donde los personajes protagonistas llevan lanzas y palos de gran altura.';
	} else if (element === 'move-paint-velazquez' && !hasStick) {
		rightPaintAction();

		textoElement.textContent =
			'Has movido el cuadro y ha caído al suelo un palo con un gancho en su extremo. ¿Para qué puede servir?';
	}
}

function rightPaintAction() {
	hasStick = true;

	const inventory = document.querySelector('.inventory ul');

	inventory.innerHTML = '';

	const li = document.createElement('li');

	li.textContent = 'gancho';

	inventory.appendChild(li);
}

function lampAction() {
	hasKey = true;
	hasStick = false;

	const inventory = document.querySelector('.inventory ul');

	inventory.innerHTML = '';

	const li = document.createElement('li');

	li.textContent = 'llave';

	inventory.appendChild(li);
}

function cleanInventory() {}
