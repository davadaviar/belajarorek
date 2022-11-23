const quizData = [
    {
        question: "Contoh teknologi yang memanfaatkan gelombang adalah sebagai berikut kecuali...",
        a: "Ponsel",
        b: "Televisi",
        c: "Radio",
        d: "Wifi",
        e: "Kabel LAN",
        correct: "e",
    },

    {
        question: "Layanan internet yang dapat diakses tanpa koneksi kabel fisik ke komputer menggunakan internet adalah pengertian dari...",
        a: "Wireless Internet",
        b: "Wireless Network",
        c: "Wireless Earphone",
        d: "Bluetooth",
        e: "Mi-Fi",
        correct: "a",
    },

    {
        question: "Yang termasuk kelebihan menggunakan jaringan wireless adalah, kecuali...",
        a: "Tingkat mobilitasnya tinggi",
        b: "Proses instalasinya mudah dan cepat",
        c: "Lebih fleksibel",
        d: "Lebih praktis",
        e: "Kecepatan pengiriman data dapat dipengaruhi oleh faktor cuaca dan lingkungan",
        correct: "e",
    },

    {
        question: "Macam - macam metode keamanan pada jaringan wireless adalah...",
        a: "MMA",
        b: "IMMEI",
        c: "WWW",
        d: "WWPA",
        e: "HTTPS",
        correct: "d",
    },

    {
        question: "Pada saat mensetting device laptop untuk menyambungkan ke Access Point, Physical adapter laptop yang dipakai adalah...",
        a: "MODULES",
        b: "WPC300N",
        c: "PT Microphone",
        d: "PT Laptop NM 1CGE",
        e: "PT Headphone",
        correct: "b",
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

function dateBuilder(d) {
    let months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${date} ${month} ${year}`;
}

function nextPage() {

    document.body.innerHTML = `
    <!-- Start : Quiz Page -->
    <div class="instruction-container">
        <h1>Quiz Setting Dasar Wifi</h1>
        <ul class="instruction">
            <li>Quiz berikut berisi 5 pertanyaan</li>
            <li>Quiz ini hanya sebagai peninjauan kembali pengetahuan anda di modul ini</li>
            <li>Quiz ini bersifat sebagai nilai tambah dari tugas akhir anda</li>
        </ul>

        <a href="quiz-twan.html" class="quiz-btn btn btn-primary">Mulai Quiz</a>
    </div>
    <!-- End : Quiz Page -->
    
    <div class="grade-container">
        <hr class="divider">
            <table>
                <tr>
                    <thead>
                        <th>Tanggal</th>
                        <th>Perolehan</th>
                    </thead>
                </tr>
                <tr class="grade-item">
                    <tbody>
                        <td>${dateBuilder(new Date())}</td>
                        <td>${score}/${quizData.length}</td>
                    </tbody>
                </tr>
            </table>
    </div>

    <!-- Start : Pagination -->
    <div class="pagination justify-content-between">
        <a href="modul-x-ddpk-rtrwnet.html" class="btn btn-secondary btn-previous">Sebelumnya</a>
        <a href="submission-twan.html" class="btn btn-primary btn-next">Selanjutnya</a>
    </div>
    <!-- End : Pagination -->
    
    `
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
            quiz.innerHTML = `
            <h3>Anda sudah menjawab ${score}/${quizData.length} dengan benar</h3>
            <button onclick="nextPage()">Selesai</button>   `
       }
    }
});