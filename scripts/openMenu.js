let menuElement = document.querySelector('.menu');
let openMenuButton = document.querySelector('.nav__menu-icon');

openMenuButton.addEventListener('click', openMenu);

function openMenu() {
    menuElement.style.display = 'block';

    let closeMenuButton = document.querySelector('.menu__close');
    closeMenuButton.addEventListener('click', closeMenu);
}

function closeMenu() {
    menuElement.style.display = 'none';
}
