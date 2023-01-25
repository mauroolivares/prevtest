//let messageRec_open = document.getElementById("finCuestionario");
let messageRec_close = document.getElementById("messageRecomendacion_close");
let messageRec_panel = document.getElementById("messageRecomendacion_panel");

if (messageRec_close !== null) {
	//messageRec_open.addEventListener("click", modalMessageRec);
	messageRec_close.addEventListener("click", modalMessageRec);
}

function modalMessageRec() {
	if (messageRec_panel.classList.contains("hidden")) {
		// Show modal
		messageRec_panel.classList.remove("hidden");
		messageRec_panel.classList.add("flex");
		messageRec_panel.classList.add("block");
		//messageRec_panel.classList.add("finCuestionario");
	} else {
		// Delete modal
		messageRec_panel.classList.add("hidden");
		messageRec_panel.classList.remove("flex");
		messageRec_panel.classList.remove("block");
		// Show button
		//messageRec_open.classList.remove("hidden");
		//messageRec_open.classList.add("block");
		//messageRec_panel.classList.remove("finCuestionario");
	}
}
