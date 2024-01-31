const profileNameElement = document.querySelector(".profile__name");
const profileAboutElement = document.querySelector(".profile__info");

const profileName = profileNameElement.textContent;
const profileAbout = profileAboutElement.textContent;

const profileEditButton = document.querySelector(".profile__edit-button");
const editPopupElement = document.querySelector(".popup");

const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_type_name");
const JobInput = document.querySelector(".popup__input_type_about");

function openPopup() {
  editPopupElement.classList.add("popup_opened");
  nameInput.value = profileName;
  JobInput.value = profileAbout;
}

profileEditButton.addEventListener("click", openPopup);
console.log(nameInput);
