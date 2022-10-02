const answers = document.querySelectorAll(".answer");

for (let answer = 0; answer < answers.length; answer++) {
    const element = answers[answer];

    element.addEventListener("click", nextBtnActive);

    function nextBtnActive(event) {
        event.preventDefault();

        const nextBtn = document.querySelector(".btn-next");
        nextBtn.classList.remove("btn-secondary");
        nextBtn.classList.add("btn-primary");
        nextBtn.style.transition = "all 0.4s ease";
    }
    
}

const btnNext = document.querySelector(".btn-next");

btnNext.addEventListener("click", nextQuiz);

function nextQuiz() {
    const page = document.querySelector(".page");
    page.innerHTML = "<p>2 of 2</p>";

    const firstQuestion = document.querySelector(".first-question");
    firstQuestion.innerHTML = "<p>Apa perintah untuk membuat custom IP Address dan custom subnetmask pada DHCP Server di Debian?</p>";

    const optionA = document.querySelector(".option-a");
    optionA.innerHTML = "$ su";

    const optionB = document.querySelector(".option-b");
    optionB.innerHTML = "nano /etc/init.d/networking restart";

    const optionC = document.querySelector(".option-c");
    optionC.innerHTML = "nano /etc/network/interfaces";

    const optionD = document.querySelector(".option-d");
    optionD.innerHTML = "ip a";

    const optionE = document.querySelector(".option-e");
    optionE.innerHTML = "nano /etc/dhcp/dhcpd.conf";

    const btnNext = document.querySelector(".btn-next");
    btnNext.classList.remove("btn-primary");
    btnNext.classList.add("btn-secondary");

    const options = [optionA, optionB, optionC, optionD, optionE];

    options.forEach((option) => {
        option.addEventListener("click", () => {
            const btnNext = document.querySelector(".btn-next");
            btnNext.classList.remove("btn-secondary");
            btnNext.classList.add("btn-primary");

            btnNext.addEventListener("click", finishQuiz);

            function finishQuiz() {
                const score = document.querySelector(".score");
                score.innerText = "100";

                const quizStatus = document.querySelector(".quiz-status");
                quizStatus.style.border = "2px solid var(--success)";
                quizStatus.style.backgroundColor = "#B0EACD";
                quizStatus.style.color = "var(--success)";
                quizStatus.innerHTML = "<p>Lulus</p>"
            }
        })
    })
}