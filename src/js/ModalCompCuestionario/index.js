let compCuest_open = document.getElementById("finCuestionario");
let compCuest_close = document.getElementById("compCuestionario_close");
let compCuest_panel = document.getElementById("compCuestionario_panel");
console.log(compCuest_open, compCuest_close, compCuest_panel)

if (compCuest_open !== null && compCuest_close !== null) {
	compCuest_open.addEventListener("click", modalCompCuest);
	compCuest_close.addEventListener("click", modalCompCuest);
}

function modalCompCuest() {
	if (compCuest_panel.classList.contains("hidden")) {
		// Show modal
		compCuest_panel.classList.remove("hidden");
		compCuest_panel.classList.add("flex");
		compCuest_panel.classList.add("block");

		// Delete button
		compCuest_open.classList.add("hidden");
		compCuest_open.classList.remove("block");

		// Start animation open
		compCuest_panel.classList.add("finCuestionario");
	} else {
		// Delete modal
		compCuest_panel.classList.add("hidden");
		compCuest_panel.classList.remove("flex");
		compCuest_panel.classList.remove("block");

		// Show button
		compCuest_open.classList.remove("hidden");
		compCuest_open.classList.add("block");

		// Remove animation open
		compCuest_panel.classList.remove("finCuestionario");
	}
}
