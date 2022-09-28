const menu = document.querySelector(".hamgurger-menu");
const navbar = document.querySelector(".navbar");
const sunIcon = document.getElementById("sun")

menu.onclick = function() {
    if (navbar.style.display == 'none') {
        navbar.style.display = "block"; 
        menu.src = "/images/closeicon.png";
    } else {
        navbar.style.display = 'none';
        menu.src = "/images/harmburger-menu.png";
    }
}

function toggleDark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        sunIcon.src = "/images/moon.png";
    } else {
        sunIcon.src = "/images/Vector.png";
    }
}
