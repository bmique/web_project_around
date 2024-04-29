import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

const profileEditButton = document.querySelector(".profile__edit-button");
const page = document.querySelector(".page");
const addCardInputTitle = document.querySelector("#input-title");
const addCardInputUrl = document.querySelector("#input-url");
const cardArea = document.querySelector(".elements");
const formCard = document.forms.form2;

const nameInput = document.querySelector("#input-name");
const jobInput = document.querySelector("#input-about");
const editPopupImage = document.querySelector("#popup-add-card");
const containerPopupImage = editPopupImage.querySelector(
  "#popup-add-container"
);
const templateCard = document.querySelector(".template-card");

export const profileAddButton = document.querySelector(".profile__add-button");
export const newImageCloseButton = document.querySelector(
  "#popup-close-add-button"
);

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__info",
});
const userData = userInfo.getUserInfo();

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

const popupWithImage = new PopupWithImage("#popup-image");

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

//section
const sectionCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardTest = new Card(item.name, item.link, templateCard, () =>
        popupWithImage.open(item.name, item.link)
      );
      const cardElement = cardTest.generateCard();
      sectionCards.addItem(cardElement);
    },
  },
  ".elements"
);

sectionCards.render();

// Profile form
function openProfile() {
  const popup = new Popup(".popup");
  nameInput.value = userData.name;
  jobInput.value = userData.job;

  const formElement = document.querySelector(".popup__form");
  new FormValidator(formElement, settings);

  popup.open();
  page.classList.add("fix");
}

profileEditButton.addEventListener("click", openProfile);

//
function formSubmitHandler(formValues, action) {
  if (action === "edit") {
    userInfo.setUserInfo({ name: nameInput.value, job: jobInput.value });
  } else if (action === "add") {
    const newCard = new Card(
      formValues["input-name"],
      formValues["input-about"],
      ".template-card",
      popupWithImage.open
    ).generateCard();
    defaultCardList.setItem(newCard);
    console.log(formValues);
  }
  const popup = new Popup(".popup");
  popup.close();
  page.classList.remove("fix");
}

//popupWithForm
const popupWithFormEdit = new PopupWithForm(".profile__edit", (formValues) =>
  formSubmitHandler(formValues, "edit")
);
const popupWithFormAdd = new PopupWithForm("#popup-add-card", (formValues) =>
  formSubmitHandler(formValues, "add")
);

popupWithFormEdit.setEventListeners();
popupWithFormAdd.setEventListeners();

// //addcard
// function handleAddCardSubmit(evt) {
//   if (evt.submitter.classList.contains("popup__button-save")) {
//     const card = new Card(
//       addCardInputTitle.value,
//       addCardInputUrl.value,
//       templateCard
//     );
//     const newCardElement = card.generateCard();
//     cardArea.prepend(newCardElement);
//   }
//   handleCloseCardForm(editPopupImage, containerPopupImage);
//   formCard.reset();
// }

// handleAddCardSubmit();
