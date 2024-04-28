export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    console.log(this._popupElement);
    this._handleEscClose = this._handleEscClose.bind(this);
    this.open = this.open.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("click", this._handleEscClose);
    this.setEventListeners();
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("click", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("popup_opened") ||
        evt.target.classList.contains("popup__button-close")
      ) {
        this.close();
      }
    });
  }
}
