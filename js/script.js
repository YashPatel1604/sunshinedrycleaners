// JavaScript for Sunshine Dry Cleaners Website

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 251, 245, 0.98) 100%)';
            navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.08)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 251, 245, 0.98) 100%)';
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
        }
        
        lastScroll = currentScroll;
    });

    // Initialize EmailJS
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    // You'll get this from your EmailJS dashboard
    emailjs.init("APfLO64xrqeQpcY8v"); // Update this with your EmailJS Public Key

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Disable submit button to prevent multiple submissions
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            // Prepare email parameters
            const templateParams = {
                from_name: name,
                from_email: email,
                phone: phone || 'Not provided',
                message: message,
                to_email: 'sunshinedrycleaners529@gmail.com' // This will be set in EmailJS template
            };
            
            // Send email using EmailJS
            // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
            emailjs.send('service_jdigb2c', 'template_dyea0ji', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    showMessage('Thank you for your message! We will get back to you soon.', 'success');
                    contactForm.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    showMessage('Sorry, there was an error sending your message. Please try again or contact us directly.', 'error');
                })
                .finally(function() {
                    // Re-enable submit button
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                });
        });
    }

    // Function to show messages (success/error)
    function showMessage(text, type) {
        // Remove any existing message alerts
        const existingAlert = document.querySelector('.form-alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        // Create alert element
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type === 'success' ? 'success' : 'danger'} form-alert alert-dismissible fade show`;
        alertDiv.setAttribute('role', 'alert');
        alertDiv.innerHTML = `
            ${text}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        
        // Insert before the form
        const contactForm = document.getElementById('contactForm');
        contactForm.parentNode.insertBefore(alertDiv, contactForm);
        
        // Auto-dismiss after 5 seconds for success messages
        if (type === 'success') {
            setTimeout(function() {
                const bsAlert = new bootstrap.Alert(alertDiv);
                bsAlert.close();
            }, 5000);
        }
    }

    // Cookie consent (show after 2 seconds if not already set)
    setTimeout(function() {
        if (!localStorage.getItem('cookieConsent')) {
            const cookieConsent = document.getElementById('cookieConsent');
            if (cookieConsent) {
                cookieConsent.style.display = 'block';
            }
        }
    }, 2000);

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    const cards = document.querySelectorAll('.card, .feature-box');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add active class to current nav link
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);
});

// Cookie consent functions
function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookieConsent').style.display = 'none';
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    document.getElementById('cookieConsent').style.display = 'none';
}

// Check if cookies were already accepted/declined
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('cookieConsent')) {
        document.getElementById('cookieConsent').style.display = 'none';
    }
});

// Professional entrance animation
(function() {
    const animationStartTime = Date.now();
    const minDisplayTime = 2000; // Minimum 2 seconds for elegant reveal
    
    window.addEventListener('load', function() {
        const entranceAnimation = document.getElementById('entrance-animation');
        
        function hideEntranceAnimation() {
            if (entranceAnimation) {
                entranceAnimation.classList.add('fade-out');
                
                // Remove from DOM after fade-out animation completes
                setTimeout(function() {
                    entranceAnimation.remove();
                    // Ensure body is visible and scrollable
                    document.body.style.overflow = 'auto';
                }, 800);
            }
        }
        
        // Calculate remaining time to meet minimum display time
        const elapsedTime = Date.now() - animationStartTime;
        const remainingTime = Math.max(0, minDisplayTime - elapsedTime);
        
        // Hide entrance animation after minimum display time
        setTimeout(hideEntranceAnimation, remainingTime);
    });
    
    // Prevent body scroll during animation
    document.addEventListener('DOMContentLoaded', function() {
        document.body.style.overflow = 'hidden';
    });
})();

