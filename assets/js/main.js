const burbble = document.querySelectorAll(".burbble");

burbble.forEach(e => e.addEventListener("click", hiddenBurble));

function hiddenBurble(b) {
	b.target.style.opacity = "0";

	setTimeout(() => {
		b.target.style.opacity = ".5";
	}, 4000)
}
