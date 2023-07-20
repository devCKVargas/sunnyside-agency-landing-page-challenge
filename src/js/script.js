const navMenu = document.querySelector(".nav__menu");
const header = document.getElementsByTagName("header")[0];
const heroArrow = document.querySelector(".hero__arrow");

window.onscroll = () => {
	if (window.scrollY > 100) {
		header.classList.add("sticky");
		header.style.setProperty("--selection-background", "var(--clr-accent)");
	} else {
		header.classList.remove("sticky");
		header.style.setProperty("--selection-background", "var(--clr-primary)");
	}
};

navMenu.addEventListener("click", () => {
	const navList = document.querySelector(".nav__list");
	navList.classList.toggle("hidden");
});

// const heroArrow = document.querySelector(".hero__arrow");
// const header = document.getElementsByTagName("header");
// const navBarScrollFix = () => {
// 	const navbarHeight = header.offsetHeight;
// 	const productSection = document.querySelector("#product-section");
// 	const section = productSection.getBoundingClientRect().top;

// 	window.scrollBy({
// 		top: section - navbarHeight, // Subtract navbar height as an offset
// 	});
// };

console.log(header.offsetHeight);
//

const productSection = document.querySelector("#product-section");

const navBarOffset = () => {
	const headerHeight = header.getBoundingClientRect().height;
	const elementPosition = productSection.getBoundingClientRect().top;
	window.scrollBy({
		top: elementPosition - headerHeight,
		behavior: "smooth",
	});
};

heroArrow.addEventListener("click", () => {
	navBarOffset();
});
