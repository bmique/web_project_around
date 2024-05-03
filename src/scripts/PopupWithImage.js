import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    super.open();
    const popupImage = document.querySelector("#popup-image");
    const popupImageView = popupImage.querySelector(".popup__image-view");
    const popupTitle = popupImage.querySelector(".popup__title-image");

    popupImageView.src = link;
    popupImageView.alt = name;
    popupTitle.textContent = name;
  }

  close() {
    super.close();
  }
}
