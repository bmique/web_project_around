import "./styles/index.css";
import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import Section from "../scripts/Section.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import UserInfo from "../scripts/UserInfo.js";

const profileEditButton = document.querySelector(".profile__edit-button");
const nameInput = document.querySelector("#input-name");
const jobInput = document.querySelector("#input-about");
const templateCard = document.querySelector(".template-card");
const profileAddButton = document.querySelector(".profile__add-button");

const yosemiteImg = new URL(
  "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  import.meta.url
);
const louiseImg = new URL(
  "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  import.meta.url
);
const calvasImg = new URL(
  "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  import.meta.url
);
const latemarImg = new URL(
  "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  import.meta.url
);
const vanoiseImg = new URL(
  "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  import.meta.url
);
const dibraiesImg = new URL(
  "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  import.meta.url
);

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: yosemiteImg,
  },
  {
    name: "Lago Louise",
    link: louiseImg,
  },
  {
    name: "Montañas Calvas",
    link: calvasImg,
  },
  {
    name: "Latemar",
    link: latemarImg,
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: vanoiseImg,
  },
  {
    name: "Lago di Braies",
    link: dibraiesImg,
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
