//export default

class Card {
  constructor(title, url) {
    this._title = title;
    this._url = url;
  }

  _getCloneFromTemplate() {
    const cardElement = document
      .querySelector(".template-card")
      .content.querySelector(".elements")
      .cloneNode(true);

    return cardElement;
  }
}

// generateCard(obj) {
//   this._element = this._getTemplate();
//   this._element.querySelector(".element__image").src = this._url;
//   this._element.querySelector(".element__image").alt = this._title;
//   this._element.querySelector(".element__name").titleContent = this._title;
//   this._setEventListeners(obj);
//   return this._element;
// }

// _handleOpenPopup(obj) {
//   obj.imgPopup.querySelector(".popup__container-image").src = this._link;
//   obj.imgPopup.querySelector(".popup__container-image").alt = this._name;
//   obj.imgPopup.querySelector(".popup__title-image").titleContent = this._name;
//   obj.page.prepend(obj.imgPopup);
//   document.addEventListener("keydown", obj.closeEscape);
// }
//}

//////estos son los const que se deben llamar
// const templatePokemon = document.querySelector(".template-pokemon");
// const pokemonsArea = document.querySelector(".pokemons-area");

// class Pokemon {
//   constructor(number, nick) {
//     this._number = number;
//     this.nick = nick;
//   }
//   setPokemonProperties() {
//     this._card = templatePokemon
//       .cloneNode(true)
//       .content.querySelector(".pokemon");
//     this.btnDelete = this._card.querySelector(".pokemon__button_delete");
//     this.btnAnimate = this._card.querySelector(".pokemon__button_animate");
//     this.cardImage = this._card.querySelector(".pokemon__image");
//     this.cardTitle = this._card.querySelector(".pokemon__title");
//     this.cardTitle.textContent = this.nick;
//     this.cardImage.src = "https............/${this._number}.png";
//   }

//   handleAnimation() {}
//   handleDelete() {
//     this._card.remove();
//   }

//   _setEventListeners() {
//     this.btnDelete.addEventListener("click", () => {
//       this.handleDelete();
//     });
//   }

//   generatePokemon() {
//     this.setPokemonProperties();
//     this._setEventListeners();
//     return this._card;
//   }
// }

// const pokemonTest = new Pokemon(25, "pikachu");
// const pokemonToRender = pokemonTest.generatePokemon;

// pokemonsArea.append(pokemonToRender);
