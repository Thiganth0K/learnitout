document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('mainContent');
    const specialItems = document.querySelectorAll('.special-item');
    const notify_us_btn = document.getElementById('notify_us_btn');
    const header = document.querySelector('.header-container');
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');

    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.pointerEvents = "none";
        mainContent.style.opacity = 1;

        const revealItems = () => {
            specialItems.forEach(item => {
                const itemPosition = item.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.5;
                if (itemPosition < screenPosition) {
                    item.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', revealItems);
        revealItems();
    }, 2000); // Reduced loading time

    notify_us_btn.addEventListener('click', function() {
        window.location.href = '/notify_us';
    });

    // Scroll animations for all circles and rectangles
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const elements = [
            { selector: '.circle_1', translateY: 0.5 },
            { selector: '.circle_2', translateY: 0.3 },
            { selector: '.circle_3', translateY: 0.4 },
            { selector: '.circle_4', translateY: 0.6 },
            { selector: '.circle_5', translateY: 0.2 },
            { selector: '.circle_6', translateY: 0.3 },
            { selector: '.circle_7', translateY: 0.5 },
            { selector: '.circle_8', translateY: 0.4 }, // Added circle_12
            { selector: '.rect', translateX: 0.4}
        ];
        
        elements.forEach(element => {
            const el = document.querySelector(element.selector);
            if (el) {
                if (element.translateY) {
                    el.style.transform = `translateY(${scrollPosition * element.translateY}px)`;
                }
                if (element.translateX) {
                    el.style.transform = `translateX(${scrollPosition * element.translateX}px)`;
                }
            }
        });
    });

    // Reveal special and notify sections on scroll
    const revealOnScroll = () => {
        const specialContainer = document.querySelector('.special-container');
        const notifySection = document.getElementById('notify-section');
        const elements = [specialContainer, notifySection];

        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (position < screenHeight - 100) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Header background change on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('open');
        navMenu.classList.toggle('show'); // Toggles visibility of the menu
    });
});
