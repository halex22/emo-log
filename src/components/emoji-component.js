export default class EmojiContainer extends HTMLElement {
  #emoji;
  #emojiValue;
  #isSelected;
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

  get isSelected() {
    this.#isSelected
  }

  set isSelected(val) {
    this.#isSelected = val
  }

  style() {
    const style = document.createElement('style')
    this.shadowRoot.appendChild(style)
  }

  render() {
    const span = document.createElement('span')
    const emoji = document.createTextNode(this.emoji)
    span.appendChild(emoji)
    this.shadowRoot.appendChild(span)
    this.addEventListener('click', () => {
      console.log('you clicked', this.#emoji)
      this.dispatchEmoji()
    })
  }

  dispatchEmoji() {
    const event = new CustomEvent('emoji-value', {detail: this.emojiValue})
    document.dispatchEvent(event)
  }



}

customElements.define('emoji-container', EmojiContainer)