const hamburguerMenu = document.querySelector('.hamburguerMenu');
const closeHamburguerMenu = document.querySelector('.closeHamburguerMenu')
const menuContainer = document.querySelector('.menuContainer');
const menuExpanded = document.querySelector('.menuExpanded');


function openMenu() {
    menuContainer.style.display = 'block';
    // Adiciona um event listener para fechar o menu se clicar fora dele
    document.addEventListener('click', closeMenuOutside);
    closeHamburguerMenu.style.display = 'block'

}

function closeMenu() {
    menuContainer.style.display = 'none';
    // Remove o event listener para evitar problemas futuros
    document.removeEventListener('click', closeMenuOutside);
    closeHamburguerMenu.style.display = 'none'
}

function closeMenuOutside(event) {
    // Verifica se o clique não está dentro do menu
    if (!menuExpanded.contains(event.target) && !hamburguerMenu.contains(event.target)) {
        closeMenu();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carouselSlide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Add event listeners for next and previous buttons
    document.querySelector(".servicesOptions").addEventListener("click", function (event) {
        if (event.target.classList.contains("next")) {
            nextSlide();
        } else if (event.target.classList.contains("prev")) {
            prevSlide();
        }
    });
});
