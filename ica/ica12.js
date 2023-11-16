const newBtn = document.querySelector('#js-new-quote');
newBtn.addEventListener('click', getQuote);

const answerBtn = document.querySelector('#js-tweet');
answerBtn.addEventListener('click', displayAnswer);
let answer = "";

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json['question']);
        answer = json['answer'];
    } catch (err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(question) {
    const questionTxt = document.querySelector('#js-quote-text');
    questionTxt.textContent = question;
    answer = ""; 
}

function displayAnswer() {
    const answerTxt = document.querySelector('#js-answer-text');
    answerTxt.textContent = answer;
}

getQuote();
