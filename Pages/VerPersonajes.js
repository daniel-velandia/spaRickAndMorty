import getData from '../Connections/Helpers/getData.js'
import { CardPersonaje } from '../Components/CardPersonaje.js'

const VerPersonajes = async () => {

    const personajes = await getData()
    
    return (`
        <div class="container my-container">
            <div class="row">
                ${
                    personajes.results.map(personaje => CardPersonaje(personaje)).join('')
                }
            </div>
        </div>
    `)
        
}

export { VerPersonajes }