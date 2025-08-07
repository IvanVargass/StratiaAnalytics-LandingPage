// Scripts personalizados de Stratia Analytics


document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('industriasCarousel');
    const dots = document.querySelectorAll('.dot');
    
    if (carousel) {
        carousel.addEventListener('slid.bs.carousel', function (event) {
            const activeIndex = Array.from(carousel.querySelectorAll('.carousel-item')).indexOf(event.relatedTarget);
            
            dots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        });
        
        // Hacer que los dots sean clickables
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const carouselInstance = bootstrap.Carousel.getInstance(carousel);
                carouselInstance.to(index);
            });
        });
    }
});

