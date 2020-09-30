var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
window.router = new Navigo(root, useHash, hash);

let $content = document.getElementById('content');

window.router.on('/get-started', function () {
    $content.innerHTML = '<get-started-screen></get-started-screen>';
}).resolve();

window.router.on('/sign-up', function () {
    $content.innerHTML = '<sign-up-screen></sign-up-screen>';
}).resolve();

window.router.on('/sign-in', function () {
    $content.innerHTML = '<sign-in-screen></sign-in-screen>';
}).resolve();

window.router.on('/choose-first-topic', function () {
    $content.innerHTML = '<choose-first-topic></choose-first-topic>';
}).resolve();

window.router.on('/home', function () {
    $content.innerHTML = '<home-screen></home-screen>';
}).resolve();

window.router.on('/explore', function () {
    $content.innerHTML = '<explore-screen></explore-screen>';
}).resolve();

window.router.on('/search', function () {
    $content.innerHTML = '<search-screen></search-screen>';
}).resolve();

window.router.on('/user-board', function () {
    $content.innerHTML = '<user-board></user-board>';
}).resolve();

window.router.notFound(function () {
    $content.innerHTML = `<p>404 Error</p>`;
});