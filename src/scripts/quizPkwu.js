const quizData = [
    {
        question: "Kemasan yang tidak langsung bersentuhan dengan produk disebut…",
        a: "Primer",
        b: "Sekunder",
        c: "Tersier",
        d: "Kuartener",
        e: "Disposable",
        correct: "c",
    },

    {
        question: "Kemasan yang ramah lingkungan disebut…",
        a: "As little design as possible",
        b: "Anvironmentally friendly",
        c: "Long lasting ",
        d: "Makes a product understandable",
        e: "Aestetic",
        correct: "b",
    },

    {
        question: "Untuk membuat produk yang menarik diperlukan kreatifitas dalam bentuk…",
        a: "Harga yang kompetitif ",
        b: "Tempat usaha yang strategis",
        c: "Kualitas produk",
        d: "Kemasan yang menarik",
        e: "Penampilan produk",
        correct: "d",
    },

    {
        question: "Secara umum kemasan memiliki fungsi kecuali…",
        a: "Melindungi dan mengawetkan produk",
        b: "Meningkatkan efisiensi",
        c: "Sebagai identitas produk",
        d: "Agar lebih menarik konsumen",
        e: "Agar terihat berkualitas",
        correct: "e",
    },

    {
        question: "Daya tarik pada kemasan dapat digolongkan menjadi dua, yaitu…",
        a: "Estetika dan desain",
        b: "Desain dan visual",
        c: "Intrinsic dan ekstrinsik ",
        d: "Estetika dan fungsional",
        e: "Jawaban a dan b benar",
        correct: "e",
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