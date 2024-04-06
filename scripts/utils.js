import Card from "./Card.js";

const profileNameElement = document.querySelector(".profile__name");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAboutElement = document.querySelector(".profile__info");
const profileAddButton = document.querySelector(".profile__add-button");
const profileCloseButton = document.querySelector(".popup__button-close");
const formCard = document.forms.form2;
const popupElement = document.querySelector(".popup");
const editPopupElement = document.querySelector("#popup-profile");
const editProfileButton = editPopupElement.querySelector(
  "#profile-save-button"
);
const nameInput = document.querySelector("#input-name");
const JobInput = document.querySelector("#input-about");
const profileName = profileNameElement.textContent;
const profileAbout = profileAboutElement.textContent;
const editPopupImage = document.querySelector("#popup-add-card");
const containerPopupImage = editPopupImage.querySelector(
  "#popup-add-container"
);
const newImageCloseButton = document.querySelector("#popup-close-add-button");
const addCardInputTitle = document.querySelector("#input-title");
const addCardInputUrl = document.querySelector("#input-url");

export const templateCard = document.querySelector(".template-card");
export const cardArea = document.querySelector(".elements");

export const popupImage = document.querySelector("#popup-image");
export const popupImageView = popupImage.querySelector(".popup__image-view");
export const popupTitle = popupImage.querySelector(".popup__title-image");
export const cardElement = templateCard
  .cloneNode(true)
  .content.querySelector(".element");
const imageCloseButton = popupImage.querySelector("#popup-close-image");

nameInput.value = profileName;
JobInput.value = profileAbout;

export const initialCards = [
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
function handlePopupClick() {
  editProfileButton.classList.add("popup__button_disabled");
  editPopupElement.classList.add("popup_opened");
}
function closeProfilePopup() {
  editPopupElement.classList.remove("popup_opened");
}

//Cerrar imagen
function handleCloseImage() {
  popupImage.classList.remove("popup_opened");
}

//Abrir y cerrar card form
function handleOpenCardForm() {
  editPopupImage
    .querySelector("#addcard-button")
    .classList.add("popup__button_disabled");
  editPopupImage.classList.add("popup_opened");
}
export function handleCloseCardForm() {
  editPopupImage.classList.remove("popup_opened");
}

//Editar profile form
export function handleProfileFormSubmit() {
  profileNameElement.textContent = nameInput.value;
  profileAboutElement.textContent = JobInput.value;
  closeProfilePopup();
}

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

//Cerrar con boton esc
function handleCloseEsc() {
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      closeProfilePopup();
      handleCloseCardForm();
      handleCloseImage();
      document.removeEventListener("keydown", handleCloseEsc);
    }
  });
}

//Cerrar ventanas emergentes
function handleCloseClickPopup(evt) {
  if (evt.target.classList.contains("popup_opened")) {
    closeProfilePopup();
    handleCloseCardForm();
    handleCloseImage();
  }
}

profileEditButton.addEventListener("click", handlePopupClick);
profileCloseButton.addEventListener("click", closeProfilePopup);
editProfileButton.addEventListener("click", handleProfileFormSubmit);
profileAddButton.addEventListener("click", handleOpenCardForm);
newImageCloseButton.addEventListener("click", handleCloseCardForm);
imageCloseButton.addEventListener("click", handleCloseImage);
formCard.addEventListener("submit", handleAddCardSubmit);
handleCloseEsc();
popupElement.addEventListener("click", handleCloseClickPopup);
editPopupImage.addEventListener("click", handleCloseClickPopup);
popupImage.addEventListener("click", handleCloseClickPopup);

export {};
