const profileImage = document.querySelector(".profile-img");
const logoutAcc = document.querySelector(".logout-acc");

profileImage.addEventListener("click", () => {
    logoutAcc.classList.toggle("active");
})

