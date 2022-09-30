const submitBtn = document.querySelector(".btn-submit");
submitBtn.addEventListener("click", openModal);

function openModal() {
    setTimeout(showModal, 2000);

    function showModal() {
        const modal = document.querySelector(".modal-window")
        modal.style.display = "block";
    }
}