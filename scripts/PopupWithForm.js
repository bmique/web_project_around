import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(handleFormSubmit, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues;

  open() {}

  setEventListeners() {
    super.setEventListeners();
    this._popupElemet.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  }
}
