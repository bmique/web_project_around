import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitEdit) {
    super(popupSelector);
    console.log(popupSelector, formSubmitEdit);
    this._formSubmitEdit = formSubmitEdit;
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
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.formSubmitEdit(this._getInputValues());
      this.close();
    });
  }

  open() {
    super.open();
    this._form.reset();
  }

  close() {
    super.close();
    this._form.reset();
  }
}
