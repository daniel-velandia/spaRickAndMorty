import { CardPersonaje } from "../Components/CardPersonaje"
import getData from "../Connections/Helpers/getData"

const CargarPersonajes = () => {

    const btn = document.getElementById('btnPersonajes')

    btn.addEventListener('click', async () => {
        
        const pagina = btn.dataset.url

        const personajes = await getData(pagina)

        const listPersonajes = document.getElementById('myListPersonajes')
        
        const content = personajes.results.map(personaje => CardPersonaje(personaje)).join('')

        const parser = new DOMParser()

        const doc = parser.parseFromString(content, 'text/html')

        const contentHtml = doc.body.getElementsByClassName('col')

        for (const card of contentHtml) {
            listPersonajes.append(card)
        }

        btn.dataset.url = personajes.info.next
    })
}

export { CargarPersonajes }