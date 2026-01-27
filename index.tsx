
// Lógica interactiva para FILTR Agency One-Pager
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Sistema de Revelado (Intersection Observer) ---
    const observerOptions = { threshold: 0.15 };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // --- 2. Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        const navInner = navbar.querySelector('div');
        if (window.scrollY > 50) {
            navbar.classList.remove('py-8');
            navbar.classList.add('py-4');
            navInner.classList.add('liquid-glass', 'shadow-lg');
        } else {
            navbar.classList.add('py-8');
            navbar.classList.remove('py-4');
            navInner.classList.remove('liquid-glass', 'shadow-lg');
        }
    });

    // --- 3. Generación de Contenido de Servicios ---
    const services = [
        { title: "Diseño", desc: "Precisión quirúrgica en cada píxel." },
        { title: "Desarrollo", desc: "Arquitecturas digitales que rinden pleitesía al UX." },
        { title: "SEO", desc: "Dominamos el algoritmo para tu visibilidad." },
        { title: "SEM", desc: "Leads cualificados con movimientos tácticos." },
        { title: "CRM Automation", desc: "Aceleramos tu flujo de ventas al galope." },
        { title: "Social Media", desc: "Mensajes sólidos diseñados para ser piezas de valor." }
    ];

    const servicesGrid = document.getElementById('services-grid');
    services.forEach((s, i) => {
        const card = document.createElement('div');
        card.className = 'reveal';
        card.style.transitionDelay = `${i * 0.1}s`;
        card.innerHTML = `
            <div class="group liquid-glass clothoid-card p-10 h-full border border-white/60 hover:border-yellow-400/30 transition-all duration-700 hover:-translate-y-2 flex flex-col items-center text-center">
                <div class="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center mb-8 text-black/40 group-hover:text-yellow-500 transition-all">
                    <div class="w-10 h-10 border-2 border-current rounded-lg"></div>
                </div>
                <h4 class="text-2xl font-black tracking-tight mb-4">${s.title}</h4>
                <p class="text-zinc-400 text-lg font-light">${s.desc}</p>
            </div>
        `;
        servicesGrid.appendChild(card);
        revealObserver.observe(card);
    });

    // --- 4. Generación de Proceso ---
    const processSteps = [
        { title: "Revelar", desc: "Desenterramos el ADN latente de tu marca." },
        { title: "Depurar", desc: "Eliminamos el ruido estratégico innecesario." },
        { title: "Refinar", desc: "Elevación estética absoluta de cada activo." },
        { title: "Articular", desc: "Construcción de narrativa de élite." },
        { title: "Impactar", desc: "Despliegue de precisión quirúrgica." },
        { title: "Dominar", desc: "Autoridad permanente y optimización basada en datos." }
    ];

    const processGrid = document.getElementById('process-grid');
    processSteps.forEach((step, i) => {
        const card = document.createElement('div');
        card.className = 'reveal';
        card.style.transitionDelay = `${i * 0.1}s`;
        card.innerHTML = `
            <div class="liquid-glass clothoid-card p-12 h-full border border-white/80 hover:border-yellow-400/30 transition-all duration-1000 flex flex-col min-h-[380px]">
                <span class="text-6xl font-black text-black/5 mb-8 tracking-tighter">0${i+1}</span>
                <h3 class="text-3xl font-black tracking-tighter mb-8">${step.title}</h3>
                <p class="text-zinc-500 text-lg font-light leading-relaxed">${step.desc}</p>
            </div>
        `;
        processGrid.appendChild(card);
        revealObserver.observe(card);
    });

    // --- 5. Marquee de Clientes ---
    const logos = ["AETHER.", "MODERNAS", "VANTAGE", "ECLIPSE", "ZENITH", "NUCLEO", "QUARTZ", "VELO"];
    const marquee = document.getElementById('marquee-content');
    [...logos, ...logos].forEach(logo => {
        const div = document.createElement('div');
        div.className = 'text-3xl md:text-5xl font-black tracking-tighter text-zinc-300 hover:text-black transition-all cursor-default select-none px-4';
        div.innerText = logo;
        marquee.appendChild(div);
    });

    // --- 6. Carrusel de Testimonios ---
    const reviews = [
        { quote: "Antes de FILTR, sentíamos que gritábamos al vacío. Ahora, cada publicación tiene una intención comercial real.", author: "Elena Rossi", role: "CEO Lux Interiors" },
        { quote: "Su método de 'refinamiento' no solo cambió nuestro diseño, cambió la percepción de nuestro valor.", author: "Marcus Chen", role: "Founder TechNode" },
        { quote: "La claridad estratégica que aportan es inigualable en el mercado hispano.", author: "Sofia Giraldo", role: "Studio V" }
    ];

    let currentTestimonial = 0;
    const testimonialContainer = document.getElementById('testimonial-container');
    
    reviews.forEach((r, idx) => {
        const slide = document.createElement('div');
        slide.className = `testimonial-slide ${idx === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <div class="liquid-glass clothoid-card p-10 md:p-12 border border-white shadow-xl h-full flex flex-col justify-center">
                <p class="text-xl md:text-2xl font-light italic text-zinc-600 mb-8 leading-relaxed">"${r.quote}"</p>
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-full bg-zinc-200"></div>
                    <div>
                        <p class="font-bold text-black">${r.author}</p>
                        <p class="text-xs text-zinc-400 uppercase tracking-widest">${r.role}</p>
                    </div>
                </div>
            </div>
        `;
        testimonialContainer.appendChild(slide);
    });

    const updateTestimonials = () => {
        const slides = document.querySelectorAll('.testimonial-slide');
        slides.forEach((s, i) => {
            s.classList.toggle('active', i === currentTestimonial);
        });
    };

    document.getElementById('next-testimonial').addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % reviews.length;
        updateTestimonials();
    });
    document.getElementById('prev-testimonial').addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + reviews.length) % reviews.length;
        updateTestimonials();
    });

    // --- 7. FAQ Acordeón ---
    const faqs = [
        { q: "¿Por qué FILTR y no otra agencia?", a: "Nosotros filtramos el ruido. No buscamos viralidad vacía, buscamos autoridad comercial real." },
        { q: "¿Es para cualquier marca?", a: "No. Solo trabajamos con marcas que tienen un producto de excelencia listo para liderar." },
        { q: "¿En cuánto tiempo veo resultados?", a: "El refinamiento visual es instantáneo. La autoridad se consolida entre los 60-90 días." }
    ];

    const faqList = document.getElementById('faq-list');
    faqs.forEach((faq, i) => {
        const item = document.createElement('div');
        item.className = 'faq-item reveal';
        item.innerHTML = `
            <button class="faq-btn w-full text-left p-10 clothoid-card bg-white border border-zinc-100 transition-all faq-card group">
                <div class="flex justify-between items-center gap-6">
                    <h3 class="text-xl md:text-2xl font-bold tracking-tight">${faq.q}</h3>
                    <span class="faq-icon transition-all duration-500 text-zinc-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </span>
                </div>
                <div class="faq-answer">
                    <p class="text-zinc-500 text-lg font-light">${faq.a}</p>
                </div>
            </button>
        `;
        faqList.appendChild(item);
        revealObserver.observe(item);

        item.querySelector('.faq-btn').addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // --- 8. Manejo de Formularios ---
    const handleFormSubmit = (formId, containerId) => {
        const form = document.getElementById(formId);
        const container = document.getElementById(containerId);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalContent = btn.innerHTML;
            
            btn.disabled = true;
            btn.innerHTML = 'Procesando...';
            
            setTimeout(() => {
                container.innerHTML = `
                    <div class="py-20 text-center animate-in zoom-in duration-500">
                        <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <h3 class="text-2xl font-black mb-4">Solicitud Enviada</h3>
                        <p class="text-zinc-500">Un estratega senior te contactará en las próximas 24 horas.</p>
                    </div>
                `;
            }, 1500);
        });
    };

    handleFormSubmit('hero-form', 'hero-form-container');
    handleFormSubmit('contact-form', 'contact-form-wrapper');

});
