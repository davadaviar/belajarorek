window.addEventListener("scroll", navSolid);

function navSolid() {
    const navbarTransparent = document.querySelector("nav");
    
    if (window.pageYOffset > 100) {
        navbarTransparent.classList.add("bg-primary");
        console.log("Ini scroll");
    } else {
        navbarTransparent.classList.remove("bg-primary");
        console.log("ini naik");
    }
}