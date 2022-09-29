const accordions = document.getElementsByClassName("accordion")

for (let accordion = 0; accordion < accordions.length; accordion++) {
    const element = accordions[accordion];

    element.addEventListener("click", openPanel);

    function openPanel(event) {
        event.preventDefault();

        this.classList.toggle("active");

        const panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
    
}