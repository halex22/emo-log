export default class DayComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {}
}

customElements.define('day-component', DayComponent)