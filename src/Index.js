import { App } from "./Routes/App.js"
import './Assets/Css/style.css'
import './Assets/Js/funtions.js'

console.log('spa corriendo...')

window.addEventListener('load', App)
window.addEventListener('hashchange', App)
