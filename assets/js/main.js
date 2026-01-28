document.addEventListener("DOMContentLoaded", () => {

  /* Reveal */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("active");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  /* Theme */
  const html = document.documentElement;
  const themeBtn = document.getElementById("theme-toggle");
  let theme = localStorage.getItem("theme") || "light";
  html.dataset.theme = theme;
  themeBtn.textContent = theme === "dark" ? "☀︎" : "☾";

  themeBtn.onclick = () => {
    theme = theme === "dark" ? "light" : "dark";
    html.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    themeBtn.textContent = theme === "dark" ? "☀︎" : "☾";
  };

  /* Language */
  const langBtn = document.getElementById("lang-toggle");
  let lang = localStorage.getItem("lang") || "es";

  const applyLang = l => {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.dataset.i18n;
      if (I18N[l][k]) el.textContent = I18N[l][k];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const k = el.dataset.i18nPlaceholder;
      if (I18N[l][k]) el.placeholder = I18N[l][k];
    });

    langBtn.textContent = l === "es" ? "EN" : "ES";
    document.documentElement.lang = l;
    localStorage.setItem("lang", l);
  };

  applyLang(lang);
  langBtn.onclick = () => applyLang(lang = lang === "es" ? "en" : "es");

  /* FAQ accordion */
  document.querySelectorAll(".faq-item").forEach(item => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      const open = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
      if (!open) item.classList.add("open");
    });
  });

});
