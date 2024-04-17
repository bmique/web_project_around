export default class Popup {
  constructor(popupSelector) {
    this._popupElemet = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElemet.classList.add("popup_opened");
    document.addEventListener("click", this._handleEscClose());
  }

  close() {
    this._popupElemet.classList.remove("popup_opened");
    document.removeEventListener("click", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElemet.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("popup_opened") ||
        evt.target.classList.contains("popup__button-close")
      ) {
        this.close();
      }
    });
  }
}
