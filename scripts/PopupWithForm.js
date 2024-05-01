import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitHandler) {
    super(popupSelector);
    this._formSubmitHandler = formSubmitHandler;
    this._form = this._popupElement.querySelector(".popup__form");
    this._handleSubmit = this.handleSubmit.bind(this);
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll("input");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this._formSubmitHandler(this._getInputValues(), "edit");
    this.close();
  }

  setEventListeners() {
    this._form.addEventListener("submit", this._handleSubmit);
  }

  open() {
    super.open();
  }

  close() {
    super.close();
    this._form.reset();
  }
}
