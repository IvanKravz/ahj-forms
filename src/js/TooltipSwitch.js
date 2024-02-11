export default class TooltipSwitch {
  constructor(button, tooltip) {
    this.button = button;
    this.tooltip = tooltip;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  init() {
    this.drawUI();
    const targetEl = this.button.button.children[0];
    targetEl.addEventListener('click', () => this.showTooltip(targetEl));
  }

  drawUI() {
    if (this.container === null) {
      throw new Error('container is not bind to DOM');
    }
    this.button.bindToDOM(this.container);
    this.tooltip.bindToDOM(document.body);
    this.button.createButton();
    this.tooltip.createTooltip();
  }

  showTooltip(targetElem) {
    this.tooltip.element.classList.toggle('display_none');
    const coordsTarget = targetElem.getBoundingClientRect();
    const coordsTooltip = this.tooltip.element.getBoundingClientRect();
    this.tooltip.element.style.bottom = `${coordsTarget.top + coordsTarget.height + 8}px`;
    this.tooltip.element.style.left = `${coordsTarget.left - (coordsTooltip.width / 2 - coordsTarget.width / 2)}px`;
    setTimeout(() => {
      this.tooltip.element.classList.add('display_none');
    }, 5000);
  }
}
