const profileNameElement = document.querySelector(".profile__name");
const profileAboutElement = document.querySelector(".profile__info");

const nameInput = document.querySelector("#input-name");
const JobInput = document.querySelector("#input-about");
const profileName = profileNameElement.textContent;
const profileAbout = profileAboutElement.textContent;

const profileSaveButton = document.querySelector("#profile-save-button");

const profileEditButton = document.querySelector(".profile__edit-button");
const editPopupElement = document.querySelector("#popup-profile");

const formElement = document.querySelector(".popup__form");
const profileCloseButton = document.querySelector(".popup__button-close");

const editPopupImage = document.querySelector("#popup-add-card");
const profileAddButton = document.querySelector(".profile__add-button");
const newImageCloseButton = document.querySelector("#popup-close-add-button");

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

function popupProfile() {
  nameInput.value = profileName;
  JobInput.value = profileAbout;
  editPopupElement.classList.add("popup_opened");
}
function handlePopupClick(event) {
  popupProfile();
}
function closeProfilePopup() {
  editPopupElement.classList.remove("popup_opened");
}
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileAboutElement.textContent = JobInput.value;
  closeProfilePopup();
}

//function handleOpenProfileForm() {
//  editPopupElement.classList.add("popup_opened");
//}
//function handleCloseProfileForm() {
//  editPopupElement.classList.remove("popup_opened");
//}

function handleOpenEditImage() {
  editPopupImage.classList.add("popup_opened");
}
function closeEditImagePopup() {
  editPopupImage.classList.remove("popup_opened");
}

function likeButton() {}

profileEditButton.addEventListener("click", handlePopupClick);
profileCloseButton.addEventListener("click", closeProfilePopup);
formElement.addEventListener("submit", handleProfileFormSubmit);

profileAddButton.addEventListener("click", handleOpenEditImage);
newImageCloseButton.addEventListener("click", closeEditImagePopup);

//profileEditButton.addEventListener("click", handleOpenProfileForm);
//
