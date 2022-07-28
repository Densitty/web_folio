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

// Typewriter effect
const nameElement = document.querySelector(".header__data__contents__heading");
const nameText = "peter xuan'ang";
let start = 0;

function typewriteName() {
  if (start < nameText.length) {
    nameElement.textContent += nameText.charAt(start);
    start++;
    setTimeout(typewriteName, 300);
  }
}

typewriteName();

// target the modal
const displayModal = document.querySelector(".modal--btn");
const modalCloseBtn = document.querySelector(".modal__wrapper__close");
const modal = document.querySelector(".modal");
const modalWrapper = document.querySelector(".modal__wrapper");

displayModal.addEventListener("click", () => {
  modal.classList.add("show--modal");

  modalWrapper.classList.add("show--modal__wrapper");
});

modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("show--modal");

  modalWrapper.classList.remove("show--modal__wrapper");
});
