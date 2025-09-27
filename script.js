// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 26, 46, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(26, 26, 46, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Enhanced product cards hover effect
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
        this.style.boxShadow = '0 25px 60px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Special animation for price elements
            if (entry.target.classList.contains('price-value')) {
                entry.target.style.animation = 'priceGlow 2s ease-in-out infinite alternate';
            }
            
            // Counter animation for stats
            if (entry.target.classList.contains('stat-number')) {
                animateCounter(entry.target);
            }
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.product-card, .stat-item, .contact-item, .benefit-item');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Observe price elements for glow effect
    document.querySelectorAll('.price-value').forEach(price => {
        observer.observe(price);
    });
    
    // Observe stat numbers for counter animation
    document.querySelectorAll('.stat-number').forEach(stat => {
        observer.observe(stat);
    });
});

// Counter animation for statistics
function animateCounter(element) {
    const text = element.textContent;
    const hasPlus = text.includes('+');
    const number = parseInt(text.replace(/[^0-9]/g, ''));
    
    if (isNaN(number)) return;
    
    let current = 0;
    const increment = number / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            current = number;
            clearInterval(timer);
        }
        
        const displayValue = Math.floor(current);
        element.textContent = hasPlus ? `+${displayValue}` : displayValue;
        
        // Add suffix back if it exists
        if (text.includes('h')) {
            element.textContent += 'h';
        } else if (text.includes('%')) {
            element.textContent += '%';
        }
    }, 50);
}

// WhatsApp click tracking and analytics
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', (e) => {
        console.log('WhatsApp link clicked');
        
        // Add visual feedback
        const originalText = link.innerHTML;
        link.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            link.style.transform = 'scale(1)';
        }, 150);
        
        // Track which section the click came from
        const section = link.closest('section')?.id || 'unknown';
        console.log(`WhatsApp clicked from section: ${section}`);
    });
});

// Enhanced image loading with fade-in effect
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        const loadImage = () => {
            img.style.opacity = '1';
        };
        
        if (img.complete) {
            loadImage();
        } else {
            img.addEventListener('load', loadImage);
            img.addEventListener('error', () => {
                console.log(`Failed to load image: ${img.src}`);
                img.style.opacity = '0.5';
            });
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroPattern = document.querySelector('.hero-pattern');
    const batteryImage = document.querySelector('.battery-image');
    
    if (heroPattern) {
        heroPattern.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    if (batteryImage) {
        batteryImage.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Add CSS for price glow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes priceGlow {
        from { 
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        to { 
            text-shadow: 
                2px 2px 4px rgba(0,0,0,0.3),
                0 0 20px rgba(255, 215, 0, 0.6),
                0 0 30px rgba(255, 215, 0, 0.4);
        }
    }
    
    @keyframes slideInFromLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInFromRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Enhanced touch gestures for mobile
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleGesture();
});

function handleGesture() {
    const swipeThreshold = 50;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    
    // Only handle horizontal swipes if they're more significant than vertical
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
        if (diffX > 0) {
            // Swipe left - could navigate to next section
            console.log('Swipe left detected');
        } else {
            // Swipe right - could navigate to previous section
            console.log('Swipe right detected');
        }
    }
}

// Performance optimization - lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add loading states for better UX
document.addEventListener('DOMContentLoaded', () => {
    // Remove loading class from body if it exists
    document.body.classList.remove('loading');
    
    // Add loaded class for CSS animations
    document.body.classList.add('loaded');
});

// Error handling for failed resources
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.log('Image failed to load:', e.target.src);
        e.target.style.display = 'none';
    }
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add focus styles for accessibility
document.addEventListener('DOMContentLoaded', () => {
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid #FFD700';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = 'none';
        });
    });
});

