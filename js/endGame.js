const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');


const SCORES = 1;

finalScore.innerText = mostRecentScore;
