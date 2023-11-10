export class Router {
    routes = {};

    add(routeName, page) {
        this.routes[routeName] = page;
    }

    route(e) {
        e = e || window.event;
        e.preventDefault();

        window.history.pushState({}, '', event.target.href);
        //push no histórico pegando a href da tag âncora do HTML;

        this.handler();
    }

    handler() {
        const { pathname, href } = window.location;
        //desestruturando, buscando o pathname do objeto 'window.location' e salvando como uma constante, é possível buscar diversos elementos utilizando esse modo de desestruturação, apenas colocando uma ',' e o nome do elemento que deseja buscar, como o href de exemplo;

        const route = this.routes[pathname] || this.routes[404];

        fetch(route)
            .then(data => data.text())
            .then(html =>
                document.querySelector('.app').innerHTML = html);
    }
}