// 2XtN Landing Page JavaScript

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations and interactions
    initSparkles();
    initScrollAnimations();
    initButtonInteractions();
    initSmoothScroll();
});

// Create animated sparkles in hero section
function initSparkles() {
    const sparklesContainer = document.querySelector('.sparkles-container');
    if (!sparklesContainer) return;

    // Create 16 sparkles with random positions and animations
    for (let i = 0; i < 16; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20M17.66 6.34L6.34 17.66M6.34 6.34l11.32 11.32"/></svg>`;
        
        // Random positioning
        sparkle.style.left = Math.random() * 95 + '%';
        sparkle.style.top = Math.random() * 85 + '%';
        
        // Staggered animation delay
        sparkle.style.animationDelay = (i * 0.1) + 's';
        sparkle.style.animationDuration = (3 + i * 0.1) + 's';
        
        sparklesContainer.appendChild(sparkle);
    }
}

// Initialize scroll-based animations
function initScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Add fade-in animation to service cards, media cards, and sections
    const animatedElements = document.querySelectorAll('.service-card, .media-card, .about-intro, .about-features');
    animatedElements.forEach((element, index) => {
        // Initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        // Observe element
        observer.observe(element);
    });

    // Hero title animation
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(20px)';
        heroTitle.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 200);
    }

    // Hero card animation
    const heroCard = document.querySelector('.hero-card');
    if (heroCard) {
        heroCard.style.opacity = '0';
        heroCard.style.transform = 'scale(0.9)';
        heroCard.style.transition = 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s';
        
        setTimeout(() => {
            heroCard.style.opacity = '1';
            heroCard.style.transform = 'scale(1)';
        }, 300);
    }
}

// Enhanced button interactions
function initButtonInteractions() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        // Add click ripple effect
        button.addEventListener('click', function(e) {
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            
            // Calculate ripple position and size
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });

        // Add hover effects
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Add styles for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Smooth scroll for anchor links
function initSmoothScroll() {
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
}

// Search functionality
function initSearch() {
    const searchInput = document.querySelector('.search-box input');
    if (!searchInput) return;

    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        
        // Simple search highlighting (can be expanded)
        if (query.length > 2) {
            console.log('Searching for:', query);
            // Add search logic here
        }
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = this.value;
            if (query) {
                // Perform search action
                alert(`검색 기능: "${query}" - 실제 서비스에서는 검색 결과를 표시합니다.`);
            }
        }
    });
}

// Media card hover effects
function initMediaCardEffects() {
    const mediaCards = document.querySelectorAll('.media-card');
    
    mediaCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
            this.style.boxShadow = '0 16px 0 var(--y2k-ink)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}

// Service card interactions
function initServiceCardEffects() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Initialize additional effects when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initSearch();
    initMediaCardEffects();
    initServiceCardEffects();
});

// Newsletter subscription
function handleNewsletterSubscription() {
    const newsletterBtn = document.querySelector('.btn-newsletter');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Simple newsletter subscription simulation
            const email = prompt('뉴스레터 구독을 위해 이메일을 입력해주세요:');
            if (email && email.includes('@')) {
                alert('뉴스레터 구독이 완료되었습니다! 감사합니다.');
                // In real implementation, send to backend
                console.log('Newsletter subscription:', email);
            } else if (email) {
                alert('올바른 이메일 주소를 입력해주세요.');
            }
        });
    }
}

// CTA button actions
function initCTAButtons() {
    // 지금 리셋 시작하기 버튼
    const startResetBtn = document.querySelector('.btn-hero-primary');
    if (startResetBtn) {
        startResetBtn.addEventListener('click', function() {
            alert('리셋 프로그램 시작! 실제 서비스에서는 회원가입/로그인 페이지로 이동합니다.');
        });
    }

    // 코칭 상담 예약 버튼
    const coachingBtn = document.querySelector('.btn-outline');
    if (coachingBtn) {
        coachingBtn.addEventListener('click', function() {
            alert('코칭 상담 예약! 실제 서비스에서는 예약 시스템으로 이동합니다.');
        });
    }

    // 서비스 카드 버튼들
    const plannerBtn = document.querySelector('.btn-yellow');
    const coachingCardBtn = document.querySelector('.btn-pink');
    const marketBtn = document.querySelector('.btn-purple');

    if (plannerBtn) {
        plannerBtn.addEventListener('click', function() {
            alert('4PILLARS 플래너 미리보기! 실제 서비스에서는 플래너 데모로 이동합니다.');
        });
    }

    if (coachingCardBtn) {
        coachingCardBtn.addEventListener('click', function() {
            alert('전문 코칭 신청! 실제 서비스에서는 코칭 프로그램 상세 페이지로 이동합니다.');
        });
    }

    if (marketBtn) {
        marketBtn.addEventListener('click', function() {
            alert('마켓 둘러보기! 실제 서비스에서는 커뮤니티 마켓으로 이동합니다.');
        });
    }
}

// Parallax effect for hero section
function initParallaxEffect() {
    const heroSection = document.querySelector('.hero');
    const heroCard = document.querySelector('.hero-card');
    
    if (!heroSection || !heroCard) return;

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (scrolled < window.innerHeight) {
            heroCard.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Initialize all effects
document.addEventListener('DOMContentLoaded', function() {
    handleNewsletterSubscription();
    initCTAButtons();
    initParallaxEffect();
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handling
const optimizedScrollHandler = debounce(function() {
    // Any scroll-based animations can be handled here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);