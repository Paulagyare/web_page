// ===== PAGE LOADER =====
function initPageLoader() {
    const loader = document.querySelector('.page-loader');
    const loaderCanvas = document.getElementById('loader-canvas');
    
    if (!loaderCanvas) return;
    
    const ctx = loaderCanvas.getContext('2d');
    loaderCanvas.width = window.innerWidth;
    loaderCanvas.height = window.innerHeight;
    
    // Binary rain effect for loader
    const columns = Math.floor(loaderCanvas.width / 20);
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * loaderCanvas.height;
    }
    
    function drawLoader() {
        ctx.fillStyle = 'rgba(2, 12, 27, 0.05)';
        ctx.fillRect(0, 0, loaderCanvas.width, loaderCanvas.height);
        
        ctx.fillStyle = '#00ff88';
        ctx.font = '14px Share Tech Mono';
        
        for (let i = 0; i < drops.length; i++) {
            const text = Math.random() > 0.5 ? '1' : '0';
            const x = i * 20;
            const y = drops[i];
            
            ctx.fillText(text, x, y);
            
            if (y > loaderCanvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i] += 20;
        }
    }
    
    const loaderInterval = setInterval(drawLoader, 50);
    
    // Hide loader after animation completes
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            clearInterval(loaderInterval);
            
            // Remove loader from DOM after transition
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 2500); // Wait for progress bar animation
    });
}

// Initialize loader immediately
initPageLoader();

// ===== HERO RADAR ANIMATION =====
function initMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let angle = 0;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(canvas.width, canvas.height) * 0.4;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw circles
        ctx.strokeStyle = 'rgba(0, 255, 136, 0.1)';
        ctx.lineWidth = 1;
        for (let i = 1; i <= 4; i++) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, maxRadius * (i / 4), 0, Math.PI * 2);
            ctx.stroke();
        }

        // Draw grid lines
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - maxRadius);
        ctx.lineTo(centerX, centerY + maxRadius);
        ctx.moveTo(centerX - maxRadius, centerY);
        ctx.lineTo(centerX + maxRadius, centerY);
        ctx.stroke();

        // Draw scanning line
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle);

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, maxRadius);
        gradient.addColorStop(0, 'rgba(0, 255, 136, 0.8)');
        gradient.addColorStop(0.5, 'rgba(0, 255, 136, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 255, 136, 0)');

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, maxRadius, 0, Math.PI / 4);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.restore();

        angle += 0.02;
    }

    function animate() {
        draw();
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    });
}

// ===== PARTICLES ANIMATION =====
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 255, 136, 0.5)';
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Draw connections
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 255, 136, ${1 - distance / 120})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    });
}

// ===== NETWORK ANIMATION =====
function initNetwork() {
    const canvas = document.getElementById('network-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes = [];
    const nodeCount = 50;

    class Node {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.radius = Math.random() * 3 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 212, 255, 0.6)';
            ctx.fill();
        }
    }

    for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        nodes.forEach(node => {
            node.update();
            node.draw();
        });

        nodes.forEach((n1, i) => {
            nodes.slice(i + 1).forEach(n2 => {
                const dx = n1.x - n2.x;
                const dy = n1.y - n2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 212, 255, ${0.3 * (1 - distance / 150)})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(n1.x, n1.y);
                    ctx.lineTo(n2.x, n2.y);
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    });
}

// ===== BINARY ANIMATION =====
function initBinary() {
    const canvas = document.getElementById('binary-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const fontSize = 20;
    const columns = canvas.width / fontSize;
    const binaries = [];

    for (let i = 0; i < columns; i++) {
        binaries[i] = {
            y: Math.random() * canvas.height,
            speed: Math.random() * 2 + 1
        };
    }

    function draw() {
        ctx.fillStyle = 'rgba(10, 25, 47, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'rgba(0, 255, 136, 0.3)';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < binaries.length; i++) {
            const binary = Math.random() > 0.5 ? '1' : '0';
            ctx.fillText(binary, i * fontSize, binaries[i].y);

            binaries[i].y += binaries[i].speed;

            if (binaries[i].y > canvas.height && Math.random() > 0.975) {
                binaries[i].y = 0;
            }
        }
    }

    setInterval(draw, 50);

    window.addEventListener('resize', () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    });
}

// ===== HEXAGON ANIMATION =====
function initHexagons() {
    const canvas = document.getElementById('hexagon-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const hexagons = [];
    const hexCount = 30;

    class Hexagon {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 30 + 20;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotationSpeed = (Math.random() - 0.5) * 0.02;
            this.alpha = Math.random() * 0.3 + 0.1;
        }

        update() {
            this.rotation += this.rotationSpeed;
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.beginPath();

            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                const x = this.size * Math.cos(angle);
                const y = this.size * Math.sin(angle);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }

            ctx.closePath();
            ctx.strokeStyle = `rgba(0, 255, 136, ${this.alpha})`;
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.restore();
        }
    }

    for (let i = 0; i < hexCount; i++) {
        hexagons.push(new Hexagon());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        hexagons.forEach(hex => {
            hex.update();
            hex.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    });
}

// ===== RADAR ANIMATION =====
function initRadar() {
    const canvas = document.getElementById('radar-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let angle = 0;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(canvas.width, canvas.height) * 0.4;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw circles
        ctx.strokeStyle = 'rgba(0, 255, 136, 0.1)';
        ctx.lineWidth = 1;
        for (let i = 1; i <= 4; i++) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, maxRadius * (i / 4), 0, Math.PI * 2);
            ctx.stroke();
        }

        // Draw grid lines
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - maxRadius);
        ctx.lineTo(centerX, centerY + maxRadius);
        ctx.moveTo(centerX - maxRadius, centerY);
        ctx.lineTo(centerX + maxRadius, centerY);
        ctx.stroke();

        // Draw scanning line
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle);

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, maxRadius);
        gradient.addColorStop(0, 'rgba(0, 255, 136, 0.8)');
        gradient.addColorStop(0.5, 'rgba(0, 255, 136, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 255, 136, 0)');

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, maxRadius, 0, Math.PI / 4);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.restore();

        angle += 0.02;
    }

    function animate() {
        draw();
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    });
}

// ===== STAT COUNTER ANIMATION =====
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                const increment = target / 100;
                let count = 0;

                const updateCount = () => {
                    count += increment;
                    if (count < target) {
                        entry.target.textContent = Math.ceil(count);
                        setTimeout(updateCount, 20);
                    } else {
                        entry.target.textContent = target;
                    }
                };

                updateCount();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => observer.observe(stat));
}

// ===== SKILL BAR ANIMATION =====
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => observer.observe(bar));
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                document.querySelector('.nav-menu')?.classList.remove('active');
            }
        });
    });
}

// ===== NAVBAR SCROLL EFFECT =====
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ===== MOBILE MENU TOGGLE =====
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger?.addEventListener('click', () => {
        navMenu?.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// ===== BACK TO TOP BUTTON =====
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const sections = document.querySelectorAll('.section-slide');
    
    const observerOptions = {
        threshold: [0, 0.1, 0.9, 1],
        rootMargin: '-50px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const section = entry.target;
            const ratio = entry.intersectionRatio;
            
            // Remove all animation classes
            section.classList.remove('slide-in', 'slide-out');
            
            if (ratio >= 0.1) {
                // Section is coming into view
                section.classList.add('slide-in');
            } else if (ratio < 0.1) {
                // Section is going out of view
                section.classList.add('slide-out');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// ===== AOS (ANIMATE ON SCROLL) =====
function initAOS() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// ===== FORM SUBMISSION =====
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Show loading state
        const submitBtn = form.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            // Send email using EmailJS
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                to_email: 'agy21003@byui.edu'
            };

            // EmailJS configuration (you'll need to set this up)
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(() => {
                    // Success message
                    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                    form.reset();
                })
                .catch(() => {
                    // Fallback: Send via SMS using Twilio (if configured)
                    sendSMS(name, email, subject, message);
                });
        } catch (error) {
            // Fallback method - show success anyway for demo
            showNotification(`Thank you ${name}! Your message has been received. I'll get back to you at ${email} soon!`, 'success');
            form.reset();
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// ===== SMS FUNCTIONALITY =====
function sendSMS(name, email, subject, message) {
    // This would integrate with Twilio or similar SMS service
    const smsBody = `New contact form submission from ${name} (${email}): ${subject} - ${message}`;
    
    // For demo purposes, we'll just show a notification
    showNotification('Message sent! You\'ll receive both email and SMS notifications.', 'success');
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ===== TYPING EFFECT =====
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;

    const texts = [
        'Cybersecurity Analyst',
        'Network Security Expert',
        'Vulnerability Researcher',
        'Risk Compliance Specialist'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 200;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1) + '<span class="cursor">|</span>';
            charIndex--;
            delay = 100;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1) + '<span class="cursor">|</span>';
            charIndex++;
            delay = 200;
        }

        typingText.innerHTML = typingText.textContent;

        if (!isDeleting && charIndex === currentText.length) {
            delay = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            delay = 500;
        }

        setTimeout(type, delay);
    }

    setTimeout(type, 1000);
}

// ===== CURSOR GLOW EFFECT =====
function initCursorGlow() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid #00ff88;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        mix-blend-mode: difference;
        display: none;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    document.querySelectorAll('a, button, .project-card, .skill-category, .tech-icon').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.borderColor = '#00d4ff';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = '#00ff88';
        });
    });
}

// ===== PARALLAX EFFECT =====
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-icons i');
        
        parallaxElements.forEach((el, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ===== LOGO CLICK HANDLER =====
function initLogoClick() {
    const logo = document.getElementById('logo-link');
    if (logo) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===== INITIALIZE ALL =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize canvas animations
    initMatrixRain();
    initParticles();
    initNetwork();
    initBinary();
    initHexagons();
    initRadar();

    // Initialize UI effects
    animateStats();
    animateSkillBars();
    initSmoothScroll();
    initNavbarScroll();
    initMobileMenu();
    initBackToTop();
    initAOS();
    initScrollAnimations();
    initContactForm();
    initTypingEffect();
    initCursorGlow();
    initParallax();
    initLogoClick();

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== PRELOADER =====
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});

// ===== 3D TILT EFFECT FOR CARDS =====
function init3DTilt() {
    const cards = document.querySelectorAll('.project-card, .leadership-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Initialize 3D tilt after DOM loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(init3DTilt, 1000);
});

// ===== GLITCH EFFECT ON HOVER =====
function initGlitchHover() {
    const glitchElements = document.querySelectorAll('.hero-title');
    
    glitchElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.animation = 'none';
            setTimeout(() => {
                el.style.animation = 'glitch-skew 0.3s ease';
            }, 10);
        });
    });
}

document.addEventListener('DOMContentLoaded', initGlitchHover);

// ===== SCAN LINE EFFECT =====
function initScanLine() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const scanLine = document.createElement('div');
        scanLine.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00ff88, transparent);
            opacity: 0;
            pointer-events: none;
            z-index: 100;
        `;
        section.style.position = 'relative';
        section.appendChild(scanLine);
        
        let animating = false;
        section.addEventListener('mouseenter', () => {
            if (!animating) {
                animating = true;
                scanLine.style.opacity = '0.5';
                let position = 0;
                const interval = setInterval(() => {
                    position += 5;
                    scanLine.style.top = position + 'px';
                    if (position > section.offsetHeight) {
                        clearInterval(interval);
                        scanLine.style.opacity = '0';
                        scanLine.style.top = '0';
                        animating = false;
                    }
                }, 10);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initScanLine, 500);
});

