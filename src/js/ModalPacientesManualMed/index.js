let pManualMed_open = document.getElementById("pacientesManualMed_open");
let pManualMed_close = document.getElementById("pacientesManualMed_close");
let pManualMed_panel = document.getElementById("pacientesManualMed_panel");

if (pManualMed_open !== null && pManualMed_close !== null) {
	pManualMed_open.addEventListener("click", modalpManualMed);
	pManualMed_close.addEventListener("click", modalpManualMed);
}

function modalpManualMed() {
	if (pManualMed_panel.classList.contains("hidden")) {
		// Show modal
		pManualMed_panel.classList.remove("hidden");
		pManualMed_panel.classList.add("flex");
		pManualMed_panel.classList.add("block");

		// Delete button
		pManualMed_open.classList.add("hidden");
		pManualMed_open.classList.remove("block");

		// Start animation open
		pManualMed_panel.classList.add("notificacion_open");
	} else {
		// Delete modal
		pManualMed_panel.classList.add("hidden");
		pManualMed_panel.classList.remove("flex");
		pManualMed_panel.classList.remove("block");

		// Show button
		pManualMed_open.classList.remove("hidden");
		pManualMed_open.classList.add("block");

		// Remove animation open
		pManualMed_panel.classList.remove("notificacion_open");
	}
}
