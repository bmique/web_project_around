import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { handlePopupClick, closeProfilePopup } from "./utils.js";

//FormValidator
const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const validateForm = new FormValidator(settings);
validateForm.enableValidation();

//Clonar cards

initialCards.forEach(() => {
  const cardArea = document.querySelector(".elements");
  const cloneCard = new Card(generateCard());
  cardArea.append(cloneCard);
});
