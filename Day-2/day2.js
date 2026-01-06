const menu = document.querySelector(".menu");
const bars = menu.querySelectorAll("div");

menu.addEventListener("click", (e) => {
	e.preventDefault()
	bars.forEach((bar) => {
		bar.classList.toggle("animate");
		bar.classList.remove("no-animation");
	});
});
