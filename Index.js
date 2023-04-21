import { App } from "./Routes/App.js";

console.log('spa corriendo...')

window.addEventListener('load', App)
window.addEventListener('hashchange', App)
