import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { initialCards, templateCard, cardArea } from "./utils.js";

//FormValidator
const formElementProfile = document.querySelector("#popup_form-profile");
const formElementCard = document.querySelector(".popup__form-add");

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const validateForm = new FormValidator(formElementProfile, settings);
validateForm.enableValidation();

const validateFormCard = new FormValidator(formElementCard, settings);
validateFormCard.enableValidation();

initialCards.forEach((e) => {
  const cardTest = new Card(e.name, e.link, templateCard);
  cardArea.append(cardTest.generateCard());
});
