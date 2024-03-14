export default class Card {
  constructor(text, url, selector) {
    this._text = text;
    this._url = url;
    this._selector = selector;
  }
  _getCloneFromTemplate() {
    const cardElement = document
      .querySelector("#card-template")
      .content.querySelector("#card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard(obj) {
    this._element = this._getTemplate();
    this._element.querySelector(".element__image").src = this._url;
    this._element.querySelector(".element__image").alt = this._text;
    this._element.querySelector(".element__name").textContent = this._text;
    this._setEventListeners(obj);
    return this._element;
  }

  _handleOpenPopup(obj) {
    obj.imgPopup.querySelector(".image-container__img").src = this._link;
    obj.imgPopup.querySelector(".image-container__img").alt = this._name;
    obj.imgPopup.querySelector(".image-container__title").textContent =
      this._name;
    obj.page.prepend(obj.imgPopup);
    document.addEventListener("keydown", obj.closeEscape);
  }
}
