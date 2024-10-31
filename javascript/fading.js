document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.fade-in-section');
    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        const isScrollingDown = window.scrollY > lastScrollY;
        
        if (entry.isIntersecting) {
            // Apply either the 'fade-in-down' or 'fade-in-up' class based on scroll direction
            if (isScrollingDown) {
            entry.target.classList.add('fade-in-down', 'is-visible');
            entry.target.classList.remove('fade-in-up');
            } else {
            entry.target.classList.add('fade-in-up', 'is-visible');
            entry.target.classList.remove('fade-in-down');
            }
        } else {
            // Remove visibility classes to hide section when out of view
            entry.target.classList.remove('is-visible', 'fade-in-down', 'fade-in-up');
        }
        });
        
        lastScrollY = window.scrollY; // Update scroll position
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
    });