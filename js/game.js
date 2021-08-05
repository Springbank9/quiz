const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

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
        answer: 1
    }, 
    {
        question: "Question 2?", 
        choice1: "<answer1>",
        choice2: "<answer2>",
        choice3: "<answer3>",
        choice4: "<answer4>",
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