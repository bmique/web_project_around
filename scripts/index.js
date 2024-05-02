import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

const profileEditButton = document.querySelector(".profile__edit-button");
const page = document.querySelector(".page");
const nameInput = document.querySelector("#input-name");
const jobInput = document.querySelector("#input-about");
const templateCard = document.querySelector(".template-card");
const profileAddButton = document.querySelector(".profile__add-button");

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

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__info",
});

const popupWithImage = new PopupWithImage("#popup-image");

const formElementProfile = document.querySelector("#popup_form-profile");
const formElementCard = document.querySelector(".popup__form-add");

//validation
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

//Cards
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

function formSubmitHandler(formValues, action) {
  if (action === "edit") {
    userInfo.setUserInfo({ name: nameInput.value, job: jobInput.value });
  } else if (action === "add") {
    const newCard = new Card(
      formValues["name"],
      formValues["link"],
      templateCard,
      popupWithImage.open
    ).generateCard();
    sectionCards.setItem(newCard);
  }
}

//popupWithForm
const popupWithFormEdit = new PopupWithForm(
  "#popup-profile",
  formSubmitHandler
);
const popupWithFormAdd = new PopupWithForm(
  "#popup-add-card",
  formSubmitHandler
);

popupWithFormEdit.setEventListeners();
popupWithFormAdd.setEventListeners();

profileEditButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;

  popupWithFormEdit.open();
});

profileAddButton.addEventListener("click", popupWithFormAdd.open);

// function formSubmitAdd(formValues) {
//   const newCard = new Card(
//     formValues["input-name"],
//     formValues["input-about"],
//     templateCard,
//     popupWithImage.open
//   ).generateCard();
//   newSection.setItem(newCard);
// }
