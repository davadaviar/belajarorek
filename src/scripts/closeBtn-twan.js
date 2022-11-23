const closeBtn = document.querySelector(".close-icon");

closeBtn.addEventListener("click", backToSubmissionDetail);

function backToSubmissionDetail() {
    window.location.href = "submission-twan.html";
}