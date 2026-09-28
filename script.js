const root = document.documentElement;
const themeToggle = document.querySelector("#themeToggle");
const countButton = document.querySelector("#countButton");
const counter = document.querySelector("#counter");

let count = Number(localStorage.getItem("githubPagesClicks") || 0);
counter.textContent = count;

countButton.addEventListener("click", () => {
  count += 1;
  counter.textContent = count;
  localStorage.setItem("githubPagesClicks", String(count));
});

const savedTheme = localStorage.getItem("githubPagesTheme");
if (savedTheme) root.dataset.theme = savedTheme;
themeToggle.textContent = root.dataset.theme === "light" ? "☀" : "☾";

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  if (nextTheme === "dark") delete root.dataset.theme;
  else root.dataset.theme = nextTheme;
  localStorage.setItem("githubPagesTheme", nextTheme);
  themeToggle.textContent = nextTheme === "light" ? "☀" : "☾";
});
