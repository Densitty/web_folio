const navWrapper = document.querySelector(".nav__wrapper");
const navLinks = document.querySelector(".nav__wrapper__links");
const navToggler = document.querySelector(".nav__wrapper__drawer");
const nav = document.querySelector(".nav");
const contactDetails = {
  email: "peter.oyebode@protonmail.com",
  phoneNumber: "+234 803 927 2801",
};

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
const nameText = "peter oye";
let start = 0;

function typewriteName() {
  if (start < nameText.length) {
    nameElement.textContent += nameText.charAt(start);
    start++;
    setTimeout(typewriteName, 300);
  }
}

typewriteName();

// target the header section modal
const displayModal = document.querySelector(".modal--btn");
const modalCloseBtn = document.querySelector(".modal__wrapper__close");
const modal = document.querySelector(".modal");
const modalWrapper = document.querySelector(".modal__wrapper");
const mailBlock = document.querySelector(".mail--block");
const phoneBlock = document.querySelector(".phone--block");

displayModal.addEventListener("click", () => {
  modal.classList.add("show--modal");

  phoneBlock.textContent = contactDetails.phoneNumber;
  mailBlock.textContent = contactDetails.email;

  modalWrapper.classList.add("show--modal__wrapper");
});

modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("show--modal");

  modalWrapper.classList.remove("show--modal__wrapper");

  phoneBlock.textContent = "";
  mailBlock.textContent = "";
});

// contact form
const form = document.querySelector(".form");
const senderName = document.querySelector(".sender--name");
const contactModal = document.querySelector(".contact__modal");
const contactResponse = document.querySelector(
  ".contact__modal__wrapper__contents__text"
);
const contactClose = document.querySelector(".contact__modal__wrapper__close");
const MAIL_PUBLIC_KEY = "Ob-9jW4L-X1nfvjbz";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  if (!name || !validateEmail(email) || !subject || !message) {
    feedback(name);

    contactResponse.textContent = `You need to provide your name, valid email, subject and message to send me your message.`;
  }

  if (name && validateEmail(email) && subject && message) {
    emailjs.sendForm("xuanang_folio", "folio_contact", form).then(
      function () {
        feedback(name);
        contactResponse.textContent = `Thanks for contacting me. I will reply your message within the next 24 hours.`;
        console.log("SUCCESS!");
      },
      function (error) {
        feedback(name);
        contactResponse.textContent = `Error in sending your message. Please try resending again.`;

        console.log("FAILED...", error);
      }
    );

    // reset the form on successful sending of the message
    form.reset();
  }
});

//
contactClose.addEventListener("click", () => {
  contactModal.classList.remove("display__response");
  senderName.textContent = "";
  contactResponse.textContent = "";
});

// validate email
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function feedback(name) {
  contactModal.classList.add("display__response");
  senderName.textContent = `${name}`;
}

// display year
const year = document.querySelector(".footer__content__year");
year.textContent = new Date().getFullYear();
