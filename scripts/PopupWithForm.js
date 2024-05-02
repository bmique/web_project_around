import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitHandler) {
    super(popupSelector);
    this._formSubmitHandler = formSubmitHandler;
    this._form = this._popupElement.querySelector(".popup__form");
    this._handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this._handleSubmitAdd = this.handleSubmitAdd.bind(this);
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll("input");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  handleSubmitEdit(evt) {
    evt.preventDefault();
    this._formSubmitHandler(this._getInputValues(), "edit");
    this.close();
  }

  handleSubmitAdd(evt) {
    evt.preventDefault();
    this._formSubmitHandler(this._getInputValues(), "add");
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._handleSubmitEdit);
    this._form.addEventListener("submit", this._handleSubmitAdd);
  }

  open() {
    super.open();
  }

  close() {
    super.close();
    this._form.reset();
  }
}
