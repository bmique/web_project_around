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

    this._cardImage.src = link;
    this._cardImage.alt = title;
    this._cardTitle.textContent = title;

    return this._cardElement;
  }

  _setCardProperties() {
    this._templateCard = document.querySelector(".template-card");

    this._cardImage = cardElement.querySelector(".element__image");
    this._cardTitle = cardElement.querySelector(".element__name");
    this._likeButton = cardElement.querySelector(".element__like-button");
    this._removeButton = cardElement.querySelector(".element__remove");

    this._imageCloseButton = document.querySelector("#popup-close-image");
  }

  _hanldeLike() {
    this._like = likeButton.classList.toggle("element__like-heart");
  }
  _handleDislike() {}
  _handleSetLike() {}

  _handleRemoveCard() {}

  _handleOpenImage() {
    this._image = popupImageView.src;
    popupImage.classList.add("popup_opened");
  }

  _handleCloseImage() {
    popupImageView.src = " ";
    popupImage.classList.remove("popup_opened");
  }

  _setEventListeners() {
    this._element.addEventListener("click", () => {
      this._handleOpenImage();
    });

    imageCloseButton.addEventListener("click", () => {
      this._handleCloseImage();
    });

    likeButton.addEventListener("click", () => {
      _hanldeLike();
    });

    cardImage.addEventListener("click", () => {
      handleOpenImage(title, link);
    });

    removeButton.addEventListener("click", () => {
      cardElement.remove();
    });
  }

  generateCard() {
    this._element = this._getCloneFromTemplate();
    this._setCardProperties();
    this._setEventListeners();

    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__image").alt = this._name;
    this._element.querySelector(".element__name").textContent = this._name;

    return this._element;
  }
}
