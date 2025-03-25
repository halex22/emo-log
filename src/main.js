import './style.css'
import DayComponent from './components/day-component'
import dataService from './services/data-service'
import EmojiContainer from './components/emoji-component'
import EmojiDialog from './components/dialog-component'
import emojis from './emojis.json'

console.log(emojis)

console.log(Object.entries(emojis).forEach((key, value) => console.log(key, value)))