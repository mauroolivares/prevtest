/**let openmodal = document.querySelectorAll(".modal-open");
let closemodal = document.querySelectorAll(".modal-close");
let overlay = document.querySelector(".modal-overlay");

overlay.addEventListener("click", toggleModal);

for (let i = 0; i < openmodal.length; i++) {
	openmodal[i].addEventListener("click", (event) => {
		event.preventDefault();
		toggleModal();
	});
}

for (let i = 0; i < closemodal.length; i++) {
	closemodal[i].addEventListener("click", toggleModal);
}

function toggleModal() {
	document.querySelector("body").classList.toggle("modal-active");
	document.querySelector(".modal").classList.toggle("opacity-0");
	document.querySelector(".modal").classList.toggle("pointer-events-none");
}*/

let card_open = document.getElementById("card_open");
let card_close = document.getElementById("card_close");
let card_close2 = document.getElementById("card_close2");
let card_panel = document.getElementById("card_panel");

if (card_open !== null && card_close !== null && card_close2 !== null) {
	card_open.addEventListener("click", modalState);
	card_close.addEventListener("click", modalState);
	card_close2.addEventListener("click", modalState);
}

function modalState() {
	if (card_panel.classList.contains("hidden")) {
		// Show modal
		card_panel.classList.remove("hidden");
		card_panel.classList.add("flex");
		card_panel.classList.add("block");

		// Delete button
		card_open.classList.add("hidden");
		card_open.classList.remove("block");

		// Start animation open
		card_panel.classList.add("card_open");
	} else {
		// Delete modal
		card_panel.classList.add("hidden");
		card_panel.classList.remove("flex");
		card_panel.classList.remove("block");

		// Show button
		card_open.classList.remove("hidden");
		card_open.classList.add("block");

		// Remove animation open
		card_panel.classList.remove("card_open");
	}
}

//
let nUser = nUserf();
function nUserf() {
	return document.getElementById("nameMedical") !== null
		? document.getElementById("nameMedical")
		: document.getElementById("namePatient");
}
let rUser = rUserf();
function rUserf() {
	return document.getElementById("rutMedical") !== null
		? document.getElementById("rutMedical")
		: document.getElementById("rutPatient");
}
let sUser = sUserf();
function sUserf() {
	return document.getElementById("sexoMedical") !== null
		? document.getElementById("sexoMedical")
		: document.getElementById("sexoPatient");
}
let cUser = cUserf();
function cUserf() {
	return document.getElementById("ciudadMedical") !== null
		? document.getElementById("ciudadMedical")
		: document.getElementById("ciudadPatient");
}
let tUser = tUserf();
function tUserf() {
	return document.getElementById("telefMedical") !== null
		? document.getElementById("telefMedical")
		: document.getElementById("telefPatient");
}
let pUser = pUserf();
function pUserf() {
	return document.getElementById("profMedical") !== null
		? document.getElementById("profMedical")
		: document.getElementById("profPatient");
}
let emailUser = emailUserf();
function emailUserf() {
	return document.getElementById("emailMedical") !== null
		? document.getElementById("emailMedical")
		: document.getElementById("emailPatient");
}
let passUser = passUserf();
function passUserf() {
	return document.getElementById("passwordMedical") !== null
		? document.getElementById("passwordMedical")
		: document.getElementById("passwordPatient");
}

let rpassUser = rpassUserf();
function rpassUserf() {
	return document.getElementById("repeatPasswordMedical") !== null
		? document.getElementById("repeatPasswordMedical")
		: document.getElementById("repeatPasswordPatient");
}

function areasModalForm() {
	if (
		nUser.value !== "" &&
		rUser.value !== "" &&
		sUser.value !== "" &&
		cUser.value != "" &&
		tUser.value !== "" &&
		pUser.value !== "" &&
		emailUser.value !== "" &&
		passUser.value !== "" &&
		rpassUser.value !== ""
	) {
		document.getElementById("registerUser").disabled = false;
		document
			.getElementById("registerUser")
			.classList.remove("disabled:opacity-50");
	} else {
		document.getElementById("registerUser").disabled = true;
		document
			.getElementById("registerUser")
			.classList.add("disabled:opacity-50");
	}
}
