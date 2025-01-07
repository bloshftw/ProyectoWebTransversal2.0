document.addEventListener('DOMContentLoaded', function() {
    // Navegación responsive
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const navMenu = document.querySelector('.nav-menu');
    const socialIcons = document.querySelector('.social-icons');
    const dropdownLinks = document.querySelectorAll('.nav-menu-link-dropdown');

    navToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // Evita que el clic se propague al documento
        nav.classList.toggle('show');
        navMenu.classList.toggle('show');
        socialIcons.classList.toggle('show');
    });

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            
            if (window.innerWidth <= 768) {
                dropdownMenu.classList.toggle('show');
            } else {
                dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && e.target !== navToggle) {
            nav.classList.remove('show');
            navMenu.classList.remove('show');
            socialIcons.classList.remove('show');
        }
    });

    // Carrusel de imágenes
    const carousel = document.querySelector('.carousel');
    const carouselContainer = carousel.querySelector('.carousel-container');
    const prevBtn = carousel.querySelector('.carousel-btn-prev');
    const nextBtn = carousel.querySelector('.carousel-btn-next');
    const images = carousel.querySelectorAll('.carousel-img');

    let currentIndex = 0;

    function showImage(index) {
        carouselContainer.style.transform = `translateX(-${index * 100}%)`;
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);

    // Cambiar imagen automáticamente cada 5 segundos
    setInterval(nextImage, 5000);
});