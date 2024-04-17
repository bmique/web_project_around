import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";

export const profileNameElement = document.querySelector(".profile__name");
export const profileAboutElement = document.querySelector(".profile__info");
export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);
export const popupElement = document.querySelector(".popup");
export const editPopupElement = document.querySelector("#popup-profile");
export const profileCloseButton = editPopupElement.querySelector(
  ".popup__button-close"
);
export const nameInput = editPopupElement.querySelector("#input-name");
export const jobInput = editPopupElement.querySelector("#input-about");
export const editPopupImage = document.querySelector("#popup-add-card");
const containerPopupImage = editPopupImage.querySelector(
  "#popup-add-container"
);
export const profileAddButton = document.querySelector(".profile__add-button");
export const newImageCloseButton = document.querySelector(
  "#popup-close-add-button"
);
export const popupImage = document.querySelector("#popup-image");
export const popupImageView = popupImage.querySelector(".popup__image-view");
export const popupTitle = popupImage.querySelector(".popup__title-image");

const templateCard = document.querySelector(".template-card");
const cardArea = document.querySelector(".elements");

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
    name: "Montañas Calvas",
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

//validación
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

//cards
initialCards.forEach((e) => {
  const cardTest = new Card(e.name, e.link, templateCard);
  cardArea.append(cardTest.generateCard());
});

//addcard
function handleAddCardSubmit(evt) {
  if (evt.submitter.classList.contains("popup__button-save")) {
    const card = new Card(
      addCardInputTitle.value,
      addCardInputUrl.value,
      templateCard
    );
    const newCardElement = card.generateCard();
    cardArea.prepend(newCardElement);
  }
  handleCloseCardForm(editPopupImage, containerPopupImage);
  formCard.reset();
}
