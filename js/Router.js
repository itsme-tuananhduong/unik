var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

let $content = document.getElementById('content');

window.router.on('/home', function() {
    $content.innerHTML = '<home-screen></home-screen>';
}).resolve();

window.router.on('/login', function() {
    $content.innerHTML = '<login-screen></login-screen>';
}).resolve();

window.router.on('/signup', function() {
    $content.innerHTML = '<signup-screen></signup-screen>';
}).resolve();

window.router.on('/userboard', function() {
    $content.innerHTML = '<user-board></user-board>';
}).resolve();