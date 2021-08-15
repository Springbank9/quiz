const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Intelligent target seeking devices that sought Iranian centrifuges?", 
        choice1: "Stuxnet",
        choice2: "WannaCry",
        choice3: "<answer3>",
        choice4: "<answer4>",
        answer: 1,
    }, 
    {
        question: "Nothing ruins an argument like facts?", 
        choice1: "<beetroot>",
        choice2: "<tea>",
        choice3: "<keys>",
        choice4: "<vape>",
        answer: 2
    }, 
    {
        question: "Who was the most famous cycnic in ancient Greek philosophy?", 
        choice1: "<Diogenes>",
        choice2: "<Leieutius>",
        choice3: "<Aristotle>",
        choice4: "<answer4>",
        answer: 3
    }, 
    {   question: "Question 4?", 
        choice1: "<answer1>",
        choice2: "<answer2>",
        choice3: "<answer3>",
        choice4: "<answer4>",
        answer: 4
}
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => { 
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        //go to the end page
        return window.location.assign("/end.html");
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //every time questions are incremented ,progress bar needs to be updated
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
availableQuestions.splice(questionIndex, 1);
acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
//use ternary opertor 
        const classToApply = 
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if(classToApply === "correct"){
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