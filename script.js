const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        const darkMode = document.body.classList.contains("dark-mode");

        themeToggle.textContent = darkMode ? "☀️" : "🌙";

        themeToggle.setAttribute(
            "aria-label",
            darkMode ? "Switch to light mode" : "Switch to dark mode"
        );
    });
}