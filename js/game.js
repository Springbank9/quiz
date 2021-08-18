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
      question: "What is the term to describe a hypothetical point in time at which technological growth becomes uncontrollable and irreversible, resulting in unforeseeable changes to human civilization?", 
      choice1: "Singularity",
      choice2: "Panpsychism",
      choice3: "Hylozoism",
      answer: 1,
  }, 

  {
      question: "Diogenes of Sinope was one of the founders of which school of philosophy?", 
      choice1: "Stoicism",
      choice2: "Epicureanism",
      choice3: "Cynicism",
      answer: 3
  }, 
  {   question: "What was the name of the intelligent target seeking device that sought Iranian centrifuges?", 
      choice1: "Stuxnet",
      choice2: "WannaCry",
      choice3: "Petya",
      answer: 1
},
{
  question: "What names were given to the fictional characters commonly used as placeholders in discussions about cryptographic protocols or systems, and in other science and engineering literature?", 
  choice1: "Bob and Alice",
  choice2: "Bob and Joe",
  choice3: "Alice and Rob",
  answer: 1,
}, 
{
  question: "Who said: 'As we know, there are known knowns; there are things we know we know. We also know there are known unknowns; that is to say we know there are some things we do not know. But there are also unknown unknowns—the ones we don't know we don't know.'?", 
  choice1: "Donald Rumsfeld",
  choice2: "Isaac Newton",
  choice3: "Ludwig wittgenstein",
  answer: 1,
}, 
{
  question: "What does the word 'recalcitrance' mean?", 
  choice1: "The quality of being determined not to do what other people, especially people in authority, want or expect to be done.",
  choice2: "A situation in which a series of unwelcome or tedious events appear to be recurring in exactly the same way.",
  choice3: "The quality of having unlimited power and the ability to do anything.",
  answer: 1,
}, 
{
  question: "In defeating Kasparov on May 11 1997, what was the name of the machine that made history as the first computer to beat a world champion chess player?", 
  choice1: "IBM Watson",
  choice2: "Deep Blue",
  choice3: "Horace",
  answer: 2,
}, 
{
  question: "Which agricultural practice best describes farming holistically with livestock and trees?", 
  choice1: "Organic Farming",
  choice2: "Agroforestry",
  choice3: "Plantation management",
  answer: 2,
}, 

];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 8;

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