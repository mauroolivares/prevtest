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

if (content !== null) {
	let slideIndex = 1;
	showSlide(slideIndex);
	function moveSlide(moveStep) {
		showSlide((slideIndex += moveStep));
	}
	function currentSlide(n) {
		showSlide((slideIndex = n));
	}

	function showSlide(n) {
		let i;
		const slides = document.getElementsByClassName("slides");
		const dots = document.getElementsByClassName("dot");
		if (n >= slides.length || n < 1) slideIndex = 1;
		for (i = 0; i < slides.length; i++) {
			slides[i].classList.add("hidden");
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].classList.remove("bg-blue-800");
			dots[i].classList.add("bg-blue-400");
		}
		//actual
		if (
			slides[slideIndex - 1] !== undefined &&
			dots[slideIndex - 1] !== undefined
		) {
			slides[slideIndex - 1].classList.remove("hidden");
			slides[slideIndex - 1].classList.add("flex");
			dots[slideIndex - 1].classList.remove("bg-blue-400");
			dots[slideIndex - 1].classList.add("bg-blue-800");

			//se coloca un timer para que cambie de manera autonoma el slideshow
			let sec = 0;
			let t;
			function add() {
				//console.log(sec);
				sec++;
				if (sec >= 10) {
					sec = 0;
					showSlide(slideIndex++);
					return;
				}
				timer();
			}
			function timer() {
				t = setTimeout(add, 1000);
			}
			timer();
		}
	}

	//rut a cuestionario
	let tablePend = document.getElementById("dataCuestionariosPendMed");
	if (tablePend !== null) {
		let rowPend = tablePend.getElementsByTagName("tr");
		let buttonPend = tablePend.getElementsByTagName("button");
		for (let i = 0; i < buttonPend.length; i++) {
			//si boton es seleccionado, obtiene la posicion "i" de la misma fila para el rut
			buttonPend[i].addEventListener("click", () => {
				let rutPendMed =
					rowPend[i].getElementsByClassName("rutPendMed")[0].textContent;
				let pacientePendMed =
					rowPend[i].getElementsByClassName("pacientePendMed")[0].textContent;
				localStorage.setItem("rutPendMed", rutPendMed);
				localStorage.setItem("pacientePendMed", pacientePendMed);
			});
		}
	}
}
