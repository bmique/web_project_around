import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._closeButton = this._popupElement.querySelector(
      ".popup__button-close"
    );
    this._closeButton.addEventListener("click", () => this.close());
  }

  open(name, link) {
    super.open();
    const popupImage = document.querySelector("#popup-image");
    const popupImageView = popupImage.querySelector(".popup__image-view");
    console.log(popupImageView);
    const popupTitle = popupImage.querySelector(".popup__title-image");

    popupImageView.src = link;
    popupImageView.alt = name;
    popupTitle.textContent = name;
  }

  close() {
    super.close();
    super.setEventListeners();
    document.removeEventListener("keydown", this._handleEscClose);
  }
}
