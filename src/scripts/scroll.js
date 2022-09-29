window.addEventListener("scroll", navSolid);

function navSolid() {
    const navbarTransparent = document.querySelector("nav");
    
    if (window.pageYOffset > 100) {
        navbarTransparent.classList.add("bg-primary")
    } else {
        navbarTransparent.classList.remove("bg-primary")
    }
}