
const NavBar = () =>

    `
        <nav>
            <div class="nav-wrapper teal">
            <a href="/" class="brand-logo my-brand-logo"><img src="https://img.icons8.com/plasticine/56/null/rick-sanchez.png"/></a>
            <a data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <li><a href="/">Personajes</a></li>
                <li><a href="#">Episodios</a></li>
                <li><a href="#">Lugares</a></li>
            </ul>
            </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
            <li><a href="/" class="sidenav-close">Personajes</a></li>
            <li><a href="#">Episodios</a></li>
            <li><a href="#">Lugares</a></li>
        </ul>
    `

export { NavBar }