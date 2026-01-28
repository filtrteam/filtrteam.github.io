document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------
     Reveal (safe)
  --------------------------- */
  const reveal = () => {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("active"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("active");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
  };

  /* ---------------------------
     Theme (safe)
  --------------------------- */
  const initTheme = () => {
    const html = document.documentElement;
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;

    let theme = localStorage.getItem("theme") || "light";
    html.setAttribute("data-theme", theme);
    btn.textContent = theme === "dark" ? "☀︎" : "☾";

    btn.addEventListener("click", () => {
      theme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      btn.textContent = theme === "dark" ? "☀︎" : "☾";
    });
  };

  /* ---------------------------
     Language (bulletproof)
  --------------------------- */
  const initI18n = () => {
    const langBtn = document.getElementById("lang-toggle");
    if (!langBtn) return;

    const dict = window.I18N; // IMPORTANT: window.I18N
    if (!dict) {
      console.error("I18N not found. Check assets/js/i18n.js path/name.");
      return;
    }

    let lang = localStorage.getItem("lang") || "es";

    const applyLang = (l) => {
      // Texts
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const val = dict?.[l]?.[key];
        if (val) el.textContent = val;
      });

      // Placeholders
      document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        const val = dict?.[l]?.[key];
        if (val) el.setAttribute("placeholder", val);
      });

      document.documentElement.setAttribute("lang", l);
      localStorage.setItem("lang", l);
      langBtn.textContent = l === "es" ? "EN" : "ES";
    };

    applyLang(lang);

    langBtn.addEventListener("click", () => {
      lang = lang === "es" ? "en" : "es";
      applyLang(lang);
    });
  };

  /* ---------------------------
     FAQ accordion (safe)
  --------------------------- */
  const initFAQ = () => {
    const items = document.querySelectorAll(".faq-item");
    if (!items.length) return;

    items.forEach((item) => {
      const btn = item.querySelector(".faq-question");
      if (!btn) return;

      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        items.forEach((i) => i.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
      });
    });
  };

  // Run
  reveal();
  initTheme();
  initI18n();
  initFAQ();
});
