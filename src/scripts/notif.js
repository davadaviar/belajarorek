const notifBtn = document.querySelector(".notification");
const closeBtn = document.querySelector(".close-btn");
const notifBar = document.querySelector(".notif-slider")
 

notifBtn.addEventListener("click", slideBar);

function slideBar() {
     const slideBar = document.querySelector(".notif-slider");
     slideBar.style.transform = "translateX(0)";
}

closeBtn.addEventListener("click", closeBar);

function closeBar() {
    const slideBar = document.querySelector(".notif-slider");
    slideBar.style.transform = "translateX(100%)";
}

window.addEventListener("click", closeNotif);

function closeNotif(e) {
    if (e.target === notifBar) {
        notifBar.style.transform = "translateX(100%)"
    }
}

const notifCards = document.querySelectorAll(".card-notification");

for (let card = 0; card < notifCards.length; card++) {
    const element = notifCards[card];

    element.addEventListener("click", cardNotifDetail)

    function cardNotifDetail() {
        if (element.classList.contains("pending")) {
            window.location.href = "pendingreview.html";
        } else {
            window.location.href = "successreview.html";
        }
    }
}