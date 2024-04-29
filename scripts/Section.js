export default class Section {
  constructor({ items, renderer }, selector) {
    console.log(items);
    this._items = items;
    this._renderer = renderer;
    this._selector = document.querySelector(selector);
  }

  addItem(e) {
    this._selector.prepend(e);
  }

  render() {
    this._items.forEach((e) => {
      this._renderer(e);
    });
  }
}
