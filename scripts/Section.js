export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._selector = selector;
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
