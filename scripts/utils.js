import Card from "./Card.js";

const page = document.querySelector(".page");
const profileNameElement = document.querySelector(".profile__name");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAboutElement = document.querySelector(".profile__info");
const profileAddButton = document.querySelector(".profile__add-button");
const profileCloseButton = document.querySelector(".popup__button-close");
const formElement = document.forms.form1;
const formCard = document.forms.form2;
const popupElement = document.querySelector(".popup");
const editPopupElement = document.querySelector("#popup-profile");
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
  editPopupImage.classList.add("popup_opened");
}
export function handleCloseCardForm() {
  editPopupImage.classList.remove("popup_opened");
}

//Editar profile form
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileAboutElement.textContent = JobInput.value;
  closeProfilePopup();
}

//addcard
function handleAddCardSubmit(evt) {
  evt.preventDefault();
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
imageCloseButton.addEventListener("click", handleCloseImage);
formCard.addEventListener("submit", handleAddCardSubmit);

export {};
