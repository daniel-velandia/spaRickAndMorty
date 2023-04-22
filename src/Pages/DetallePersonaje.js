import getData from '../Connections/Helpers/getData.js'
import getHash from '../Connections/Helpers/getHash.js'
import { CardDetallePersonaje } from '../Components/CardDetallePersonaje.js'

const DetallePersonaje = async () => {

    const id = getHash()
    const personaje = await getData('/' + id)
    
    return (`
        <div class="container my-container">
            ${CardDetallePersonaje(personaje)}
        </div>
    `)
        
}

export { DetallePersonaje }