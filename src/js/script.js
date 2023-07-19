const navMenu = document.querySelector(".nav__menu");
const header = document.getElementsByTagName("header");

window.onscroll = () => {
	if (window.scrollY > 100) {
		header[0].classList.add("sticky");
		header[0].style.setProperty("--selection-background", "var(--clr-accent)");
	} else {
		header[0].classList.remove("sticky");
		header[0].style.setProperty("--selection-background", "var(--clr-primary)");
	}
};

navMenu.addEventListener("click", () => {
	const navList = document.querySelector(".nav__list");
	navList.classList.toggle("hidden");
});
