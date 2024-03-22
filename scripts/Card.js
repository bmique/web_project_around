//export default

const popupImage = document.querySelector("#popup-image");
const popupImageView = document.querySelector(".popup__image-view");
const imageCloseButton = document.querySelector("#popup-close-image");

class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
  }

  _getCloneFromTemplate() {
    const cardElement = document
      .querySelector(".template-card")
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getCloneFromTemplate();
    this._setEventListeners();

    this._element.querySelector("element__image").src = this._link;
    this._element.querySelector(".element__image").alt = this._name;
    this._element.querySelector(".element__name").textContent = this._name;

    return this._element;
  }

  _handleOpenPopup() {
    this._image = popupImageView.src;
    popupImage.classList.add("popup_opened");
  }

  _handleClosePopup() {
    popupImageView.src = " ";
    popupImage.classList.remove("popup_opened");
  }

  _setEventListeners() {
    this._element.addEventListener("click", () => {
      this._handleOpenPopup();
    });

    imageCloseButton.addEventListener("click", () => {
      this._handleClosePopup();
    });
  }
}

initialCards.forEach((card) => {
  const card = new Card(card, ".template-card");
  const cardElement = card.generateCard();

  document.querySelector(".elements").append(cardElement);
});

// generateCard(obj) {
//   this._element = this._getTemplate();
//   this._element.querySelector(".element__image").src = this._link;
//   this._element.querySelector(".element__image").alt = this._name;
//   this._element.querySelector(".element__name").titleContent = this._name;
//   this._setEventListeners(obj);
//   return this._element;
// }

// _handleOpenPopup(obj) {
//   obj.imgPopup.querySelector(".popup__container-image").src = this._link;
//   obj.imgPopup.querySelector(".popup__container-image").alt = this._name;
//   obj.imgPopup.querySelector(".popup__title-image").titleContent = this._name;
//   obj.page.prepend(obj.imgPopup);
//   document.addEventListener("keydown", obj.closeEscape);
// }
//}
