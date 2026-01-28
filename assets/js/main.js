document.addEventListener("DOMContentLoaded", () => {
  /* Reveal */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
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
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("active"));
  }

  /* Theme */
  const html = document.documentElement;
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    let theme = localStorage.getItem("theme") || "light";
    html.setAttribute("data-theme", theme);
    themeBtn.textContent = theme === "dark" ? "☀︎" : "☾";

    themeBtn.addEventListener("click", () => {
      theme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      themeBtn.textContent = theme === "dark" ? "☀︎" : "☾";
    });
  }

  /* Language */
  const langBtn = document.getElementById("lang-toggle");
  const dict = window.I18N;
  if (langBtn && dict) {
    let lang = localStorage.getItem("lang") || "es";

    const applyLang = (l) => {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const val = dict?.[l]?.[key];
        if (val) el.textContent = val;
      });

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
  }

  /* FAQ accordion */
  const items = document.querySelectorAll(".faq-item");
  if (items.length) {
    items.forEach((item) => {
      const btn = item.querySelector(".faq-question");
      if (!btn) return;

      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        items.forEach((i) => i.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
      });
    });
  }
});
