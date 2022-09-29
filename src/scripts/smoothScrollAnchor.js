const smoothScrollAnchor = document.querySelectorAll("a[href^='#']");

for (let anchor = 0; anchor < smoothScrollAnchor.length; anchor++) {
    const element = smoothScrollAnchor[anchor];

    element.addEventListener("click", smoothScrollhandler);

    function smoothScrollhandler(event) {
        event.preventDefault();

        const href = this.getAttribute('href');

        if (document.getElementById(href.splice("#", " ")));
            document.querySelector(href).scrollIntoView({
                behavior : "smooth",
            })
    }
    
}