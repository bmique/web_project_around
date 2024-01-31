const profileNameElement = document.querySelector(".profile__name");
const profileAboutElement = document.querySelector(".profile__info");

const profileName = profileNameElement.textContent;
const profileAbout = profileAboutElement.textContent;

const profileEditButton = document.querySelector(".profile__edit-button");
const editPopupElement = document.querySelector(".popup");

const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_name");
const JobInput = document.querySelector(".popup__input_type_about");

function setPopupInput() {
  nameInput.value = profileName;
  JobInput.value = profileAbout;
}

function openPopup() {
  editPopupElement.classList.add("popup_opened");
}

function handlePopupClick(event) {
  openPopup();
  setPopupInput();
}

function saveForm(event) {
  event.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileAboutElement.textContent = JobInput.value;
  closePopup();
}

profileEditButton.addEventListener("click", handlePopupClick);
