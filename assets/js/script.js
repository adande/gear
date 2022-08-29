
'use strict';

// Mobile menu show
const btn_click_open_menu = document.querySelector('[data-nav-toggler]');
const btn_click_open_menu_fixed = document.querySelector('[data-nav-toggler-fixed]');
const mobile_menu = document.querySelector('[data-mobile-menu]');
const overlay = document.querySelector('[data-overlay]');

const openMenu = function () { 
    mobile_menu.classList.add('active'); 
    overlay.classList.add('active') ;
}
btn_click_open_menu.addEventListener('click',openMenu);
btn_click_open_menu_fixed.addEventListener('click',openMenu);

// Mobile menu hide
const btn_click_close_menu = document.querySelector('[data-close-menu]');
const closeMenu = function () { mobile_menu.classList.remove('active');    overlay.classList.remove('active'); 
}
btn_click_close_menu.addEventListener('click',closeMenu);

// Mobile menu sticky
const menu = document.querySelector("[data-mobile-menu-top-fixed]");

const headerActive = function () {
    if (window.scrollY > 250) {
        menu.classList.add('active');
    }else{
        menu.classList.remove('active');
    }
}

window.addEventListener('scroll',headerActive);


// Mobile menu sticky
const menu_desktop = document.querySelector("[data-desktop-menu-top-fixed]");
const headerActiveDesktop = function () {
    if (window.scrollY > 250) {
        menu_desktop.classList.add('active');
    }else{
        menu_desktop.classList.remove('active');
    }
}
window.addEventListener('scroll',headerActiveDesktop);


// Souris
// const souris = document.querySelector('[data-souris]');
// const cursor = function (e) {
//     souris.style.top =  e.pageY + 'px';
//     souris.style.left =  e.pageX + 'px';
// }
// window.addEventListener('mousemove',cursor);


// GROSSIR LES TEXTES
// const grossir = function () {
//     souris.classList.add('grow-in');
//     logo.classList.add('hovered-link');
// }
// const logo = document.querySelector('.banner-img');
// logo.addEventListener('mouseover',grossir);
