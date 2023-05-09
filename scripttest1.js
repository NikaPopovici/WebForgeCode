const quizData = [
    {
        question: "Care este diferența între elementele <header> și <nav> din HTML5?",
        a: "Nu există nicio diferență",
        b: "Elementul <header> este utilizat pentru a defini inceputul unui cod, iar <nav> pentru a defini inceputul barei de meniu",
        c: " Elementul <nav> este utilizat pentru a defini secțiunea de știri",
        d: "Elementul <header> este utilizat pentru a defini capul paginii, în timp ce <nav> este utilizat pentru a defini meniul de navigare",
        correct: "d",
    },
    {
        question: "Care este scopul elementului <article> din HTML5?",
        a: "Pentru a defini o secțiune de navigare",
        b: "Pentru a defini un articol de presă sau o știre",
        c: "Pentru a defini o secțiune de reclame",
        d: "Pentru a defini o sectiune de bloc",
        correct: "b",
    },
    {
        question: "Care este atributul utilizat pentru a specifica font-ul în etichetele text in HTML5?",
        a: "face",
        b: "style",
        c: "font",
        d: "text-font",
        correct: "a",
    },
    {
        question: "Care este rolul elementului <canvas> în HTML5?",
        a: "Pentru a afișa un video în timp real",
        b: "Pentru a desena grafice și animații",
        c: "Pentru a crea efecte de tip parallax scrolling",
        d: "Pentru a include video si aufio efecte",
        correct: "b",
    },

];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
	d_text.innerText = currentQuizData.d
	
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
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
           <h2>Scorul tau ${score}/${quizData.length} raspunsuri corecte</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})