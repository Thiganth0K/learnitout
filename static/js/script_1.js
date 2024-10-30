document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('mainContent');
    const specialItems = document.querySelectorAll('.special-item');
    const notifyButton = document.getElementById('notify_us_btn');
    const header = document.querySelector('.header-container');
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');
    const contactSection = document.querySelector(".contact-section");

    // Loader fade out
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.pointerEvents = "none";
        mainContent.style.opacity = 1;
    }, 2000);

    // Reveal elements on scroll
    const revealOnScroll = () => {
        [...specialItems, document.querySelector('.special-container'), document.getElementById('notify-section'), contactSection].forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight * 0.7;
            if (itemPosition < screenPosition) {
                item.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Parallax effect for elements
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        [
            { selector: '.circle_1', translateY: 0.5 },
            { selector: '.circle_2', translateY: 0.3 },
            { selector: '.circle_3', translateY: 0.4 },
            { selector: '.circle_4', translateY: 0.6 },
            { selector: '.circle_5', translateY: 0.2 },
            { selector: '.circle_6', translateY: 0.3 },
            { selector: '.circle_7', translateY: 0.5 },
            { selector: '.circle_8', translateY: 0.4 },
            { selector: '.rect', translateX: 0.4 }
        ].forEach(({ selector, translateY, translateX }) => {
            const el = document.querySelector(selector);
            if (el) {
                el.style.transform = `translate(${translateX ? scrollPosition * translateX : 0}px, ${translateY ? scrollPosition * translateY : 0}px)`;
            }
        });
    });

    // Header background change on scroll
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navMenu.classList.toggle('show');
    });

    // Notify button click
    notifyButton.addEventListener('click', () => {
        window.location.href = '/notify_us';
    });
});
