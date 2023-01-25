let notif_open = document.getElementById("notificacion_open");
let notif_close = document.getElementById("notificacion_close");
let notif_panel = document.getElementById("notificacion_panel");

if (notif_open !== null && notif_close !== null) {
	notif_open.addEventListener("click", modalNotificacion);
	notif_close.addEventListener("click", modalNotificacion);
}

function modalNotificacion() {
	if (notif_panel.classList.contains("hidden")) {
		// Show modal
		notif_panel.classList.remove("hidden");
		notif_panel.classList.add("flex");
		notif_panel.classList.add("block");

		// Delete button
		notif_open.classList.add("hidden");
		notif_open.classList.remove("block");

		// Start animation open
		notif_panel.classList.add("notificacion_open");
	} else {
		// Delete modal
		notif_panel.classList.add("hidden");
		notif_panel.classList.remove("flex");
		notif_panel.classList.remove("block");

		// Show button
		notif_open.classList.remove("hidden");
		notif_open.classList.add("block");

		// Remove animation open
		notif_panel.classList.remove("notificacion_open");
	}
}
