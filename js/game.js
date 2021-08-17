const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
      question: "The technological singularity—or simply the singularity[1]—is a hypothetical point in time at which technological growth becomes uncontrollable and irreversible, resulting in unforeseeable changes to human civilization?", 
      choice1: "<answer1>",
      choice2: "<answer2>",
      choice3: "<answer3>",
      answer: 1,
  }, 
  {
      question: "Question 2?", 
      choice1: "<beetroot>",
      choice2: "<tea>",
      choice3: "<keys>",
      answer: 2
  }, 
  {
      question: "Question 3?", 
      choice1: "<answer1>",
      choice2: "<answer2>",
      choice3: "<answer3>",
      answer: 3
  }, 
  {   question: "Intelligent target seeking devices: e.g. Stuxnet that sought Iranian centrifuges?", 
      choice1: "<answer1>",
      choice2: "<answer2>",
      choice3: "<answer3>",
      answer: 1
},
{
  question: "The technological singularity—or simply the singularity[1]—is a hypothetical point in time at which technological growth becomes uncontrollable and irreversible, resulting in unforeseeable changes to human civilization?", 
  choice1: "<answer1>",
  choice2: "<answer2>",
  choice3: "<answer3>",
  answer: 1,
}, 
{
  question: "The technological singularity—or simply the singularity[1]—is a hypothetical point in time at which technological growth becomes uncontrollable and irreversible, resulting in unforeseeable changes to human civilization?", 
  choice1: "<answer1>",
  choice2: "<answer2>",
  choice3: "<answer3>",
  answer: 1,
}, 
{
  question: "The technological singularity—or simply the singularity[1]—is a hypothetical point in time at which technological growth becomes uncontrollable and irreversible, resulting in unforeseeable changes to human civilization?", 
  choice1: "<answer1>",
  choice2: "<answer2>",
  choice3: "<answer3>",
  answer: 1,
}, 
{
  question: "The technological singularity—or simply the singularity[1]—is a hypothetical point in time at which technological growth becomes uncontrollable and irreversible, resulting in unforeseeable changes to human civilization?", 
  choice1: "<answer1>",
  choice2: "<answer2>",
  choice3: "<answer3>",
  answer: 1,
}, 
{
  question: "The technological singularity—or simply the singularity[1]—is a hypothetical point in time at which technological growth becomes uncontrollable and irreversible, resulting in unforeseeable changes to human civilization?", 
  choice1: "<answer1>",
  choice2: "<answer2>",
  choice3: "<answer3>",
  answer: 1,
}, 
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 15;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();