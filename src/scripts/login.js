const btnLogin = document.getElementsByClassName("btn-login");

for (let btn = 0; btn < btnLogin.length; btn++) {
    const element = btnLogin[btn];

    element.addEventListener("click", validateLogin);

    function validateLogin() {

        const emailInput = document.getElementById("inputEmail").value;
        const passwordInput = document.getElementById("inputPassword").value;
    
        if (emailInput === "davadaviarsaputra@gmail.com" && passwordInput === "12345") {
            window.location.href = "dashboard.html";
        } else {
            const modal = document.createElement("div");
            modal.classList.add("modal-window");

            const modalWrapper = document.createElement("div")
            modalWrapper.classList.add("modal-wrapper");
            modalWrapper.classList.add("text-center");

            const modalHeader = document.createElement("div");
            modalHeader.classList.add("modal-header");

            const icon = document.createElement("i");
            icon.classList.add("fa");
            icon.classList.add("fa-times-circle");
            icon.classList.add("fa-5x");
            icon.classList.add("icon-cross");

            const heading = document.createElement("h4");
            heading.innerText = "Upps, ada yang salah";

            modalHeader.append(icon, heading);

            const modalBody = document.createElement("div");
            modalBody.classList.add("modal-body");

            const text = document.createElement("p");
            text.innerText = "Mungkin ada email atau passwordmu yang tidak valid, ulangi sekali lagi.";

            modalBody.append(text);
            
            modalWrapper.append(modalHeader, modalBody);

            modal.append(modalWrapper);

            document.body.appendChild(modal);

            modal.addEventListener("click", function() {
                modal.style.display = "none";
            })
        }
        
    }
    
}

