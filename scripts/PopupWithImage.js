import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    document.querySelector(".popup__image-view").src = link;
    document.querySelector(".popup__image-view").alt = name;
    document.querySelector(".popup__title-image").textContent = name;
    super.open();
  }

  setEventListeners() {
    this._popupElement
      .querySelector(".image-container__close")
      .addEventListener("click", () => {
        super.close();
      });

    super.setEventListeners();
  }
}
