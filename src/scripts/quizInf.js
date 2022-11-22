const quizData = [
    {
        question: "Jenis program di komputer yang memungkinkan Anda mengakses situs web adalah",
        a: "Pencari Situs",
        b: "Internet Provider",
        c: "Web Browser",
        d: "Google",
        e: "Search Engine",
        correct: "d",
    },

    {
        question: "Urutan perintah yang digunakan untuk menyisipkan gambar / foto di dokumen Word adalah",
        a: "Insert -> Shapes",
        b: "Insert -> Smart Art",
        c: "Insert -> Picture ",
        d: "Insert -> Chart",
        e: "Insert -> Clip Art",
        correct: "c",
    },

    {
        question: "Program Microsoft Excel termasuk ke dalam jenis program",
        a: "Word processing",
        b: "Programming",
        c: "Database",
        d: "Spreadsheet",
        e: "Desktop publish",
        correct: "d",
    },

    {
        question: "Untuk penulisan rumus jumlah di sel B2 dengan sel C2 yang benar di bawah ini adalah",
        a: "=Sum(B2:C2)",
        b: "=Sum(B2…C2)",
        c: "=Sum(B2,C2)",
        d: "+Sum(B2…C2)",
        e: "=Sum(B2;C2) ",
        correct: "a",
    },

    {
        question: "Aplikasi untuk membuat presentasi pada laptop/ PC adalah",
        a: "Ms Acses",
        b: "Ms Word",
        c: "Ms Excel",
        d: "Ms Power Point",
        e: "Ms Outlock",
        correct: "d",
    }
];

const quiz= document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
};

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
};

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
};

function nextPage() {
    window.location.href = "submission.html"
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()
    if(answer) {

       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {

            if (score < 4) {

                quiz.innerHTML = `
                <h4>Anda sudah menjawab ${score}/${quizData.length} dengan benar</h4>
                <button onclick="location.reload()">Ulangi</button>   `
            } else {
                quiz.innerHTML = `
                <h4>Anda sudah menjawab ${score}/${quizData.length} dengan benar</h4>
                <button onclick="nextPage()">Selanjutnya</button>   `
            }
       }
    }
});