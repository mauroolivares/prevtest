//
// RUT LOGIN PERSONAL
//
const rutMedical = document.getElementById("rutLoginMedical");
//const email = document.querySelector("#emailLogin");
const icon1 = document.querySelector(".icon1");
//const icon1 = document.getElementById("icon1");
const icon2 = document.querySelector(".icon2");
const error = document.querySelector(".textoError");
const btn = document.querySelector(".btnEnviar");
//const btn = document.querySelector("button");

//
// EMAIL MODAL PERSONAL
//
const emailModal = document.getElementById("emailMedical");
const icon1Modal = document.querySelector(".icon1Modal");
const icon2Modal = document.querySelector(".icon2Modal");
const errorModal = document.querySelector(".textoErrorModal");
const btnModal = document.querySelector(".btnEnviarModal");

//
// RUT LOGIN PACIENTE
//
const rut = document.getElementById("rutLogin");
const icon1Rut = document.querySelector(".icon1Rut");
const icon2Rut = document.querySelector(".icon2Rut");
const errorRut = document.querySelector(".textoErrorRut");
const btnRut = document.querySelector(".btnEnviarRut");

//
// RUT MODAL PACIENTE
//
const emailModalPat = document.getElementById("emailModalPat");
const icon1ModalPat = document.querySelector(".icon1ModalPat");
const icon2ModalPat = document.querySelector(".icon2ModalPat");
const errorModalPat = document.querySelector(".textoErrorModalPat");
const btnModalPat = document.querySelector(".btnEnviarModalPat");

let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let expRegRut = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;

function check(e) {
	e.preventDefault();
	//evita que se cargen ambos iconos a la vez al renderizar
	document.querySelector(".icons").classList.remove("hidden");
	if (rutMedical.value == "") {
		rutMedical.style.borderColor = "lightgrey";
		rutMedical.style.background = "fff";
		icon1.style.display = "none";
		icon2.style.display = "none";
		error.style.display = "none";
		btn.style.display = "none";
	} else if (rutMedical.value.match(expRegRut)) {
		rutMedical.style.borderColor = "lightgrey";
		rutMedical.style.background = "fff";
		icon1.style.display = "none";
		icon2.style.display = "block";
		error.style.display = "none";
		//btn.style.display = "block";
		btn.style.display = "none";
	} else if (!rutMedical.value.match(expRegRut)) {
		rutMedical.style.borderColor = "lightgrey";
		rutMedical.style.background = "fff";
		icon1.style.display = "block";
		icon2.style.display = "none";
		error.style.display = "block";
		btn.style.display = "none";
	}
}

function check2(e) {
	e.preventDefault();
	//evita que se cargen ambos iconos a la vez al renderizar
	document.querySelector(".iconsModal").classList.remove("hidden");
	if (emailModal.value == "") {
		emailModal.style.borderColor = "lightgrey";
		emailModal.style.background = "fff";
		icon1Modal.style.display = "none";
		icon2Modal.style.display = "none";
		errorModal.style.display = "none";
		btnModal.style.display = "none";
	} else if (emailModal.value.match(regExp)) {
		emailModal.style.borderColor = "lightgrey";
		emailModal.style.background = "fff";
		icon1Modal.style.display = "none";
		icon2Modal.style.display = "block";
		errorModal.style.display = "none";
		btnModal.style.display = "none";
	} else if (!emailModal.value.match(regExp)) {
		emailModal.style.borderColor = "lightgrey";
		emailModal.style.background = "fff";
		icon1Modal.style.display = "block";
		icon2Modal.style.display = "none";
		errorModal.style.display = "block";
		btnModal.style.display = "none";
	}
}

function checkRut(e) {
	e.preventDefault();
	//evita que se cargen ambos iconos a la vez al renderizar
	document.querySelector(".iconsRut").classList.remove("hidden");
	if (rut.value == "") {
		rut.style.borderColor = "lightgrey";
		rut.style.background = "fff";
		icon1Rut.style.display = "none";
		icon2Rut.style.display = "none";
		errorRut.style.display = "none";
		btnRut.style.display = "none";
	} else if (rut.value.match(expRegRut)) {
		rut.style.borderColor = "lightgrey";
		rut.style.background = "fff";
		icon1Rut.style.display = "none";
		icon2Rut.style.display = "block";
		errorRut.style.display = "none";
		btnRut.style.display = "none";
	} else if (!rut.value.match(expRegRut)) {
		rut.style.borderColor = "lightgrey";
		rut.style.background = "fff";
		icon1Rut.style.display = "block";
		icon2Rut.style.display = "none";
		errorRut.style.display = "block";
		btnRut.style.display = "none";
	}
}

function checkEmailPat(e) {
	e.preventDefault();
	//evita que se cargen ambos iconos a la vez al renderizar
	document.querySelector(".iconsModalPat").classList.remove("hidden");
	if (emailModalPat.value == "") {
		emailModalPat.style.borderColor = "lightgrey";
		emailModalPat.style.background = "fff";
		icon1ModalPat.style.display = "none";
		icon2ModalPat.style.display = "none";
		errorModalPat.style.display = "none";
		btnModalPat.style.display = "none";
	} else if (emailModalPat.value.match(regExp)) {
		emailModalPat.style.borderColor = "lightgrey";
		emailModalPat.style.background = "fff";
		icon1ModalPat.style.display = "none";
		icon2ModalPat.style.display = "block";
		errorModalPat.style.display = "none";
		btnModalPat.style.display = "none";
	} else if (!emailModalPat.value.match(regExp)) {
		emailModalPat.style.borderColor = "lightgrey";
		emailModalPat.style.background = "fff";
		icon1ModalPat.style.display = "block";
		icon2ModalPat.style.display = "none";
		errorModalPat.style.display = "block";
		btnModalPat.style.display = "none";
	}
}

function validarCorreo(correo) {
	let expReg =
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
	let esValido = expReg.test(correo);
	if (esValido) {
		alert("Correo válido");
	} else {
		alert("Correo NO VÁLIDO");
	}
}

function openMenu() {
	document.getElementById("menu").style.width = "100%";
}

function closeMenu() {
	document.getElementById("menu").style.width = "0";
}
