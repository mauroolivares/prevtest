let menunav = document.getElementById("menunav");
let menu = document.getElementById("menu");
let content = document.getElementById("content");
let header = document.getElementById("header");

function toggleMenu() {
	menunav.classList.toggle("hidden");
	menunav.classList.toggle("w-full");
	menunav.classList.toggle("h-auto");
}
function openSlideMenu() {
	menu.classList.remove("w-0");
	menu.classList.add("w-64");
	content.classList.add("ml-64");
	header.classList.add("ml-64");
	//menu.style.width = "250px";
	//menu.style.zIndex = "1";
	//content.style.marginLeft = "250px";
}
function closeSlideMenu() {
	menu.classList.remove("w-64");
	menu.classList.add("w-0");
	content.classList.remove("ml-64");
	header.classList.remove("ml-64");
	//menu.style.width = "0";
	//content.style.scrollMarginLeft = "0";
}
function selectOption(category, option) {
	document.getElementById("navCenter1").innerHTML = category;
	document.getElementById("navCenter2").innerHTML = " " + `${option}`;
}

//
// Cuestionario 0
//

let cuest0 = document.getElementById("list0");
if (cuest0 !== null) {
	let cuest0_input = cuest0.getElementsByTagName("input");
	window.addEventListener("load", (event) => {
		for (let i of cuest0_input) {
			//si name del input coincide con name localstorage, setea el valor
			if (i.name === "rut") {
				i.value = localStorage.getItem("rutPendMed");
				i.innerText = localStorage.getItem("rutPendMed");
				localStorage.removeItem("rutPendMed");
			}
			if (i.name === "name") {
				i.value = localStorage.getItem("pacientePendMed");
				i.innerText = localStorage.getItem("pacientePendMed");
				localStorage.removeItem("pacientePendMed");
			}
		}
	});
}

/**

let checkAcuerdo = document.getElementById("link-checkbox");
if (checkAcuerdo !== null) {
	checkAcuerdo.addEventListener("change", (event) => {
		let cont = document.getElementById("continuarCuest");
		if (event.currentTarget.checked) {
			cont.removeAttribute("disabled");
			cont.classList.remove("bg-blue-200");
			cont.classList.add("bg-blue-500");
			cont.classList.add("hover:bg-blue-600");
			cont.classList.add("focus:ring-blue-600");
		} else {
			cont.setAttribute("disabled", "");
			cont.classList.remove("bg-blue-500");
			cont.classList.remove("hover:bg-blue-600");
			cont.classList.remove("focus:ring-blue-600");
			cont.classList.add("bg-blue-200");
		}
	});
}
*/

//
// Cuestionario 1
//

let cuest1 = document.getElementById("list1");
if (cuest1 !== null) {
	let cuest1_input = cuest1.getElementsByTagName("input");
	let cuest1_select = cuest1.getElementsByTagName("select");
	window.addEventListener("load", (event) => {
		//carga por cada ingreso a la pagina
		//verifica antes si existen valores en localstorage, de ser asi los extrae y setea en form
		for (let i of cuest1_input) {
			//si name del input coincide con name localstorage, setea el valor
			if (i.name === "sexobiologico")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "peso") i.value = localStorage.getItem(i.name);
			if (i.name === "altura") i.value = localStorage.getItem(i.name);
			if (i.name === "presionarterial") i.value = localStorage.getItem(i.name);
			if (i.name === "haceactividadfisica")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "actividadfisica")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "hafumado")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "familiarconantecedentes")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "dietanoideal")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
		}
		let cont = 0;
		for (let i of cuest1_select) {
			if (i.name === "fechanacimiento") {
				//i.value = localStorage.getItem(i.name);
				let l = localStorage.getItem(i.name);
				if (l !== null) l = l.split("/");
				i.value = l[cont];
				cont++;
			}
			if (i.name === "edadantecedentes") {
				i.value = localStorage.getItem(i.name);
			}
		}
	});
	for (let i of cuest1) {
		//expresion solo numeros
		let expReg1 = /^[0-9]+$/;
		//expresion numeros con decimales (puntos)
		let expReg2 = /^\d*\.\d+$/;
		//expresion numeros con decimales (comas)
		let expReg3 = /^\d*\,\d+$/;

		// INPUT 1-1-1 SETEA DATOS CON FUNCIÓN DATEBIRTH()
		/**
		if (i.name === "fechanacimiento") {
			i.addEventListener("keyup", (event) => {
				console.log("keyup" + event.target.value);
				localStorage.setItem("fechanacimiento", event.target.value);
			});
		}*/
		if (i.name === "sexobiologico") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("sexobiologico", event.target.value);
			});
		}
		if (i.name === "peso") {
			i.addEventListener("keyup", (event) => {
				if (
					i.value.match(expReg1) ||
					i.value.match(expReg2) ||
					i.value.match(expReg3)
				) {
					localStorage.setItem("peso", event.target.value);
				}
			});
		}
		if (i.name === "altura") {
			i.addEventListener("keyup", (event) => {
				if (
					i.value.match(expReg1) ||
					i.value.match(expReg2) ||
					i.value.match(expReg3)
				) {
					localStorage.setItem("altura", event.target.value);
				}
			});
		}
		if (i.name === "presionarterial") {
			i.addEventListener("keyup", (event) => {
				if (
					i.value.match(expReg1) ||
					i.value.match(expReg2) ||
					i.value.match(expReg3)
				) {
					localStorage.setItem("presionarterial", event.target.value);
				}
			});
		}
		if (i.name === "haceactividadfisica") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("haceactividadfisica", event.target.value);
			});
		}
		if (i.name === "actividadfisica") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("actividadfisica", event.target.value);
			});
		}
		if (i.name === "hafumado") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("hafumado", event.target.value);
			});
		}
		if (i.name === "familiarconantecedentes") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("familiarconantecedentes", event.target.value);
			});
		}
		if (i.name === "dietanoideal") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("dietanoideal", event.target.value);
			});
		}
	}
}

/**
function fechaNac() {
	//let date = document.getElementById("1-1").getElementsByTagName("input")[0].value;
	//console.log(cuest1);
	let date = document.getElementById("datepicker");
	if (date !== null) {
		date.addEventListener("change", (event) => {
			console.log(event.target.value);
		});
		date.addEventListener("keyup", (event) => {
			console.log(event.target.value);
		});
	}
}
*/

function calcularIMC(sex, altura, peso) {
	altura = Math.round(altura) / 100;
	peso = Math.round(peso);
	let indice = (peso / Math.pow(altura, 2)).toFixed(2);
	let resultado = "";
	if (sex == "M") {
		if (indice < 20) resultado = "Peso inferior al normal";
		else if (indice >= 20 && indice < 24) resultado = "Peso Normal";
		else if (indice >= 24 && indice < 29) resultado = "Peso superior al normal";
		else resultado = "Obesidad";
	}
	if (sex == "F") {
		if (indice < 21) resultado = "Peso inferior al normal";
		else if (indice >= 21 && indice < 25) resultado = "Peso Normal";
		else if (indice >= 25 && indice < 30) resultado = "Peso superior al normal";
		else resultado = "Obesidad";
	}
	return indice + " (" + resultado + ")";
}

function dateBirth() {
	let dbirth = document.getElementById("dayBirth");
	let mbirth = document.getElementById("monthBirth");
	let ybirth = document.getElementById("yearBirth");
	if (dbirth.value !== "" && mbirth.value !== "" && ybirth.value !== "") {
		localStorage.setItem(
			"fechanacimiento",
			dbirth.value + "/" + mbirth.value + "/" + ybirth.value,
		);
	}
}

function rangoEdadAntecedentes() {
	let edadlist = document.getElementById("edadantecedentes");
	let value = edadlist.options[edadlist.selectedIndex].value;
	if (value !== "Edad") {
		localStorage.setItem("edadantecedentes", value);
	}
}

let inputs1_9 = document.getElementById("1-9");
if (inputs1_9 !== null) {
	inputs1_9 = inputs1_9.getElementsByTagName("input");
	for (let i of inputs1_9) {
		i.addEventListener("click", (event) => {
			//evento será el click de la opción escogida por el usuario
			if (event.target.value === "true") {
				let sel = document
					.getElementById("1-10")
					.getElementsByTagName("select");
				for (let i of sel) {
					i.removeAttribute("disabled");
				}
			} else {
				let sel = document
					.getElementById("1-10")
					.getElementsByTagName("select");
				for (let i of sel) {
					//quitar selected al actual y setear selected al primero
					//console.log(i.options[i.selectedIndex]);
					i.selectedIndex = 0;
					localStorage.setItem("edadantecedentes", "");
					i.setAttribute("disabled", "");
				}
			}
		});
	}
}

//
// Cuestionario 2
//

let cuest2 = document.getElementById("list2");
if (cuest2 !== null) {
	let cuest2_input = cuest2.getElementsByTagName("input");
	let cuest2_select = cuest2.getElementsByTagName("select");
	window.addEventListener("load", (event) => {
		for (let i of cuest2_input) {
			if (i.name === "nauseas")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "vomitos")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "dolorabdominal")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "acidezestomacal")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "perdidapeso")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "fuevoluntario")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "perdidaapetito")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "dolorbocaestomago")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "vomitosangre")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "saciedadprecoz")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "hecesnegras")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "anemiadiagnosticada")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "dificultasolidos")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "dificultaliquidos")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "tiemposintomas")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
		}
		for (let i of cuest2_select) {
			if (i.name === "edadsintomas") {
				i.value = localStorage.getItem(i.name);
			}
		}
	});
	for (let i of cuest2) {
		if (i.name === "nauseas") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("nauseas", event.target.value);
			});
		}
		if (i.name === "vomitos") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("vomitos", event.target.value);
			});
		}
		if (i.name === "dolorabdominal") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("dolorabdominal", event.target.value);
			});
		}
		if (i.name === "acidezestomacal") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("acidezestomacal", event.target.value);
			});
		}
		if (i.name === "perdidapeso") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("perdidapeso", event.target.value);
			});
		}
		if (i.name === "fuevoluntario") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("fuevoluntario", event.target.value);
			});
		}
		if (i.name === "perdidaapetito") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("perdidaapetito", event.target.value);
			});
		}
		if (i.name === "dolorbocaestomago") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("dolorbocaestomago", event.target.value);
			});
		}
		if (i.name === "vomitosangre") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("vomitosangre", event.target.value);
			});
		}
		if (i.name === "saciedadprecoz") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("saciedadprecoz", event.target.value);
			});
		}
		if (i.name === "hecesnegras") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("hecesnegras", event.target.value);
			});
		}
		if (i.name === "anemiadiagnosticada") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("anemiadiagnosticada", event.target.value);
			});
		}
		if (i.name === "dificultasolidos") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("dificultasolidos", event.target.value);
			});
		}
		if (i.name === "dificultaliquidos") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("dificultaliquidos", event.target.value);
			});
		}

		// INPUT 2-15-1 SETEA DATOS CON FUNCIÓN RANGOEDADSINTOMAS()

		/**if (i.name === "2-15-1") {
			i.addEventListener("click", (event) => {
				event.addEventListener("change", (event2) => {
					localStorage.setItem("2-15-1", event2.target.value);
				});
			});
		}*/
		if (i.name === "tiemposintomas") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("tiemposintomas", event.target.value);
			});
		}
	}
}

let inputs2_5 = document.getElementById("2-5");
if (inputs2_5 !== null) {
	inputs2_5 = inputs2_5.getElementsByTagName("input");
	for (let i of inputs2_5) {
		i.addEventListener("click", (event) => {
			//evento será el click de la opción escogida por el usuario
			if (event.target.value === "true") {
				let inpList = document
					.getElementById("2-6")
					.getElementsByTagName("input");
				for (let inp of inpList) {
					inp.removeAttribute("disabled");
				}
			} else {
				let inpList = document
					.getElementById("2-6")
					.getElementsByTagName("input");
				for (let inp of inpList) {
					inp.setAttribute("disabled", "");
				}
			}
		});
	}
}

function rangoEdadSintomas() {
	let edadlist = document.getElementById("edadsintomas");
	let value = edadlist.options[edadlist.selectedIndex].value;
	if (value !== "Edad") {
		localStorage.setItem("edadsintomas", value);
	}
}

//
// Cuestionario 3
//

let cuest3 = document.getElementById("list3");
if (cuest3 !== null) {
	let cuest3_input = cuest3.getElementsByTagName("input");
	let cuest3_select = cuest3.getElementsByTagName("select");
	window.addEventListener("load", (event) => {
		for (let i of cuest3_input) {
			if (i.name === "helicobacterdiagnosticada")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "tratamientoantibiotico")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "examenerradicacion")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "erradicacionexitosa")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "antecedentesgastrectomia")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "anemiaperniciosa")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
		}
		let cont = 0;
		for (let i of cuest3_select) {
			if (i.name === "fechaerradicacion") {
				let l = localStorage.getItem(i.name);
				if (l !== null) l = l.split("/");
				i.value = l[cont];
				cont++;
			}
		}
	});
	for (let i of cuest3) {
		if (i.name === "helicobacterdiagnosticada") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("helicobacterdiagnosticada", event.target.value);
			});
		}
		if (i.name === "tratamientoantibiotico") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("tratamientoantibiotico", event.target.value);
			});
		}
		if (i.name === "examenerradicacion") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("examenerradicacion", event.target.value);
			});
		}
		if (i.name === "erradicacionexitosa") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("erradicacionexitosa", event.target.value);
			});
		}

		// INPUT 3-5-1 SETEA DATOS CON FUNCIÓN FECHATRATPYLORI()

		if (i.name === "antecedentesgastrectomia") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("antecedentesgastrectomia", event.target.value);
			});
		}
		if (i.name === "anemiaperniciosa") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("anemiaperniciosa", event.target.value);
			});
		}
	}
}

let inputs3_1 = document.getElementById("3-1");
if (inputs3_1 !== null) {
	inputs3_1 = inputs3_1.getElementsByTagName("input");
	for (let i of inputs3_1) {
		i.addEventListener("click", (event) => {
			//evento será el click de la opción escogida por el usuario
			if (event.target.value === "true") {
				let inpList = document
					.getElementById("3-2")
					.getElementsByTagName("input");
				for (let inp of inpList) {
					inp.removeAttribute("disabled");
				}
			} else {
				let inpList = document
					.getElementById("3-2")
					.getElementsByTagName("input");
				for (let inp of inpList) {
					inp.setAttribute("disabled", "");
				}
			}
		});
	}
}

let inputs3_2 = document.getElementById("3-2");
if (inputs3_2 !== null) {
	inputs3_2 = inputs3_2.getElementsByTagName("input");
	for (let i of inputs3_2) {
		i.addEventListener("click", (event) => {
			//evento será el click de la opción escogida por el usuario
			if (event.target.value === "true") {
				let inpList = document
					.getElementById("3-3")
					.getElementsByTagName("input");
				for (let inp of inpList) {
					inp.removeAttribute("disabled");
				}
			} else {
				let inpList = document
					.getElementById("3-3")
					.getElementsByTagName("input");
				for (let inp of inpList) {
					inp.setAttribute("disabled", "");
				}
			}
		});
	}
}

let inputs3_3 = document.getElementById("3-3");
if (inputs3_3 !== null) {
	inputs3_3 = inputs3_3.getElementsByTagName("input");
	for (let i of inputs3_3) {
		i.addEventListener("click", (event) => {
			//evento será el click de la opción escogida por el usuario
			if (event.target.value === "true") {
				let inpList = document
					.getElementById("3-4")
					.getElementsByTagName("input");
				for (let inp of inpList) {
					inp.removeAttribute("disabled");
				}
			} else {
				let inpList = document
					.getElementById("3-4")
					.getElementsByTagName("input");
				for (let inp of inpList) {
					inp.setAttribute("disabled", "");
				}
			}
		});
	}
}

function fechaTratPylori() {
	let dlist = document.getElementById("dayList");
	let mlist = document.getElementById("monthList");
	let ylist = document.getElementById("yearList");
	if (dlist.value !== "Día" && mlist.value !== "Mes" && ylist.value !== "Año") {
		//console.log(dlist.value + mlist.value + ylist.value);
		localStorage.setItem(
			"fechaerradicacion",
			dlist.value + "/" + mlist.value + "/" + ylist.value,
		);
	}
	/**document.getElementById("favourite").value =
		mylist.options[mylist.selectedIndex].text;*/
}

//
// Cuestionario 4
//

let cuest4 = document.getElementById("list4");
if (cuest4 !== null) {
	let cuest4_input = cuest4.getElementsByTagName("input");
	window.addEventListener("load", (event) => {
		for (let i of cuest4_input) {
			if (i.name === "endoscopiadigestivaalta")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "displasiaalto")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "displasiabajo")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "gastritisatroficacronica")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "metaplasiaintestinalcronica")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "poliposgastricos")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
			if (i.name === "ulceragastricaorduodenal")
				if (i.value === localStorage.getItem(i.name)) i.checked = true;
		}
	});
	for (let i of cuest4) {
		if (i.name === "endoscopiadigestivaalta") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("endoscopiadigestivaalta", event.target.value);
			});
		}
		if (i.name === "displasiaalto") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("displasiaalto", event.target.value);
			});
		}
		if (i.name === "displasiabajo") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("displasiabajo", event.target.value);
			});
		}
		if (i.name === "gastritisatroficacronica") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("gastritisatroficacronica", event.target.value);
			});
		}
		if (i.name === "metaplasiaintestinalcronica") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("metaplasiaintestinalcronica", event.target.value);
			});
		}
		if (i.name === "poliposgastricos") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("poliposgastricos", event.target.value);
			});
		}
		if (i.name === "ulceragastricaorduodenal") {
			i.addEventListener("click", (event) => {
				localStorage.setItem("ulceragastricaorduodenal", event.target.value);
			});
		}
	}
}

let inputs4_1 = document.getElementById("4-1");
if (inputs4_1 !== null) {
	inputs4_1 = inputs4_1.getElementsByTagName("input");
	for (let i of inputs4_1) {
		i.addEventListener("click", (event) => {
			//evento será el click de la opción escogida por el usuario
			if (event.target.value === "true") {
				let listaInputs = ["4-2", "4-3", "4-4", "4-5", "4-6", "4-7"];
				for (let li of listaInputs) {
					let inpList = document
						.getElementById(`${li}`)
						.getElementsByTagName("input");
					for (let inp of inpList) {
						inp.removeAttribute("disabled");
					}
				}
			} else {
				let listaInputs = ["4-2", "4-3", "4-4", "4-5", "4-6", "4-7"];
				for (let li of listaInputs) {
					let inpList = document
						.getElementById(`${li}`)
						.getElementsByTagName("input");
					for (let inp of inpList) {
						inp.setAttribute("disabled", "");
					}
				}
			}
		});
	}
}

let finCuest = document.getElementById("finalizarCuestionario");
if (finCuest !== null) {
	finCuest.addEventListener("click", () => {
		/* for (let i = 0; i < localStorage.length; i++) {
			console.log(localStorage.key(i));
		} */
		//se procesará la predicción del software y despliega mensaje de recomendación
		//
		//posterior a los resultados, limpiar localStorage
		localStorage.clear();
	});
}
