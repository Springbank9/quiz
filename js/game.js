const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText")
const hint = document.getElementsByClassName("hint")

let currentQuestion=[];
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Question 1?", 
        choice1: "<answer1>",
        choice2: "<answer2>",
        choice3: "<answer3>",
        choice4: "<answer4>",
        answer: 1,
        hint: "hint"
    }, 
    {
        question: "Question 2?", 
        choice1: "<beetroot>",
        choice2: "<tea>",
        choice3: "<keys>",
        choice4: "<vape>",
        answer: 2
    }, 
    {
        question: "Question 3?", 
        choice1: "<answer1>",
        choice2: "<answer2>",
        choice3: "<answer3>",
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
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

function startGame() { 
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        return window.location.assign("/end.html");
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
availableQuestions.splice(questionIndex, 1);
acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    });
});

startGame();