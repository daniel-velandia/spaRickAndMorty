import { OBTENER_PERSONAJES_ENDPOINT } from './endPoints.js'

export default async (id) => {

    const apiUrl = (id) ? `${OBTENER_PERSONAJES_ENDPOINT}${id}` : OBTENER_PERSONAJES_ENDPOINT

    try {
        
        const res = await fetch(apiUrl)
        const data = res.json()

        return data

    } catch (error) {

        console.log('Error fetch: ', error)
    }
}