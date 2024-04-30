import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitHandler) {
    super(popupSelector);
    this._formSubmitHandler = formSubmitHandler;
    this._form = document.querySelector(".popup__form");
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll("input");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.formSubmitHandler(this._getInputValues());
      this.close();
    });
  }

  open() {
    super.open();
  }

  close() {
    super.close();
    this._form.reset();
  }
}
