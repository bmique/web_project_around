import "./index.css";
import logoSrc from "../images/__logo.svg";
import profileSrc from "../images/image__profile.jpg";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

const profileImg = document.getElementById("profile-img");
profileImg.src = profileSrc;
const logo = document.getElementById("logo");
logo.src = logoSrc;
const profileEditButton = document.querySelector(".profile__edit-button");
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
    sectionCards.addItem(newCard);
  }
}

//popupWithForm
const popupWithFormEdit = new PopupWithForm("#popup-profile", (formValues) =>
  formSubmitHandler(formValues, "edit")
);
const popupWithFormAdd = new PopupWithForm("#popup-add-card", (formValues) =>
  formSubmitHandler(formValues, "add")
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
