export default class Popup {
  constructor(popupSelector) {
    this._popupElemet = document.querySelector(popupSelector);
    this._popupCloseButton = this._popupElemet.querySelector(
      ".popup__button-close"
    );
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElemet.classList.add("popup_opened");
    document.addEventListener("click", this._handleEscClose());
  }

  close() {
    this._popupElemet.classList.remove("popup_opened");
    document.removeEventListener("click", this._handleEscClose());
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  _isClickOutside(evt) {
    return evt.taget.classList.contains("popup_opened");
  }

  setEventListeners() {
    this._popupCloseButton.addEventListener("click", () => {
      this.close();
    });
    this._popupElemet.addEventListener("click", () => {
      if (this._isClickOutside) {
        this.close();
      }
    });
  }
}
