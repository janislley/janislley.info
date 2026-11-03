const themeToggle = document.querySelector("#theme-toggle");
const themeLabel = document.querySelector("#theme-label");
const sunIcon = document.querySelector("#sun-icon");
const moonIcon = document.querySelector("#moon-icon");
const themeColor = document.querySelector('meta[name="theme-color"]');

function updateThemeControls(theme) {
  const isDark = theme === "dark";
  const nextTheme = isDark ? "light" : "dark";
  const label = isDark ? "Light mode" : "Dark mode";

  themeToggle.dataset.nextTheme = nextTheme;
  themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
  themeToggle.title = `Switch to ${nextTheme} mode`;
  themeLabel.textContent = label;
  sunIcon.hidden = !isDark;
  moonIcon.hidden = isDark;
  themeColor.content = isDark ? "#262626" : "#f4f7fb";
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("janislley-theme", theme);
  updateThemeControls(theme);
}

const initialTheme =
  document.documentElement.dataset.theme === "light" ? "light" : "dark";
updateThemeControls(initialTheme);
themeToggle.hidden = false;

themeToggle.addEventListener("click", () => {
  const currentTheme =
    document.documentElement.dataset.theme === "light" ? "light" : "dark";
  setTheme(currentTheme === "dark" ? "light" : "dark");
});
