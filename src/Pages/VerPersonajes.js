import getData from '../Connections/Helpers/getData.js'
import { CardPersonaje } from '../Components/CardPersonaje.js'
import { BtnMas } from '../Components/Others/BtnMas.js'

const VerPersonajes = async () => {

    const personajes = await getData()

    return(
        `
        <div class="container my-container">
            <div class="row" id="myListPersonajes">
                ${
                    personajes.results.map(personaje => CardPersonaje(personaje)).join('')
                }
            </div>
            <div class="row">
                <div class="col s12">
                    ${
                        BtnMas(personajes.info.next)
                    }
                </div>
            </div>
        </div>
    `
    )
}

export { VerPersonajes }