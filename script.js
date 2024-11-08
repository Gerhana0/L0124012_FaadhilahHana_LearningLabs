// JavaScript for Interactivity
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    window.onscroll = function() {
        changeHeaderColor();
    };

    function changeHeaderColor() {
        const header = document.querySelector('.navbar'); 
        const scrollPosition = window.scrollY; 

        console.log('Scrolling detected');

        if (scrollPosition > 25) {    
            header.classList.add('scrolled'); 
        } else {
            header.classList.remove('scrolled'); 
        }
    }

    
    const carousel = document.querySelector('#carouselExample');
    const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 7000,
        ride: 'carousel'
    });

    document.addEventListener("DOMContentLoaded", function() {
        const sections = document.querySelectorAll('.section');
    
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
    
        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); 
                }
            });
        };
    
        const observer = new IntersectionObserver(callback, options);
    
        sections.forEach(section => {
            observer.observe(section);
        });
    });