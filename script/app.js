const navWrapper = document.querySelector(".nav__wrapper");
const navLinks = document.querySelector(".nav__wrapper__links");
const navToggler = document.querySelector(".nav__wrapper__drawer");
const nav = document.querySelector(".nav");

navToggler.addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains("nav__wrapper__drawer")) {
    const togglerElems = e.currentTarget.children;

    [...togglerElems].forEach((el) => {
      el.classList.toggle("nav__menu__show");
    });
    navLinks.classList.toggle("nav__links__show");
  }
});
