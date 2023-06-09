
const CardPersonaje = (personaje) => 

    `
    <div class="col s6 m4 l3">
        <div class="card">
            <div class="card-image">
                <img src="${personaje.image}">
                <span class="card-title">${personaje.name}</span>
                <a class="btn-floating halfway-fab waves-effect waves-light teal" href="#/${personaje.id}/">
                    <i class="material-icons">add</i>
                </a>
            </div>
            <div class="card-content">
                <p>${personaje.status}</p>
                <p class="my-especie">${personaje.species}</p>
            </div>
        </div>
    </div>
    `

export { CardPersonaje }