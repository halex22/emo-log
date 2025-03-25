export default class EmojiContainer extends HTMLElement {
  #emoji;
  #emojiValue;
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
  }

  connectedCallback() {
    this.render()
  }

  set emoji(val) {
    this.#emoji = val
  }

  get emoji() {
    return this.#emoji
  }

  set emojiValue(val) {
    this.#emojiValue = val
  }

  get emojiValue() {
    return this.#emojiValue
  }

  render() {
    const span = document.createElement('span')
    const emoji = document.createTextNode(this.emoji)
    span.appendChild(emoji)
    this.shadowRoot.appendChild(span)
  }

}

customElements.define('emoji-container', EmojiContainer)