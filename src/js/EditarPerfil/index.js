//////////////////////////////////////////PERFIL MEDICO

function editarPerfilMedico() {
	let perfilMed = document.getElementById("perfilMedico");
	if (perfilMed !== null) {
		let inputs = perfilMed.getElementsByTagName("input");
		for (let i of inputs) {
			if (i.id !== "sedePerfil" && i.id !== "usuarioPerfil") {
				i.removeAttribute("disabled");
				i.classList.remove("bg-blue-50");
				i.classList.add("bg-white");
				//
				i.classList.remove("hidden");
				i.classList.add("flex");
				let divHid = i.id + "2";
				let divHidden = document.getElementById(divHid);
				if (divHidden !== null) {
					divHidden.classList.remove("flex");
					divHidden.classList.add("hidden");
				}
			}
		}
		let saveButtons = document.getElementById("saveButtons");
		saveButtons.classList.remove("hidden");
		saveButtons.classList.add("flex");
	}
}

function cancelarPerfilMedico() {
	//importar desde base de datos y refrescar (si cambia algo y cancela)

	//se deshabilita inputs y buttons
	let perfilMed = document.getElementById("perfilMedico");
	if (perfilMed !== null) {
		let inputs = perfilMed.getElementsByTagName("input");
		for (let i of inputs) {
			if (i.id !== "sedePerfil" && i.id !== "usuarioPerfil") {
				i.setAttribute("disabled", "");
				i.classList.remove("bg-white");
				i.classList.add("bg-blue-50");
				//
				i.classList.remove("flex");
				i.classList.add("hidden");
				let divHid = i.id + "2";
				let divHidden = document.getElementById(divHid);
				if (divHidden !== null) {
					divHidden.classList.remove("hidden");
					divHidden.classList.add("flex");
				}
			}
		}
		let saveButtons = document.getElementById("saveButtons");
		saveButtons.classList.remove("flex");
		saveButtons.classList.add("hidden");
	}
}

function guardarPerfilMedico() {
	//enviar a base de datos y refrescar

	//despues del guardado, se deshabilitan inputs y buttons
	let perfilMed = document.getElementById("perfilMedico");
	if (perfilMed !== null) {
		let inputs = perfilMed.getElementsByTagName("input");
		for (let i of inputs) {
			if (i.id !== "sedePerfil" && i.id !== "usuarioPerfil") {
				i.setAttribute("disabled", "");
				i.classList.remove("bg-white");
				i.classList.add("bg-blue-50");
				//
				i.classList.remove("flex");
				i.classList.add("hidden");
				let divHid = i.id + "2";
				let divHidden = document.getElementById(divHid);
				if (divHidden !== null) {
					divHidden.classList.remove("hidden");
					divHidden.classList.add("flex");
				}
			}
		}
		let saveButtons = document.getElementById("saveButtons");
		saveButtons.classList.remove("flex");
		saveButtons.classList.add("hidden");
	}
}

//////////////////////////////////////////PERFIL PACIENTE

function editarPerfilPaciente() {
	let perfilPat = document.getElementById("perfilPaciente");
	if (perfilPat !== null) {
		let inputs = perfilPat.getElementsByTagName("input");
		for (let i of inputs) {
			if (i.id !== "sedePerfil" && i.id !== "usuarioPerfil") {
				i.removeAttribute("disabled");
				i.classList.remove("bg-blue-50");
				i.classList.add("bg-white");
				//
				i.classList.remove("hidden");
				i.classList.add("flex");
				let divHid = i.id + "2";
				let divHidden = document.getElementById(divHid);
				if (divHidden !== null) {
					divHidden.classList.remove("flex");
					divHidden.classList.add("hidden");
				}
			}
		}
		let saveButtons = document.getElementById("saveButtons");
		saveButtons.classList.remove("hidden");
		saveButtons.classList.add("flex");
	}
}

function cancelarPerfilPaciente() {
	//importar desde base de datos y refrescar (si cambia algo y cancela)

	//se deshabilita inputs y buttons
	let perfilPat = document.getElementById("perfilPaciente");
	if (perfilPat !== null) {
		let inputs = perfilPat.getElementsByTagName("input");
		for (let i of inputs) {
			if (i.id !== "sedePerfil" && i.id !== "usuarioPerfil") {
				i.setAttribute("disabled", "");
				i.classList.remove("bg-white");
				i.classList.add("bg-blue-50");
				//
				i.classList.remove("flex");
				i.classList.add("hidden");
				let divHid = i.id + "2";
				let divHidden = document.getElementById(divHid);
				if (divHidden !== null) {
					divHidden.classList.remove("hidden");
					divHidden.classList.add("flex");
				}
			}
		}
		let saveButtons = document.getElementById("saveButtons");
		saveButtons.classList.remove("flex");
		saveButtons.classList.add("hidden");
	}
}

function guardarPerfilPaciente() {
	//enviar a base de datos y refrescar

	//despues del guardado, se deshabilitan inputs y buttons
	let perfilPat = document.getElementById("perfilPaciente");
	if (perfilPat !== null) {
		let inputs = perfilPat.getElementsByTagName("input");
		for (let i of inputs) {
			if (i.id !== "sedePerfil" && i.id !== "usuarioPerfil") {
				i.setAttribute("disabled", "");
				i.classList.remove("bg-white");
				i.classList.add("bg-blue-50");
				//
				i.classList.remove("flex");
				i.classList.add("hidden");
				let divHid = i.id + "2";
				let divHidden = document.getElementById(divHid);
				if (divHidden !== null) {
					divHidden.classList.remove("hidden");
					divHidden.classList.add("flex");
				}
			}
		}
		let saveButtons = document.getElementById("saveButtons");
		saveButtons.classList.remove("flex");
		saveButtons.classList.add("hidden");
	}
}
