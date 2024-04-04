export default class Card {
  constructor(name, link, template) {
    this._name = name;
    this._link = link;
    this._template = template;
  }

  _getCloneFromTemplate() {
    this._cardElement = this._template
      .cloneNode(true)
      .content.querySelector(".element");
    this._setCardProperties();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    return this._cardElement;
  }

  _setCardProperties() {
    this._cardImage = this._cardElement.querySelector(".element__image");
    this._cardTitle = this._cardElement.querySelector(".element__name");
    this._likeButton = this._cardElement.querySelector(".element__like-button");
    this._removeButton = this._cardElement.querySelector(".element__remove");
    this._popupImage = document.querySelector("#popup-image");
    console.log(this._popupImage);
    this._popupImageView = this._popupImage.querySelector(".popup__image-view");
    this._imageCloseButton =
      this._popupImage.querySelector("#popup-close-image");
    this._popupTitle = this._popupImage.querySelector(".popup__title-image");
  }

  _handleLike() {
    this._like = this._likeButton.classList.toggle("element__like-heart");
  }

  _handleRemoveCard() {
    this._removeCard = this._cardElement.remove();
  }

  _handleOpenImage() {
    this._popupImageView.src = this._link;
    this._popupImageView.alt = this._name;
    this._popupTitle.textContent = this._name;
    this._popupImage.classList.add("popup_opened");
  }

  _handleCloseImage() {
    console.log("hola");
    this._popupImage.remove("popup_opened");
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleOpenImage();
    });

    this._popupImage.addEventListener("click", () => {
      this._handleCloseImage();
    });

    this._imageCloseButton.addEventListener("click", () => {
      this._handleCloseImage();
    });

    this._likeButton.addEventListener("click", () => {
      this._handleLike();
    });

    this._removeButton.addEventListener("click", () => {
      this._handleRemoveCard();
    });
  }

  generateCard() {
    this._getCloneFromTemplate();
    this._setEventListeners();

    return this._cardElement;
  }
}
