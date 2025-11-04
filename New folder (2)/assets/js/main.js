// Navigation toggle for mobile
(function () {
	var toggle = document.querySelector('.nav-toggle');
	var menu = document.getElementById('nav-menu');
	if (toggle && menu) {
		toggle.addEventListener('click', function () {
			var isOpen = menu.classList.toggle('open');
			toggle.setAttribute('aria-expanded', String(isOpen));
		});
	}

	// Dynamic year in footer
	var yearEl = document.getElementById('year');
	if (yearEl) {
		yearEl.textContent = String(new Date().getFullYear());
	}
})();


