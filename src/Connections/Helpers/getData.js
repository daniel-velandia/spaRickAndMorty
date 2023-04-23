import { OBTENER_PERSONAJES_ENDPOINT } from './endPoints.js'

export default async (id) => {

    let apiUrl = OBTENER_PERSONAJES_ENDPOINT

    if (id) {

        if(id.length < 5) {

            apiUrl = `${OBTENER_PERSONAJES_ENDPOINT}${id}`

        } else {
            
            apiUrl = id
        }
    }

    try {
        
        const res = await fetch(apiUrl)
        const data = res.json()

        return data

    } catch (error) {

        console.log('Error fetch: ', error)
    }
}