(() => {
  const header = document.querySelector(".header");
  const menu = document.querySelector(".menu");
  const nav = document.querySelector("#main-nav");
  const languageButton = document.querySelector(".lang");
  const type = document.querySelector("#projectType");
  const message = document.querySelector("#messageText");
  const whatsapp = document.querySelector("#whatsappLink");
  const email = document.querySelector("#emailLink");
  const year = document.querySelector("#year");
  const params = new URLSearchParams(location.search);
  const requestedLanguage = params.get("lang");
  let language = ["es", "en"].includes(requestedLanguage)
    ? requestedLanguage
    : localStorage.getItem("portfolio-language") === "en" ? "en" : "es";

  if (year) year.textContent = new Date().getFullYear();

  function closeMenu() {
    if (!menu || !header) return;
    header.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", language === "en" ? "Open menu" : "Abrir menú");
  }

  if (menu && header) {
    menu.addEventListener("click", () => {
      const open = header.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
      menu.setAttribute("aria-label", language === "en"
        ? (open ? "Close menu" : "Open menu")
        : (open ? "Cerrar menú" : "Abrir menú"));
    });
    nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && header.classList.contains("open")) {
        closeMenu();
        menu.focus();
      }
    });
    document.addEventListener("click", event => {
      if (!header.contains(event.target)) closeMenu();
    });
  }

  const originals = new Map();
  document.querySelectorAll("[data-en], [data-en-html]").forEach(element => {
    originals.set(element, element.hasAttribute("data-en-html") ? element.innerHTML : element.textContent);
  });
  const attributeOriginals = new Map();
  document.querySelectorAll("[data-en-attr]").forEach(element => {
    attributeOriginals.set(element, element.getAttribute("alt"));
  });
  const originalTitle = document.title;
  const originalDescription = document.querySelector('meta[name="description"]')?.content;
  const originalPlaceholder = message?.getAttribute("placeholder");
  const contactNames = {
    es: {
      "new-web": "crear una página web",
      "improve-web": "mejorar una web existente",
      system: "crear un sistema a medida",
      automation: "automatizar un proceso o integrar herramientas",
      other: "un proyecto"
    },
    en: {
      "new-web": "building a website",
      "improve-web": "improving an existing website",
      system: "building a custom system",
      automation: "automating a process or connecting tools",
      other: "a project"
    }
  };

  function updateLinks() {
    if (!type || !message || !whatsapp || !email) return;
    const detail = message.value.trim();
    const subject = language === "en" ? "Project inquiry" : "Consulta sobre proyecto";
    const body = language === "en"
      ? `Hi José, I saw your portfolio and would like to discuss ${contactNames.en[type.value]}.${detail ? ` Here is some context: ${detail}` : ""}`
      : `Hola José, vi tu portafolio y quisiera hablar sobre ${contactNames.es[type.value]}.${detail ? ` Te cuento un poco: ${detail}` : ""}`;
    whatsapp.href = `https://wa.me/18292222172?text=${encodeURIComponent(body)}`;
    email.href = `mailto:jmrivast0110@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function applyLanguage(next) {
    language = next;
    document.documentElement.lang = next;
    localStorage.setItem("portfolio-language", next);
    document.querySelectorAll("[data-en], [data-en-html]").forEach(element => {
      if (element.hasAttribute("data-en-html")) {
        element.innerHTML = next === "en" ? element.dataset.enHtml : originals.get(element);
      } else {
        element.textContent = next === "en" ? element.dataset.en : originals.get(element);
      }
    });
    document.querySelectorAll("[data-en-attr]").forEach(element => {
      element.setAttribute("alt", next === "en" ? element.dataset.enAttr : attributeOriginals.get(element));
    });
    if (languageButton) {
      languageButton.textContent = next === "en" ? "ES" : "EN";
      languageButton.setAttribute("aria-label", next === "en" ? "Cambiar a español" : "Switch to English");
    }
    if (message) message.placeholder = next === "en"
      ? "What does your business do, and what would you like to improve?"
      : originalPlaceholder;
    document.title = next === "en"
      ? (document.querySelector(".case h1")
        ? `${document.querySelector(".case h1").textContent} | José Rivas`
        : "José Rivas | Websites and business systems")
      : originalTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = next === "en"
      ? (document.querySelector(".case .lede")?.dataset.en || "José Rivas builds business websites and custom systems.")
      : originalDescription;
    document.querySelectorAll("a[href]").forEach(link => {
      const url = new URL(link.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      if (next === "en") url.searchParams.set("lang", "en");
      else url.searchParams.delete("lang");
      link.href = url.href;
    });
    closeMenu();
    updateLinks();
  }

  languageButton?.addEventListener("click", () => applyLanguage(language === "es" ? "en" : "es"));
  type?.addEventListener("change", updateLinks);
  message?.addEventListener("input", updateLinks);
  document.querySelectorAll("[data-project]").forEach(link => {
    link.addEventListener("click", () => {
      if (type) type.value = link.dataset.project === "web"
        ? "new-web" : link.dataset.project === "system" ? "system" : "automation";
      updateLinks();
    });
  });
  applyLanguage(language);
})();
