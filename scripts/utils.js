const profileNameElement = document.querySelector(".profile__name");
const profileAboutElement = document.querySelector(".profile__info");
const nameInput = document.querySelector("#input-name");
const JobInput = document.querySelector("#input-about");
const profileName = profileNameElement.textContent;
const profileAbout = profileAboutElement.textContent;
const profileEditButton = document.querySelector(".profile__edit-button");
const editPopupElement = document.querySelector("#popup-profile");
const formElement = document.forms.form1;
const profileCloseButton = document.querySelector(".popup__button-close");
const editPopupImage = document.querySelector("#popup-add-card");
const profileAddButton = document.querySelector(".profile__add-button");
const newImageCloseButton = document.querySelector("#popup-close-add-button");
const popupImage = document.querySelector("#popup-image");
nameInput.value = profileName;
JobInput.value = profileAbout;

//Abrir y cerrar profile form
function handlePopupClick() {
  editPopupElement.classList.add("popup_opened");
}
function closeProfilePopup() {
  editPopupElement.classList.remove("popup_opened");
}

//Cerrar image
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

export {};
