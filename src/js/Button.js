export default class Button {
  constructor(textContent) {
    this.textContent = textContent;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  createButton() {
    if (this.container === null) {
      throw new Error('container is not bind to DOM')
  };
    this.button = document.createElement('div');
    this.button.classList.add('button_popover');
    this.button.innerHTML = `<button class="button">${this.textContent}</button>`;
    this.container.appendChild(this.button);
  }
}
