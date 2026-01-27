
// Lógica de interactividad para FILTR
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        const navInner = navbar.querySelector('div');
        if (window.scrollY > 40) {
            navbar.classList.remove('py-6', 'md:py-8');
            navbar.classList.add('py-4');
            navInner.classList.add('bg-white/80', 'shadow-xl');
            navInner.classList.remove('bg-white/30');
        } else {
            navbar.classList.add('py-6', 'md:py-8');
            navbar.classList.remove('py-4');
            navInner.classList.remove('bg-white/80', 'shadow-xl');
            navInner.classList.add('bg-white/30');
        }
    });

    // --- Testimonials Carousel ---
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const nextBtn = document.getElementById('next-testimonial');
    const prevBtn = document.getElementById('prev-testimonial');

    const updateSlides = () => {
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

    // --- Form Handling con Feedback Visual ---
    const setupForm = (formId, wrapperId) => {
        const form = document.getElementById(formId);
        const wrapper = document.getElementById(wrapperId);

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = form.querySelector('button');
                if (btn) btn.disabled = true;
                const originalText = btn ? btn.innerHTML : '';
                if (btn) btn.innerHTML = '<span class="animate-pulse">Procesando...</span>';

                setTimeout(() => {
                    if (wrapper) {
                        wrapper.innerHTML = `
                            <div class="py-16 text-center animate-in zoom-in duration-700">
                                <div class="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl scale-110">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <h3 class="text-3xl font-black mb-4">Solicitud Recibida</h3>
                                <p class="text-zinc-400 max-w-sm mx-auto">Tu protocolo de claridad está siendo generado. Un estratega te contactará pronto.</p>
                            </div>
                        `;
                    }
                }, 1500);
            });
        }
    };

    setupForm('hero-form', 'hero-form-container');
    setupForm('contact-form', 'contact-form-wrapper');
    
    // Log de depuración para confirmar carga
    console.log('FILTR: Protocolo de interactividad cargado con éxito.');
});
