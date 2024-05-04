// Get current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get last modified date
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = "Last modified: " + lastModifiedDate;

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}