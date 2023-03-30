// Quiz data
const quizdata = [
  {
    question: "Which framework is related to JS?",
    a: ".net",
    b: "flask",
    c: "react",
    d: "django",
    correct: "c",
  },
  {
    question: "Which is not a programming language?",
    a: "html",
    b: "java",
    c: "c",
    d: "javascript",
    correct: "a",
  },
  {
    question: "Which is not a framework?",
    a: "react",
    b: "Javascript",
    c: "django",
    d: "angular",
    correct: "b",
  },
  {
    question: "css stands for?",
    a: "cascading style sheet",
    b: "cascading sheets of style",
    c: "cascading sheets",
    d: "none of the above",
    correct: "a",
  },
];

// Quiz elements
const quiz = document.getElementById("quizDiv");
const answers = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const optionA = document.getElementById("a_value");
const optionB = document.getElementById("b_value");
const optionC = document.getElementById("c_value");
const optionD = document.getElementById("d_value");
const submitBtn = document.getElementById("submit");

// Quiz state
let currentQuestion = 0;
let quizScore = 0;

// Load the first question
loadQuiz();

// Load the current question and answers
function loadQuiz() {
  deselectAnswers();

  const currentQuestionData = quizdata[currentQuestion];
  questionEl.innerText = currentQuestionData.question;
  optionA.innerText = currentQuestionData.a;
  optionB.innerText = currentQuestionData.b;
  optionC.innerText = currentQuestionData.c;
  optionD.innerText = currentQuestionData.d;
}

// Deselect all answer options
function deselectAnswers() {
  answers.forEach((answer) => (answer.checked = false));
}

// Submit button click handler
submitBtn.addEventListener("click", () => {
  let selectedAnswer;

  // Find the selected answer
  answers.forEach((answer) => {
    if (answer.checked) {
      selectedAnswer = answer.id;
    }
  });

  // Check if the selected answer is correct and update score
  if (selectedAnswer === quizdata[currentQuestion].correct) {
    quizScore++;
  }

  // Move to the next question or show the final score
  currentQuestion++;

  if (currentQuestion === quizdata.length) {
    quiz.innerText =  
      `<h1>Your score is ${quizScore} out of ${quizdata.length}</h1>
      <button onclick="location.reload()">Reload</button>
      `;
  } else {
    loadQuiz();
  }
});
