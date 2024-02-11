export default class Tooltip {
  constructor(title, message) {
    this.title = title;
    this.message = message;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  static markup(title, message) {
    return `<div class="tooltip__content">
              <h3 class="tooltip__title">${title}</h3>
              <div class="tooltip__text">${message}</div>
            </div>
            <div class="tooltip__arrow"></div>`;
  }

  createTooltip() {
    if (this.container === null) {
      throw new Error('container is not bind to DOM');
    };

    this.element = document.createElement('div');
    this.element.className = 'element__tooltip tooltip display_none';
    this.element.innerHTML = Tooltip.markup(this.title, this.message);
    this.container.appendChild(this.element);
  }
}
