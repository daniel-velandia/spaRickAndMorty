import { Footer } from "../Layouts/Footer.js"
import { NavBar } from "../Layouts/NavBar.js"
import { VerPersonajes } from "../Pages/VerPersonajes.js"
import { DetallePersonaje } from "../Pages/DetallePersonaje.js"
import { Error404 } from "../Pages/Error404.js"
import resolverRutas from "../Connections/Helpers/resolverRutas.js"
import getHash from "../Connections/Helpers/getHash.js"

const rutas = {
    "/": VerPersonajes,
    "/detallePersonaje": DetallePersonaje
}

const App = async () => {

    const header = document.querySelector('header')
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')

    header.innerHTML = await NavBar()
    footer.innerHTML = await Footer()

    const ruta = await resolverRutas(getHash())

    const pagina = ( rutas[ruta] ) ? rutas[ruta] : Error404

    main.innerHTML = await pagina()
}

export { App }