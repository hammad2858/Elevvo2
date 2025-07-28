document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("themeToggle");
    const html = document.documentElement;
  
    // Set theme on page load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      html.classList.add("dark");
      toggleBtn.textContent = "☀️";
    } else {
      html.classList.remove("dark");
      toggleBtn.textContent = "🌙";
    }
  
    // Toggle theme on button click
    toggleBtn.addEventListener("click", () => {
      html.classList.toggle("dark");
      const isDark = html.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      toggleBtn.textContent = isDark ? "☀️" : "🌙";
    });
  });
  