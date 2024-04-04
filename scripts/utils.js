const profileNameElement = document.querySelector(".profile__name");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAboutElement = document.querySelector(".profile__info");

const profileAddButton = document.querySelector(".profile__add-button");
const profileCloseButton = document.querySelector(".popup__button-close");
const formElement = document.forms.form1;

const editPopupElement = document.querySelector("#popup-profile");
const nameInput = document.querySelector("#input-name");
const JobInput = document.querySelector("#input-about");
const profileName = profileNameElement.textContent;
const profileAbout = profileAboutElement.textContent;

const editPopupImage = document.querySelector("#popup-add-card");
const newImageCloseButton = document.querySelector("#popup-close-add-button");

export const popupImage = document.querySelector("#popup-image");
export const popupImageView = popupImage.querySelector(".popup__image-view");
export const popupTitle = popupImage.querySelector(".popup__title-image");
const imageCloseButton = popupImage.querySelector("#popup-close-image");

nameInput.value = profileName;
JobInput.value = profileAbout;

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
function handleCloseCardForm() {
  editPopupImage.classList.remove("popup_opened");
}

//Editar profile form
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileAboutElement.textContent = JobInput.value;
  closeProfilePopup();
}

//Cerrar con boton esc
document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    closeProfilePopup();
    handleCloseCardForm();
    handleCloseImage();
  }
});

profileEditButton.addEventListener("click", handlePopupClick);
profileCloseButton.addEventListener("click", closeProfilePopup);
formElement.addEventListener("submit", handleProfileFormSubmit);
profileAddButton.addEventListener("click", handleOpenCardForm);
newImageCloseButton.addEventListener("click", handleCloseCardForm);
imageCloseButton.addEventListener("click", handleCloseImage);

export {};
