const btnMobile = document.querySelector('.btn_menu');

btnMobile.addEventListener('click', toggleMenu);

function toggleMenu(){
    const nav = document.querySelector('.menu_container');
    nav.classList.toggle('active');
}

