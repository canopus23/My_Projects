// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu').querySelector('ul');
    const img = document.querySelector('img');

    menuToggle.addEventListener('click', function() {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });

    
    img.addEventListener('click', function() {
        window.location.href = 'https://www.google.com';
    });



});
