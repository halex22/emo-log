import emojis from '../emojis.json'

export default class EmojiDialog extends HTMLElement {
  currentEmoji;
  constructor() {
    super()
    // this.attachShadow({mode: 'open'})
  }

  connectedCallback() {
    this.render()
    document.addEventListener('emoji-value', (event) => {
      console.log(event)
    })
  }

  render() {
    this.dialog = document.createElement('dialog')
    this.dialog.classList.add('dialog-style')
    this.dialog.open = true
    this.appendChild(this.dialog)

    this.form = document.createElement('form')
    this.dialog.appendChild(this.form)

    const label = document.createElement('label')
    label.innerText = 'Click how you feel Today'
    this.form.appendChild(label)

    this.form.appendChild(this.createEmojis())


    this.form.appendChild(this.createTextArea())

    this.form.appendChild(this.createBtns())

    this.form.addEventListener('submit', (event) => {
      event.preventDefault()
    })
  }

  createTextArea() {
    const div = document.createElement('div')
    div.innerHTML = `
      <label style="display: block;" for="description">Add a description</label>
      <textarea name="description" id="description"></textarea>  
    `
    return div
  }

  createEmojis() {
    const div = document.createElement('div')
    Object.entries(emojis).forEach( emoji => {
      const emojiContainer = document.createElement('emoji-container')
      emojiContainer.emoji = emoji[1]
      emojiContainer.emojiValue = emoji[0]
      div.appendChild(emojiContainer)
    })
    return div
  }

  createBtns() {
    const div = document.createElement('div')
    div.classList.add('btn-container')
    div.innerHTML = `
    <button class="btn cancel-btn">cancel</button>
    <button class="btn ok-btn">ok</button>
    `
    return div
  }
}

customElements.define('emoji-dialog', EmojiDialog)