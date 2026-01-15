// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});


const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggleBtn.textContent = "☀️";
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});
