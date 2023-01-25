let logout_open = document.getElementById("logout_open");
let logout_close = document.getElementById("logout_close");
let logout_panel = document.getElementById("logout_panel");

if (logout_open !== null && logout_close !== null) {
	logout_open.addEventListener("click", modalLogout);
	logout_close.addEventListener("click", modalLogout);
}

function modalLogout() {
	if (logout_panel.classList.contains("hidden")) {
		// Show modal
		logout_panel.classList.remove("hidden");
		logout_panel.classList.add("flex");
		logout_panel.classList.add("block");

		// Delete button
		logout_open.classList.add("hidden");
		logout_open.classList.remove("block");

		// Start animation open
		logout_panel.classList.add("logout_open");
	} else {
		// Delete modal
		logout_panel.classList.add("hidden");
		logout_panel.classList.remove("flex");
		logout_panel.classList.remove("block");

		// Show button
		logout_open.classList.remove("hidden");
		logout_open.classList.add("block");

		// Remove animation open
		logout_panel.classList.remove("logout_open");
	}
}
