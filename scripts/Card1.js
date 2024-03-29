export default class Card1 {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    this._cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return this._cardTemplate;
  }

  generateCard(obj) {
    this._card = this._getTemplate();
    this._card.querySelector(".element__image").src = this._link;
    this._card.querySelector(".element__image").alt = this._name;
    this._card.querySelector(".element__name").textContent = this._name;
    this._setEventListeners(obj);
    return this._card;
  }

  _openPopupHandler(obj) {
    obj.imgPopup.querySelector(".popup__image-view").src = this._link;
    obj.imgPopup.querySelector(".popup__image-view").alt = this._name;
    obj.imgPopup.querySelector(".popup__title-image").textContent = this._name;
    obj.page.prepend(obj.imgPopup);
    document.addEventListener("keydown", obj.closeEscape);
  }

  _closePopupHandler(obj) {
    obj.imgPopup.remove();
  }

  _setEventListeners(obj) {
    this._card.querySelector(".elements__img").addEventListener("click", () => {
      this._openPopupHandler(obj);
    });

    obj.btnClose.addEventListener("click", () => {
      this.closePopupHandler(obj);
    });

    obj.imgPopup.addEventListener("click", () => {
      this.closePopupHandler(obj);
    });
  }
}
