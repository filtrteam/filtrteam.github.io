
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Reveal Animation System ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        const navInner = navbar.querySelector('div');
        if (window.scrollY > 40) {
            navbar.classList.remove('py-6');
            navbar.classList.add('py-2');
            navInner.classList.add('bg-white/90', 'shadow-xl');
            navInner.classList.remove('bg-white/40');
        } else {
            navbar.classList.add('py-6');
            navbar.classList.remove('py-2');
            navInner.classList.remove('bg-white/90', 'shadow-xl');
            navInner.classList.add('bg-white/40');
        }
    });

    // --- Testimonials Carousel ---
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const nextBtn = document.getElementById('next-testimonial');
    const prevBtn = document.getElementById('prev-testimonial');

    const updateSlides = () => {
        if (!slides.length) return;
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentSlide);
        });
    };

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlides();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlides();
        });
    }

    // --- FAQ System ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all
            faqItems.forEach(i => i.classList.remove('active'));
            
            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // --- Form Handling ---
    const setupForm = (formId, wrapperId) => {
        const form = document.getElementById(formId);
        const wrapper = document.getElementById(wrapperId);

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = form.querySelector('button');
                if (btn) btn.disabled = true;
                if (btn) btn.innerHTML = 'Enviando protocolo...';

                setTimeout(() => {
                    if (wrapper) {
                        wrapper.innerHTML = `
                            <div class="py-20 text-center animate-in zoom-in duration-700">
                                <div class="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <h3 class="text-4xl font-black mb-4">Protocolo Activado</h3>
                                <p class="text-zinc-400 max-w-sm mx-auto text-lg leading-relaxed">Tu auditoría de claridad está en camino.</p>
                            </div>
                        `;
                    }
                }, 1500);
            });
        }
    };

    setupForm('hero-form', 'hero-form-container');
    setupForm('contact-form', 'contact-form-wrapper');
});
