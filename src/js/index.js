import { Router } from './router.js';

const router = new Router();

router.add('/', './src/pages/home.html');
router.add('/about', './src/pages/about.html');
router.add('/contact', './src/pages/contact.html');
router.add(404, './src/pages/404.html');

router.handler()

window.route = () => router.route();
window.onpopstate = () => { //evento para capturar a mudança através das setas no lado superior esquerdo do browser;
    router.handler();
}


////////////////////////////// POO introdução
// class Nadar {
//     nado() {
//         console.log('nadando!');
//     }
// }

// class Pato extends Nadar { //extendendo os métodos da class 'Nadar'' para a class 'Pato';
//     constructor() {
//         super();
//     }
// }

// class Vaca extends Nadar {
//     constructor() {
//         super();
//     }
//     nado() { //polimorfismo
//         console.log('vaca não nada!');
//         //O polimorfismo é a capacidade de um objeto responder de forma diferente a um mesmo método, dependendo do contexto em que é chamado.
//     }
// }

// const pato = new Pato();
// pato.nado();

// const vaca = new Vaca();
// vaca.nado();