// import Card from "./Card.js";
// import FormValidator from "./FormValidator.js";
// import { showPopup, closePopup } from "./utils.js";

const profileNameElement = document.querySelector(".profile__name");
const profileAboutElement = document.querySelector(".profile__info");
const nameInput = document.querySelector("#input-name");
const JobInput = document.querySelector("#input-about");
const profileName = profileNameElement.textContent;
const profileAbout = profileAboutElement.textContent;
const profileSaveButton = document.querySelector("#profile-save-button");
const profileEditButton = document.querySelector(".profile__edit-button");
const editPopupElement = document.querySelector("#popup-profile");
const formElement = document.forms.form1;
const profileCloseButton = document.querySelector(".popup__button-close");
const editPopupImage = document.querySelector("#popup-add-card");
const profileAddButton = document.querySelector(".profile__add-button");
const newImageCloseButton = document.querySelector("#popup-close-add-button");
const templateCard = document.querySelector(".template-card");
const cardArea = document.querySelector(".elements");
const inputCardTitle = document.querySelector("#input-title");
const inputCardUrl = document.querySelector("#input-url");
const formCard = document.forms.form2;
const popupImage = document.querySelector("#popup-image");
const popupImageView = document.querySelector(".popup__image-view");
const popupTitle = document.querySelector(".popup__title-image");
const imageCloseButton = document.querySelector("#popup-close-image");
const popupElement = document.querySelector(".popup");
nameInput.value = profileName;
JobInput.value = profileAbout;

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

//Abrir y cerrar profile form
function handlePopupClick(event) {
  editPopupElement.classList.add("popup_opened");
}

function closeProfilePopup() {
  editPopupElement.classList.remove("popup_opened");
}

//Abrir y cerrar card form
function handleOpenCardForm() {
  editPopupImage.classList.add("popup_opened");
}

function handleCloseCardForm() {
  editPopupImage.classList.remove("popup_opened");
}

//Abrir y cerrar imagen
function handleOpenImage(title, link) {
  popupImageView.src = link;
  popupImageView.alt = title;
  popupTitle.textContent = title;
  popupImage.classList.add("popup_opened");
}
function handleCloseImage() {
  popupImage.classList.remove("popup_opened");
}

//Editar profile form
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileAboutElement.textContent = JobInput.value;
  closeProfilePopup();
}

//Clonar cards
function cardGenerator(title, link) {
  const cardElement = templateCard
    .cloneNode(true)
    .content.querySelector(".element");
  const cardImage = cardElement.querySelector(".element__image");
  const cardTitle = cardElement.querySelector(".element__name");
  const likeButton = cardElement.querySelector(".element__like-button");
  const removeButton = cardElement.querySelector(".element__remove");
  cardImage.src = link;
  cardImage.alt = title;

  cardTitle.textContent = title;

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("element__like-heart");
  });

  cardImage.addEventListener("click", function () {
    handleOpenImage(title, link);
  });

  removeButton.addEventListener("click", function () {
    cardElement.remove();
  });

  return cardElement;
}

initialCards.forEach(function (element) {
  const newCard = cardGenerator(element.name, element.link);
  cardArea.append(newCard);
});

//Crear cards
function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const newCard = cardGenerator(inputCardTitle.value, inputCardUrl.value);
  cardArea.prepend(newCard);

  handleCloseCardForm();
  formCard.reset();
}

//Cerrar con boton esc
document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    closeProfilePopup();
    handleCloseCardForm();
    handleCloseImage();
  }
});

//Cerrar ventanas emergentes
popupElement.addEventListener("click", function (event) {
  if (event.target.classList.contains("popup_opened")) {
    closeProfilePopup();
  }
});

editPopupImage.addEventListener("click", function (event) {
  if (event.target.classList.contains("popup_opened")) {
    handleCloseCardForm();
  }
});

popupImage.addEventListener("click", function (event) {
  if (event.target.classList.contains("popup_opened")) {
    handleCloseImage();
  }
});

profileEditButton.addEventListener("click", handlePopupClick);
profileCloseButton.addEventListener("click", closeProfilePopup);
formElement.addEventListener("submit", handleProfileFormSubmit);

profileAddButton.addEventListener("click", handleOpenCardForm);
newImageCloseButton.addEventListener("click", handleCloseCardForm);

formCard.addEventListener("submit", handleAddCardSubmit);
imageCloseButton.addEventListener("click", handleCloseImage);
