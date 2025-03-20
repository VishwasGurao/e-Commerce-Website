document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Function to update button text
    function updateButtonText() {
        if (body.classList.contains("dark-theme")) {
            themeToggle.textContent = "☀️ Light Mode";
        } else {
            themeToggle.textContent = "🌙 Dark Mode";
        }
    }

    // Check local storage for theme preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
    } else {
        body.classList.add("light-theme");
    }

    // Update button text on page load
    updateButtonText();

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-theme");
        body.classList.toggle("light-theme");

        // Save theme preference
        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        // Update button text after toggle
        updateButtonText();
    });
});
