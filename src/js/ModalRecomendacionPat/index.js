let rec_open = document.getElementById("recomendacion_open");
let rec_close = document.getElementById("recomendacion_close");
let rec_panel = document.getElementById("recomendacion_panel");

if (rec_open !== null && rec_close !== null) {
	rec_open.addEventListener("click", modalRecomendacion);
	rec_close.addEventListener("click", modalRecomendacion);
}

function modalRecomendacion() {
	if (rec_panel.classList.contains("hidden")) {
		// Show modal
		rec_panel.classList.remove("hidden");
		rec_panel.classList.add("flex");
		rec_panel.classList.add("block");

		// Delete button
		rec_open.classList.add("hidden");
		rec_open.classList.remove("block");

		// Start animation open
		rec_panel.classList.add("recomendacion_open");
	} else {
		// Delete modal
		rec_panel.classList.add("hidden");
		rec_panel.classList.remove("flex");
		rec_panel.classList.remove("block");

		// Show button
		rec_open.classList.remove("hidden");
		rec_open.classList.add("block");

		// Remove animation open
		rec_panel.classList.remove("recomendacion_open");
	}
}
