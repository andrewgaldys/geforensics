// Guardian Edge Forensics: small progressive enhancements. The site works without JavaScript.
(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");

  // Mobile menu
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    header.classList.toggle("nav-open", open);
  };

  toggle.addEventListener("click", () => {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("nav-open")) {
      setMenu(false);
      toggle.focus();
    }
  });

  window.matchMedia("(min-width: 900px)").addEventListener("change", (event) => {
    if (event.matches) setMenu(false);
  });

  // Hairline under the header once the page has scrolled
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 4);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // "Copy email" button, shown only where the Clipboard API is available
  document.querySelectorAll("[data-copy]").forEach((button) => {
    if (!navigator.clipboard) return;
    button.hidden = false;
    const label = button.textContent;
    let timer;
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        button.textContent = "Copied";
      } catch {
        button.textContent = "Couldn't copy";
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        button.textContent = label;
      }, 2000);
    });
  });

  // Keep the copyright year current
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
