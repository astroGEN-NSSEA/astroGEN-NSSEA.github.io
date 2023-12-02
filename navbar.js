let menu_toggle = document.querySelector('.navbar .menu-toggle');
let navigation_menu = document.querySelector('.menu');
let org_title = document.querySelector('.navbar h2');

menu_toggle.addEventListener('click', () => {
    menu_toggle.classList.toggle('activated');
    navigation_menu.classList.toggle('activated');
    org_title.classList.toggle('hide');
})