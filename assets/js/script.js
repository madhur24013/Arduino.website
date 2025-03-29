// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from("#hero h1", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out"
});

gsap.from("#hero p", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out"
});

// Cinematic Scroll Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Parallax Effect
gsap.to("#hero", {
    scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: 100,
    opacity: 0.5,
    scale: 0.95
});

// Hero Content Fade
gsap.from("#hero-content", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power4.out",
    delay: 0.5
});

// Scroll Animations
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// Cinematic Section Transitions
sections.forEach((section, index) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            scrub: 1
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: index * 0.2
    });
});

// Feature Cards Animation
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.5,
        delay: index * 0.2
    });
});

// Feature Cards Cinematic Reveal
featureCards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
            scrub: 1
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: index * 0.3
    });
});

// Tech Stack Cards Animation
const techCards = document.querySelectorAll('.tech-card');
techCards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        delay: index * 0.1
    });
});

// Demo Carousel
const demoSlides = document.querySelectorAll('.demo-slide');
const demoPrev = document.querySelector('.demo-prev');
const demoNext = document.querySelector('.demo-next');
let currentSlide = 0;

function showSlide(index) {
    demoSlides.forEach(slide => slide.classList.remove('active'));
    demoSlides[index].classList.add('active');
}

if (demoPrev && demoNext) {
    demoPrev.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + demoSlides.length) % demoSlides.length;
        showSlide(currentSlide);
    });

    demoNext.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % demoSlides.length;
        showSlide(currentSlide);
    });

    // Auto-advance slides every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % demoSlides.length;
        showSlide(currentSlide);
    }, 5000);
}

// Gallery Hover Effect
const galleryHoverItems = document.querySelectorAll('.gallery-item');
galleryHoverItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.gallery-overlay').style.transform = 'translateY(0)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.querySelector('.gallery-overlay').style.transform = 'translateY(100%)';
    });
});

// Gallery Items Cinematic Reveal
galleryHoverItems.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
            scrub: 1
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: index * 0.2
    });
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.style.maxHeight;

        // Close all other answers
        document.querySelectorAll('.faq-answer').forEach(item => {
            if (item !== answer) {
                item.style.maxHeight = null;
            }
        });

        // Toggle current answer
        answer.style.maxHeight = isOpen ? null : answer.scrollHeight + 'px';
    });
});

// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        x: index % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2
    });
});

// Timeline Cinematic Reveal
timelineItems.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
            scrub: 1
        },
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: index * 0.3
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax Effect for Demo Section
const demoSection = document.querySelector('#demo');
if (demoSection) {
    gsap.to(demoSection, {
        scrollTrigger: {
            trigger: demoSection,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        y: -100
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    // Form validation
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateInput(input);
        });
    });

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate all inputs
        let isValid = true;
        inputs.forEach(input => {
            if (!validateInput(input)) {
                isValid = false;
            }
        });

        if (!isValid) {
            showNotification('Please fix the errors before submitting.', 'error');
            return;
        }

        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;

        try {
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            // Validate message length
            if (data.message.length < 10) {
                throw new Error('Message must be at least 10 characters long');
            }

            // Simulate form submission (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            showNotification('Message sent successfully! We will get back to you soon.', 'success');
            contactForm.reset();
        } catch (error) {
            showNotification(error.message || 'Failed to send message. Please try again.', 'error');
        } finally {
            // Reset button state
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
    });
}

function validateInput(input) {
    const value = input.value.trim();
    const errorElement = input.nextElementSibling?.classList.contains('error-message') 
        ? input.nextElementSibling 
        : createErrorElement(input);

    if (input.required && !value) {
        showError(input, errorElement, 'This field is required');
        return false;
    }

    if (input.type === 'email' && value && !isValidEmail(value)) {
        showError(input, errorElement, 'Please enter a valid email address');
        return false;
    }

    if (input.id === 'message' && value.length < 10) {
        showError(input, errorElement, 'Message must be at least 10 characters long');
        return false;
    }

    if (input.type === 'tel' && value && !isValidPhone(value)) {
        showError(input, errorElement, 'Please enter a valid phone number');
        return false;
    }

    hideError(input, errorElement);
    return true;
}

function isValidPhone(phone) {
    return /^\+?[\d\s-()]{10,}$/.test(phone);
}

function createErrorElement(input) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    input.parentNode.insertBefore(errorElement, input.nextSibling);
    return errorElement;
}

function showError(input, errorElement, message) {
    input.classList.add('input-error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(input, errorElement) {
    input.classList.remove('input-error');
    errorElement.style.display = 'none';
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white z-50`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Dynamic Content Loading
async function loadDynamicContent() {
    try {
        // Simulate loading testimonials from an API
        const testimonials = [
            {
                rating: 5,
                text: "This platform has revolutionized how we manage our projects. The AI insights are invaluable.",
                author: "Sarah Johnson",
                role: "Project Director"
            },
            {
                rating: 5,
                text: "The automation features have saved us countless hours. Highly recommended!",
                author: "Michael Chen",
                role: "Tech Lead"
            },
            {
                rating: 5,
                text: "The best project management tool we've ever used. The AI predictions are spot-on!",
                author: "Emily Rodriguez",
                role: "Team Lead"
            }
        ];
        
        // Update testimonials dynamically
        const testimonialContainer = document.querySelector('#testimonials .grid');
        if (testimonialContainer) {
            testimonialContainer.innerHTML = testimonials.map(testimonial => `
                <div class="testimonial-card">
                    <div class="rating text-gold mb-4">
                        ${Array(testimonial.rating).fill('<i class="fas fa-star"></i>').join('')}
                    </div>
                    <p class="text-gray-300 mb-4">"${testimonial.text}"</p>
                    <p class="font-semibold">- ${testimonial.author}, ${testimonial.role}</p>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error loading dynamic content:', error);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadDynamicContent();
    
    // Add skip link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Lazy load images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('loading' in HTMLImageElement.prototype) {
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const lazyLoadScript = document.createElement('script');
        lazyLoadScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
        document.body.appendChild(lazyLoadScript);
    }

    // Optimize animations for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01s');
    }

    // Add will-change property for smoother animations
    document.querySelectorAll('.parallax-item, .glass-card, .feature-card, .tech-card').forEach(el => {
        el.style.willChange = 'transform';
    });
});

// Responsive Navigation
const menuButton = document.createElement('button');
menuButton.className = 'fixed top-4 right-4 z-50 md:hidden glass-card p-2';
menuButton.innerHTML = '<i class="fas fa-bars text-gold"></i>';
document.body.appendChild(menuButton);

const nav = document.createElement('nav');
nav.className = 'fixed top-0 right-0 h-screen w-64 bg-black/90 backdrop-blur-lg transform translate-x-full transition-transform duration-300 z-40';
nav.innerHTML = `
    <div class="p-4">
        <button class="close-menu float-right text-gold"><i class="fas fa-times"></i></button>
        <ul class="mt-8 space-y-4">
            <li><a href="#hero" class="text-gold hover:text-white">Home</a></li>
            <li><a href="#about" class="text-gold hover:text-white">About</a></li>
            <li><a href="#features" class="text-gold hover:text-white">Features</a></li>
            <li><a href="#tech-stack" class="text-gold hover:text-white">Tech Stack</a></li>
            <li><a href="#demo" class="text-gold hover:text-white">Demo</a></li>
            <li><a href="#gallery" class="text-gold hover:text-white">Gallery</a></li>
            <li><a href="#showcase" class="text-gold hover:text-white">Showcase</a></li>
            <li><a href="#case-study" class="text-gold hover:text-white">Case Study</a></li>
            <li><a href="#future" class="text-gold hover:text-white">Future</a></li>
            <li><a href="#testimonials" class="text-gold hover:text-white">Testimonials</a></li>
            <li><a href="#faqs" class="text-gold hover:text-white">FAQs</a></li>
            <li><a href="#contact" class="text-gold hover:text-white">Contact</a></li>
        </ul>
    </div>
`;
document.body.appendChild(nav);

menuButton.addEventListener('click', () => {
    nav.classList.remove('translate-x-full');
});

nav.querySelector('.close-menu').addEventListener('click', () => {
    nav.classList.add('translate-x-full');
});

// Close menu when clicking a link
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.add('translate-x-full');
    });
});

// Lazy Loading for Images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// Navigation Handling
document.addEventListener('DOMContentLoaded', () => {
    // Set active navigation link based on current page
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    // Remove all active states first
    navLinks.forEach(link => {
        link.classList.remove('text-gold', 'font-bold');
        link.classList.add('text-gray-300', 'hover:text-gold');
    });

    // Set active state based on current page
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || 
            (href === '../index.html' && currentPath === '/') ||
            (href === 'about.html' && currentPath.includes('about')) ||
            (href === 'technical.html' && currentPath.includes('technical')) ||
            (href === 'gallery.html' && currentPath.includes('gallery')) ||
            (href === 'contact.html' && currentPath.includes('contact'))) {
            link.classList.add('text-gold', 'font-bold');
            link.classList.remove('text-gray-300', 'hover:text-gold');
        }
    });

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.flex');
        const answer = item.querySelector('.mt-4');
        const chevron = item.querySelector('.fa-chevron-down');
        
        // Set initial state
        answer.style.maxHeight = '0';
        answer.style.opacity = '0';
        
        question.addEventListener('click', () => {
            // Close all other answers
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.mt-4');
                    otherAnswer.style.maxHeight = '0';
                    otherAnswer.style.opacity = '0';
                }
            });
            
            // Toggle current answer
            const isOpen = item.classList.contains('active');
            item.classList.toggle('active');
            
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.opacity = '1';
            } else {
                answer.style.maxHeight = '0';
                answer.style.opacity = '0';
            }
        });
    });
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.className = 'fixed bottom-8 right-8 bg-gold text-black p-3 rounded-full shadow-lg opacity-0 invisible transition-all duration-300 z-50 hover:bg-gold/90';
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
    } else {
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Cookie Consent Banner
const cookieConsent = document.createElement('div');
cookieConsent.className = 'fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg p-4 z-50 transform translate-y-full transition-transform duration-300';
cookieConsent.innerHTML = `
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-gray-300 text-sm">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            <a href="#" class="text-gold hover:text-gold/80 underline">Learn more</a>
        </p>
        <div class="flex gap-4">
            <button class="px-4 py-2 bg-gold text-black rounded-lg hover:bg-gold/90 transition-colors" id="accept-cookies">
                Accept
            </button>
            <button class="px-4 py-2 border border-gold text-gold rounded-lg hover:bg-gold/10 transition-colors" id="decline-cookies">
                Decline
            </button>
        </div>
    </div>
`;
document.body.appendChild(cookieConsent);

// Show cookie consent if not already accepted
if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => {
        cookieConsent.classList.remove('translate-y-full');
    }, 2000);
}

document.getElementById('accept-cookies').addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieConsent.classList.add('translate-y-full');
});

document.getElementById('decline-cookies').addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'false');
    cookieConsent.classList.add('translate-y-full');
});

// Theme Toggle
const themeToggle = document.createElement('button');
themeToggle.className = 'fixed top-4 right-4 z-50 p-2 rounded-full bg-black/50 backdrop-blur-lg text-gold hover:bg-black/70 transition-colors';
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
document.body.appendChild(themeToggle);

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.classList.toggle('light-theme', savedTheme === 'light');

themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-theme');
    const isLight = document.documentElement.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeToggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Gallery Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightbox = document.getElementById('close-lightbox');
const galleryLightboxItems = document.querySelectorAll('.gallery-item img');

if (lightbox && lightboxImage && closeLightbox && galleryLightboxItems) {
    galleryLightboxItems.forEach(item => {
        item.addEventListener('click', () => {
            lightboxImage.src = item.src;
            lightboxImage.alt = item.alt;
            lightbox.classList.remove('hidden');
            setTimeout(() => lightbox.classList.add('active'), 10);
        });
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
        setTimeout(() => lightbox.classList.add('hidden'), 300);
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox.click();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
            closeLightbox.click();
        }
    });
}

// Initialize Particles.js with optimized settings
particlesJS('particles-js', {
    particles: {
        number: {
            value: 30, // Reduced from 50
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#FFD700'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.2, // Reduced opacity
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 2,
            random: true,
            animation: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#FFD700',
            opacity: 0.1, // Reduced line opacity
            width: 1
        },
        move: {
            enable: true,
            speed: 0.5, // Reduced speed
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.2
                }
            },
            push: {
                particles_nb: 2 // Reduced number of particles on click
            }
        }
    },
    retina_detect: true
});

// Add floating animation to cards
document.querySelectorAll('.feature-card, .tech-card').forEach(card => {
    card.classList.add('floating');
});

// Add shimmer effect to headings
document.querySelectorAll('h1, h2, h3').forEach(heading => {
    heading.classList.add('shimmer');
});

// Dynamic Lighting Effect for All Cards
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.glass-card, .feature-card, .tech-card, .showcase-card, .testimonial-card, .case-study-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
    });
});

// Motion Parallax Effect
const parallaxItems = document.querySelectorAll('.parallax-item');
document.addEventListener('mousemove', (e) => {
    parallaxItems.forEach(item => {
        const speed = item.dataset.speed || 0.1;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        item.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

// Enhanced GSAP Animations for All Cards
gsap.to('.glass-card, .feature-card, .tech-card, .showcase-card, .testimonial-card, .case-study-card', {
    scrollTrigger: {
        trigger: '.glass-card, .feature-card, .tech-card, .showcase-card, .testimonial-card, .case-study-card',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    boxShadow: '0 8px 32px 0 rgba(255, 215, 0, 0.2)',
    duration: 1,
    ease: 'power2.out'
});

// Shiny Gold Gradient Animation
gsap.to('.gold-gradient', {
    backgroundPosition: '200% 200%',
    duration: 3,
    repeat: -1,
    ease: 'none'
});

// Video Error Handling
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('error', function(e) {
            console.error('Error loading video:', e);
            const errorMessage = document.createElement('p');
            errorMessage.className = 'text-red-500 text-center mt-2';
            errorMessage.textContent = 'Error loading video. Please try again later.';
            video.parentNode.appendChild(errorMessage);
        });
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Form Validation and Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset error messages
            const errorElements = document.querySelectorAll('[id$="Error"]');
            errorElements.forEach(el => {
                el.textContent = '';
                el.classList.add('hidden');
            });

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validation
            let isValid = true;

            if (name.length < 2) {
                document.getElementById('nameError').textContent = 'Name must be at least 2 characters long';
                document.getElementById('nameError').classList.remove('hidden');
                isValid = false;
            }

            if (!isValidEmail(email)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address';
                document.getElementById('emailError').classList.remove('hidden');
                isValid = false;
            }

            if (subject.length < 3) {
                document.getElementById('subjectError').textContent = 'Subject must be at least 3 characters long';
                document.getElementById('subjectError').classList.remove('hidden');
                isValid = false;
            }

            if (message.length < 10) {
                document.getElementById('messageError').textContent = 'Message must be at least 10 characters long';
                document.getElementById('messageError').classList.remove('hidden');
                isValid = false;
            }

            if (isValid) {
                // Show loading state
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;

                // Simulate form submission (replace with actual API call)
                setTimeout(() => {
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'text-green-500 text-center mt-4';
                    successMessage.textContent = 'Message sent successfully! We will get back to you soon.';
                    contactForm.appendChild(successMessage);

                    // Reset form
                    contactForm.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;

                    // Remove success message after 5 seconds
                    setTimeout(() => {
                        successMessage.remove();
                    }, 5000);
                }, 1500);
            }
        });
    }
});

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Scroll Progress Indicator
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.setProperty('--scroll', `${scrolled}%`);
});

// Fade-in Animation for Sections
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // Initial check

// Parallax Effect
const parallaxElements = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(window.pageYOffset * speed);
        element.style.backgroundPositionY = `${yPos}px`;
    });
});

// Enhanced Mobile Menu
const mobileMenu = document.querySelector('.mobile-menu');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileMenu.classList.remove('open');
    }
});

// Loading Animation for Form Submission
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.innerHTML = '<div class="loading"></div>';
        submitButton.disabled = true;
        
        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            submitButton.textContent = 'Message Sent!';
            submitButton.classList.add('bg-green-500');
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.classList.remove('bg-green-500');
                submitButton.disabled = false;
            }, 3000);
        } catch (error) {
            submitButton.textContent = 'Error! Try Again';
            submitButton.classList.add('bg-red-500');
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.classList.remove('bg-red-500');
                submitButton.disabled = false;
            }, 3000);
        }
    });
}

// Particle Effect
function createParticles() {
    const container = document.createElement('div');
    container.className = 'particle-container';
    document.body.appendChild(container);

    const particleCount = 50;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        container.appendChild(particle);
        particles.push({
            element: particle,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2
        });
    }

    function animateParticles() {
        particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Bounce off edges
            if (particle.x < 0 || particle.x > window.innerWidth) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > window.innerHeight) particle.speedY *= -1;

            particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();
}

// Animated Copyright Text
function animateCopyrightText() {
    const copyrightText = document.querySelector('.copyright-text');
    if (!copyrightText) return;

    const text = copyrightText.textContent;
    copyrightText.textContent = '';
    
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${index * 0.05}s`;
        copyrightText.appendChild(span);
    });
}

// Initialize effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    animateCopyrightText();
});

// Timeline Animations
function initTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const progressBars = document.querySelectorAll('.progress-bar');

    // Intersection Observer for timeline items
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.timeline-content').classList.add('visible');
                entry.target.querySelector('.progress-bar').style.width = '100%';
            }
        });
    }, {
        threshold: 0.5
    });

    // Observe each timeline item
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

    // Add hover effects
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const content = item.querySelector('.timeline-content');
            const dot = item.querySelector('.timeline-dot');
            content.style.transform = 'translateY(-5px)';
            dot.style.transform = 'translateX(-50%) scale(1.2)';
        });

        item.addEventListener('mouseleave', () => {
            const content = item.querySelector('.timeline-content');
            const dot = item.querySelector('.timeline-dot');
            content.style.transform = 'translateY(0)';
            dot.style.transform = 'translateX(-50%) scale(1)';
        });
    });
}

// Initialize timeline when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTimeline();
    // ... existing initialization code ...
}); 