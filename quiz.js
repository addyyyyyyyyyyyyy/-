// JavaScript code for the quiz
const quizData = [
  {
    question: "Apka naam kya hai?",
    correct: "Aqsa",
    message: "Ary doodd, To agla ques tabhi dikhega jab answer correct hoga, chaliye fir aage badhte hai or aapka memory test karte hai (Answer sabka one word hai)"
  },
  {
    question: "Hum pehli baar kaha mile (Jaha aap jaati thi or me bhi)?",
    correct: "Tution",
    message: "Nicee, ye hint samjhane ke liye tha ki kese chalega aage to ab se no hint!"
  },
  // Add more quiz data here...
];

let currentQuestion = 0;
let userAnswers = [];

function showQuestion() {
  const questionElement = document.getElementById("question");
  const answerInput = document.getElementById("answerInput");
  const resultElement = document.getElementById("result");
  questionElement.innerText = quizData[currentQuestion].question;
  answerInput.value = "";
  resultElement.innerText = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
  const isCorrect = userAnswer === quizData[currentQuestion].correct.toLowerCase();
  userAnswers.push({
    question: quizData[currentQuestion].question,
    userAnswer: userAnswer,
    correctAnswer: quizData[currentQuestion].correct,
    isCorrect: isCorrect
  });
  const resultElement = document.getElementById("result");
  if (isCorrect) {
    resultElement.innerText = quizData[currentQuestion].message;
  } else {
    resultElement.innerText = "Answer is wrong! Dhyan se soch kar answer kare.";
  }
  const nextBtn = document.getElementById("nextBtn");
  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  const nextBtn = document.getElementById("nextBtn");
  const quizContainer = document.getElementById("quiz");
  const finalMessage = document.getElementById("finalMessage");
  const questionElement = document.getElementById("question");
  const answerInput = document.getElementById("answerInput");
  const resultElement = document.getElementById("result");
  resultElement.innerText = "";
  nextBtn.style.display = "none";
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    quizContainer.style.display = "none";
    finalMessage.style.display = "block";
    console.log("User Answers:", userAnswers);
    // Add heart animation code here...
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showQuestion();
});
