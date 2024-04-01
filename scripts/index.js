import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { handlePopupClick, closeProfilePopup } from "./utils.js";

const cardArea = document.querySelector(".elements");
const inputCardTitle = document.querySelector("#input-title");
const inputCardUrl = document.querySelector("#input-url");
const formCard = document.forms.form2;

//FormValidator
const formElement = document.querySelector(".popup__form");
const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const validateForm = new FormValidator(formElement, settings);
validateForm.enableValidation();

//Clonar cards
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Monta√±as Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

initialCards.forEach(() => {
  const cardTest = new Card().generateCard();
  cardArea.append(cardTest);
  formCard.reset();
});

// formCard.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const cardTest = new Card(inputCardUrl.value, inputCardTitle.value);
//   cardArea.append(cardTest.generateCard());
// });
