window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 30) { // Change this value to adjust when the color changes
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});