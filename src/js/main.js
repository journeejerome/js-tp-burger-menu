if ( 'querySelector' in document && 'addEventListener' in window) {
    window.document.documentElement.className = ' js-enabled';
}

const target = document.querySelector('.main');
const button = document.querySelector('.nav-button');

button.addEventListener('click', toggleNav);

function toggleNav(event){
    target.classList.toggle('is-opened');
    event.preventDefault();
}