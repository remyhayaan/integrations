document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    // Toggle menu on hamburger click
    menuToggle.addEventListener("click", function (event) {
        navbar.classList.toggle("active");

        // Change the hamburger icon to "X" and back
        if (navbar.classList.contains("active")) {
            menuToggle.innerHTML = "&times;"; // X icon
        } else {
            menuToggle.innerHTML = "&#9776;"; // Hamburger icon
        }

        event.stopPropagation(); // Prevent event from bubbling
    });

    // Close menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
            navbar.classList.remove("active");
            menuToggle.innerHTML = "&#9776;"; // Reset to hamburger icon
        }
    });
});
