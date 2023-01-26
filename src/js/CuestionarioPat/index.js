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
