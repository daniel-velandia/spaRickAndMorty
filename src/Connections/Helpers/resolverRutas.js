
export default (ruta) => {

    if(ruta.length < 4) {

        return (ruta === '/') ? ruta : '/:id'
    }

    return `/${ruta}`
}