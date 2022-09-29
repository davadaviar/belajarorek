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
            alert("Maaf, email atau password anda tidak valid");
        }
        
    }
    
}

