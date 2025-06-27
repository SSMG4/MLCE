// 🌈 MLCE Theme Engine

// Save theme to localStorage
function saveThemeSettings(color, gradientStart, gradientEnd) {
  localStorage.setItem("mlce-theme-color", color);
  localStorage.setItem("mlce-gradient-start", gradientStart);
  localStorage.setItem("mlce-gradient-end", gradientEnd);
}

// Apply saved or default theme
function applyTheme() {
  const root = document.documentElement;
  const color = localStorage.getItem("mlce-theme-color") || "#00ffcc";
  const gradientStart = localStorage.getItem("mlce-gradient-start") || "#00ffcc";
  const gradientEnd = localStorage.getItem("mlce-gradient-end") || "#0066ff";

  root.style.setProperty("--theme-main", color);
  root.style.setProperty("--theme-gradient-start", gradientStart);
  root.style.setProperty("--theme-gradient-end", gradientEnd);
}

// Theme Picker Event
function setupThemePicker() {
  const hexInput = document.getElementById("theme-color");
  const gradientSelect = document.getElementById("gradient-theme");

  if (hexInput) {
    hexInput.addEventListener("input", () => {
      const hex = hexInput.value;
      saveThemeSettings(hex, hex, hex); // Single color theme
      applyTheme();
    });
  }

  if (gradientSelect) {
    gradientSelect.addEventListener("change", () => {
      const selected = gradientSelect.value;

      const gradients = {
        blaze: ["#ff6600", "#990000"],
        ender: ["#4a148c", "#1a237e"],
        slime: ["#00ff00", "#33cc99"],
        creeper: ["#117733", "#000000"],
      };

      const [start, end] = gradients[selected] || ["#00ffcc", "#0066ff"];
      saveThemeSettings(start, start, end);
      applyTheme();
    });
  }
}

// Run on load
window.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  setupThemePicker();
});
