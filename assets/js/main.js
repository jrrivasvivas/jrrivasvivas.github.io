const root = document.documentElement;
const themeKey = 'signal-ghostty-framed-theme';

function applyTheme(theme) {
  if (['light', 'dark', 'system'].includes(theme)) {
    root.dataset.theme = theme;
  } else {
    delete root.dataset.theme;
  }
}

// Apply an explicit choice before the stylesheets load.
try {
  applyTheme(localStorage.getItem(themeKey));
} catch {
  // Keep the default dark appearance when storage is unavailable.
}

document.addEventListener('DOMContentLoaded', () => {
  const themeSelect = document.querySelector('[data-theme-select]');
  if (themeSelect) {
    themeSelect.value = root.dataset.theme ?? 'dark';
    themeSelect.closest('.theme-control').hidden = false;
    themeSelect.addEventListener('change', () => {
      const theme = themeSelect.value;
      applyTheme(theme);
      try {
        localStorage.setItem(themeKey, theme);
      } catch {
        // The current page can still change its appearance.
      }
    });
  }

  const sectionLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  if (sectionLinks.length) {
    function updateCurrentSection() {
      for (const link of sectionLinks) {
        if (link.hash === location.hash) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      }
    }

    window.addEventListener('hashchange', updateCurrentSection);
    updateCurrentSection();
  }
}, { once: true });
