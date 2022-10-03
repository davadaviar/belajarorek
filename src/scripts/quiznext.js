const numbers = document.querySelectorAll(".number");

for (let number = 0; number < numbers.length; number++) {
    const element = numbers[number];
    
    element.addEventListener("click", changeQuiz);

    function changeQuiz(element) {

        if (element.target === numbers[0]) {
            const quiz1 = document.querySelector(".question");
            quiz1.innerHTML = "<p>Apa perintah ketika kita ingin menginstal dhcp server pertama kali pada debian?</p>";

            const answers = document.querySelectorAll(".answer");

            for (let answer = 0; answer < answers.length; answer++) {
                const element = answers[answer];

                
                
            }
        }
    }
}