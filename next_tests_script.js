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
				'¡La caja fuerte! Al tener la llave has abierto la caja fuerte y has encontrado el diamante negro de Orlov. Has coseguido tu misión y completado el escape room. ¡Ahora corre! Antes de que te pillen.';
		} else {
			textoElement.textContent = 'Has movido el cuadro y has descubierto que escondía una caja fuerde detrás. ¡Bien hecho!. Creo que ahora deberías buscar una llave.';
		}
	} else if (element === 'view-lamp') {
		if (hasStick) {
			textoElement.textContent =
				'Al tener el gancho, ahora la llave está en tu inventario.';
			lampAction();
		} else {
			textoElement.textContent = 'Ves un reflejo raro proveniente de la lámpara. Te fijas con mayor detenimiento y descubres que se trata de una llave. ¿Qué abrirá? Quizás deberías buscar algo para coger esa llave.';
		}
	} else if (element === 'view-paint-velazquez') {
		textoElement.textContent =
			'Estás viendo La Rendición de Breda. Un cuadro de Velazquez donde los personajes protagonistas llevan lanzas de gran altura y ganchos.';
	} else if (element === 'move-paint-velazquez' && !hasStick) {
		rightPaintAction();
		textoElement.textContent =
			'Has movido el cuadro y ha caído al suelo un palo con un gancho en su extremo. ¿Para qué puede servir? Has metido el gancho en tu inventario.';
	} else if (element === 'move-paint-velazquez' && hasStick) {
		rightPaintAction();
		textoElement.textContent =
			'Ya tienes el gancho en el inventario. No hay nada más detrás del cuadro.';
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
