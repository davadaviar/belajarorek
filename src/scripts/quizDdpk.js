const quizData = [
    {
        question: "Jenis profesi yang wajib memiliki pengetahuan bahasa pemrograman database, mampu menganalisis data dengan akurat, serta berorientasi pada berpikir logis dan metodis merupakan kualifikasi yang wajib dimiliki oleh profesi...",
        a: "Game Developer",
        b: "Database Administrator",
        c: "Programmer",
        d: "Computer Network Engineer",
        e: "Cloud Engineer",
        correct: "b",
    },

    {
        question: "Berikut  merupakan keahlian yang harus dimiliki oleh profesi Computer Network Engineer adalah...",
        a: "Menguasai bahasa pemrograman",
        b: "Pemahaman jaringan internet mulai dari instalasi hingga konfigurasi",
        c: "Memberikan analisa dan rekomendasi perbaikan system",
        d: "Mampu menganalisis data dengan akurat",
        e: "Mampu membuat tampilan aplikasi menjadi menarik",
        correct: "b",
    },

    {
        question: "Seseorang yang berprofesi sebagai data scientist harus membuat pengambilan keputusan strategi perusahaan atau suatu kebijakan pemerintah. Tahapan yang harus dilalui sebelum mencapai tahapan tersebut adalah…",
        a: "Mengumpulkan data – analisis data-membuat kesimpulan",
        b: "Analisis data – mengumpulkan data – membuat kesimpulan",
        c: "Mengumpulkan data – analisis data – mengkomunikasikan hasil – membuat kesimpulan – mengambil keputusan",
        d: "Analisis data – mengumpulkan data – mengkomunikasikan hasil – membuat kesimpulan",
        e: "Mengumpulkan data riset mengenai kemudahan penggunaan aplikasi",
        correct: "c",
    },

    {
        question: "Yang menjadi acuan dalam menjadi standar dalam hubungan dengan kemampuan kerja yang meliputi aspek ketrampilan, pengetahuan dan sikap kerja yang sesuai dengan pelaksanaan tugasnya serta sesuai dengan persyaratan dari pekerjaan yang sudah ditetapkan sesuai dengan ketentuan dalam peraturan perundang-undangan yang berlaku adalah…",
        a: "LSP",
        b: "BNSP",
        c: "KKNI",
        d: "SKKNI",
        e: "SKI",
        correct: "d",
    },

    {
        question: "Perangkat bagian utama pada RT RW Net yang mempunyai fungsi dalam menghubungkan ke pelanggan melalui gelombang radio merupakan….",
        a: "Router",
        b: "Access Point Wireless",
        c: "Media Converter",
        d: "HUB",
        e: "Switch",
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
        <h1>Quiz Dasar-dasar Teknik Komputer Jaringan dan Telekomunikasi</h1>
        <ul class="instruction">
            <li>Quiz berikut berisi 5 pertanyaan</li>
            <li>Quiz ini hanya sebagai peninjauan kembali pengetahuan anda di modul ini</li>
            <li>Quiz ini bersifat sebagai nilai tambah dari tugas akhir anda</li>
        </ul>

        <a href="quiz-ddpk.html" class="quiz-btn btn btn-primary">Mulai Quiz</a>
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
        <a href="submission-ddpk.html" class="btn btn-primary btn-next">Selanjutnya</a>
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