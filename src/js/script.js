const navMenu = document.querySelector(".nav__menu");
const header = document.getElementsByTagName("header")[0];
const heroArrow = document.querySelector(".hero__arrow");

window.onscroll = () => {
	if (window.scrollY > 100) {
		header.classList.add("sticky");
		header.style.setProperty("--selection-bg", "var(--clr-accent)");
	} else {
		header.classList.remove("sticky");
		header.style.setProperty("--selection-bg", "var(--clr-primary)");
	}
};

navMenu.addEventListener("click", () => {
	const navList = document.querySelector(".nav__list");
	navList.classList.toggle("hidden");
});

const links = document.querySelectorAll(".nav__item");
const scrollToSection = function (e) {
	e.preventDefault();
	const href = this.getAttribute("href");
	const offsetTop = document.querySelector(href).offsetTop;
	const navbarHeight = header.offsetHeight;

	scroll({
		top: offsetTop - navbarHeight,
		// behavior: "smooth", //! for future reference
	});
};

heroArrow.addEventListener("click", scrollToSection);
