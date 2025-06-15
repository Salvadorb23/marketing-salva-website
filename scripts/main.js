document.addEventListener('DOMContentLoaded', () => {
    // Testimonial Slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    document.querySelector('.next-slide')?.addEventListener('click', nextSlide);
    document.querySelector('.prev-slide')?.addEventListener('click', prevSlide);
    setInterval(nextSlide, 5000);

    // Fade-in Animation for Service Items (Activated on Load)
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.classList.add('visible');
        setTimeout(() => {
            item.classList.add('fade-in');
        }, 100 * index);
    });

    // Smooth Scrolling for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href'))?.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add to WhatsApp Functionality
    const buyButtons = document.querySelectorAll('.btn-buy');
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const serviceName = button.closest('.service-info')?.querySelector('h1')?.textContent || 'Servicio';
            const price = button.closest('.service-info')?.querySelector('.service-meta span:last-child')?.textContent || '$0 COP';
            const whatsappUrl = `https://wa.me/573243193932?text=Hola%2C%20quiero%20comprar%20${encodeURIComponent(serviceName)}%20por%20${encodeURIComponent(price)}.`;
            window.location.href = whatsappUrl;
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    menuToggle?.addEventListener('click', () => {
        navMenu?.classList.toggle('active');
    });

    // Header Fade on Scroll
    let lastScroll = 0;
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
            // Scrolling down
            header.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
        }
        lastScroll = currentScroll <= 0 ? 0 : currentScroll; // Reset at top
    });
});