const submitBtn = document.querySelector(".btn-submit");
submitBtn.addEventListener("click", openModal);

function openModal() {
    setTimeout(showModal, 2000);

    function showModal() {
        const modal = document.createElement("div");
        modal.classList.add("modal-window");

        const modalWrapper = document.createElement("div")
        modalWrapper.classList.add("modal-wrapper");
        modalWrapper.classList.add("text-center");

        const modalHeader = document.createElement("div");
        modalHeader.classList.add("modal-header");

        const icon = document.createElement("i");
        icon.classList.add("fa");
        icon.classList.add("fa-check-circle");
        icon.classList.add("fa-5x");
        icon.classList.add("icon-check");

        const heading = document.createElement("h4");
        heading.innerText = "Yeayy, tugasmu sudah dikumpulkan";

        modalHeader.append(icon, heading);

        const modalBody = document.createElement("div");
        modalBody.classList.add("modal-body");

        const text = document.createElement("p");
        text.innerText = "Lihat status tugasmu pada halaman dashboardmu";

        const btn = document.createElement("a");
        btn.setAttribute("href", "dashboard.html");
        btn.classList.add("btn");
        btn.classList.add("btn-primary");
        btn.classList.add("btn-lg");
        btn.classList.add("btn-dashboard");
        btn.classList.add("shadow-sm");
        btn.innerText = "Dashboard";

        modalBody.append(text, btn);
        
        modalWrapper.append(modalHeader, modalBody);

        modal.append(modalWrapper);

        document.body.appendChild(modal);
    }
}