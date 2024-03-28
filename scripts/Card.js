export default class Card {
  constructor(name, link, selector) {
    this._name = name;
    this._link = link;
    this._selector = selector;
  }

  _getCloneFromTemplate() {
    this._cardElement = selector
      .cloneNode(true)
      .content.querySelector(".element");
    this._cardLink = this._cardImage.src;
    this._cardName = this._cardImage.alt;
    this._cardText = this._cardTitle.textContent;

    return this._cardElement;
  }

  _setCardProperties() {
    this._templateCard = document.querySelector(".template-card");
    this._cardImage = cardElement.querySelector(".element__image");
    this._cardTitle = cardElement.querySelector(".element__name");
    this._likeButton = cardElement.querySelector(".element__like-button");
    this._removeButton = cardElement.querySelector(".element__remove");
    this._imageCloseButton = document.querySelector("#popup-close-image");
    this._popupImageView = document.querySelector(".popup__image-view");
    this._popupImage = document.querySelector("#popup-image");
    this._popupTitle = document.querySelector(".popup__title-image");
  }

  _handleLike() {
    this._like = this._likeButton.classList.toggle("element__like-heart");
  }
  _handleRemoveCard() {
    this._removeCard = this._cardElement.remove();
  }
  _handleOpenImage() {
    this._image = this._popupImageView.src;
    this._titleImage = this._popupImageView.alt;
    this._titlePopup = this._popupTitle.textContent;
    this._popupImage.classList.add("popup_opened");
  }
  _handleCloseImage() {
    this._image = " ";
    this._popupImage.classList.remove("popup_opened");
  }

  _setEventListeners() {
    this._element.addEventListener("click", () => {
      this._handleOpenImage();
    });

    this._imageCloseButton.addEventListener("click", () => {
      this._handleCloseImage();
    });

    this._likeButton.addEventListener("click", () => {
      this._handleLike();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleOpenImage();
    });

    this._removeButton.addEventListener("click", () => {
      this._handleRemoveCard();
    });
  }

  generateCard(evt) {
    evt.preventDefault();
    this._element = this._getCloneFromTemplate();
    this._setCardProperties();
    this._setEventListeners();

    return this._element;
  }

  //   const inputCardTitle = document.querySelector("#input-title");
  //   const inputCardUrl = document.querySelector("#input-url");
  //   const newCard = cardGenerator(inputCardTitle.value, inputCardUrl.value);
  //   cardArea.prepend(newCard);
  //
  //   formCard.reset();

  // this._newCard = this._element(
  //   this._inputCardTitle.value,
  //   this._inputCardUrl.value
  // );

  // this._inputCardTitle = document.querySelector("#input-title");
  // this._inputCardUrl = document.querySelector("#input-url");
}
