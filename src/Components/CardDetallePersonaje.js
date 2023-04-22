
const CardDetallePersonaje = (personaje) => {

    const estado = (personaje.status == 'Alive') ? 'my-alive' : 'my-dead'

    return (
        `
        <div class="card-panel">
            <div class="row my-row-detalle">
                <div class="col s12 m6 my-container-img">
                    <img class="responsive-img" src="${personaje.image}" alt="image ${personaje.name}">
                </div>
                <div class="col s12 m6 my-col-card">
                    <div class="my-content-card">
                        <h3 class="my-header-card">${personaje.name}</h3>
                        <p><span class="${estado}"></span>${personaje.status} - ${personaje.species}</p>
                        <p class="my-label-card">Tipo:</p>
                        <p> ${(personaje.type == "") ? "Ninguno" : personaje.type}</p>
                        <p class="my-label-card">Genero:</p>
                        <p>${personaje.gender}</p>
                        <p class="my-label-card">Origen:</p>
                        <p>${personaje.origin.name}</p>
                        <p class="my-label-card">Última ubicación conocida:</p>
                        <p>${personaje.location.name}</p>
                        <p class="my-label-card">Episodios en los que aparece:</p>
                        <p>${personaje.episode.length}</p>
                    </div>
                </div>     
            </div>
        </div>
        `
    )
}

export { CardDetallePersonaje }