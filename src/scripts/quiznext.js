const numbers = document.querySelectorAll(".number");

for (let number = 0; number < numbers.length; number++) {
    const element = numbers[number];

    element.addEventListener("click", changeQuiz);

    function changeQuiz(element, index = 3) {

        if (element.target === numbers[index]) {

            const page = document.querySelector(".page");
            page.innerHTML = `<p>${quiz[index].number} of ${quiz.length}</p>`

            const quiz1 = document.querySelector(".question");
            quiz1.innerHTML = `<p>${quiz[index].question}</p>`;

            const quizBody = document.querySelector(".quiz-body")
            
            const questionContainer = document.querySelector(".question-container");
           
            const options = document.createElement("div");
            options.classList.add("options");

            const answer1 = document.createElement("div");
            answer1.classList.add("answer");
            answer1.classList.add("option-a");
            answer1.innerText = `${quiz[index].answers[0]}`;

            const answer2 = document.createElement("div");
            answer2.classList.add("answer");
            answer2.classList.add("option-b");
            answer2.innerText = `${quiz[index].answers[1]}`;

            const answer3 = document.createElement("div");
            answer3.classList.add("answer");
            answer3.classList.add("option-c");
            answer3.innerText = `${quiz[index].answers[2]}`;

            const answer4 = document.createElement("div");
            answer4.classList.add("answer");
            answer4.classList.add("option-d");
            answer4.innerText = `${quiz[index].answers[3]}`;

            const answer5 = document.createElement("div");
            answer5.classList.add("answer");
            answer5.classList.add("option-a");
            answer5.innerText = `${quiz[index].answers[4]}`;
           
            options.append(answer1, answer2, answer3, answer4, answer5);
            questionContainer.append(options);
            quizBody.appendChild(questionContainer);

        } 
    }
}