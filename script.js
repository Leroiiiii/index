// toggling mobile menu
document.querySelector('.hamburger').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');

    // Toggle aria-expanded 
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
});

document.addEventListener('DOMContentLoaded', () => {
    const hobbyItems = document.querySelectorAll('.hobby-item');

    
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    };

    
    const onScroll = () => {
        hobbyItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('visible');
            }
        });
    };

   
    window.addEventListener('scroll', onScroll);

    
    onScroll();
});


       
        window.addEventListener('load', () => {
            const text = document.getElementById('animated-text');
            const subtext = document.getElementById('animated-subtext');
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
            subtext.style.opacity = '1';
            subtext.style.transform = 'translateY(0)';
        });

        // Image Hover Effect 
        const galleryImages = document.querySelectorAll('.gallery .image-container img');
        galleryImages.forEach(img => {
            img.addEventListener('mouseover', () => {
                img.style.transform = 'scale(1.05)';
            });
            img.addEventListener('mouseout', () => {
                img.style.transform = 'scale(1)';
            });
        });

        // Contact Link Hover Effect
        const contactLinks = document.querySelectorAll('.contact-links a img');
        contactLinks.forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.transform = 'scale(1.2)';
                link.style.transition = 'transform 0.3s';
            });
            link.addEventListener('mouseout', () => {
                link.style.transform = 'scale(1)';
            });
        });
 


        // Smooth Scrolling 
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                
                const menu = document.querySelector('.menu');
                if (menu.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
        