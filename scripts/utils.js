//Abrir y cerrar profile form
const handlePopupClick = () => {
  const editPopupElement = document.querySelector("#popup-profile");
  editPopupElement.classList.add("popup_opened");
};

const closeProfilePopup = () => {
  editPopupElement.classList.remove("popup_opened");
};

//Abrir y cerrar card form
const handleOpenCardForm = () => {
  editPopupImage.classList.add("popup_opened");
};
const handleCloseCardForm = () => {
  editPopupImage.classList.remove("popup_opened");
};

//Cerrar con boton esc
const closeButtonEsc = document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closeProfilePopup();
    handleCloseCardForm();
    const card = new Card({}, ".template-card");
    document.removeEventListener("keydown", closeButtonEsc);
  }
});

export { handlePopupClick, closeProfilePopup };
