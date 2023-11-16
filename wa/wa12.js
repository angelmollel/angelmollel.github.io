const newQuoteBtn = document.querySelector('#js-new-quote');
const tweetBtn = document.querySelector('#js-tweet');
newQuoteBtn.addEventListener('click', getQuote);
tweetBtn.addEventListener('click', tweetQuote);

const quotableApiEndpoint = 'https://api.quotable.io/random';

async function getQuote() {
    try {
        const response = await fetch(quotableApiEndpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json.content, json.author);
    } catch (err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(quote, author) {
    const quoteTxt = document.querySelector('#js-quote-text');
    quoteTxt.innerHTML = `"${quote}"<br>- ${author}`;
}

function tweetQuote() {
    const quoteText = document.querySelector('#js-quote-text').innerText;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}`;
    window.open(tweetUrl, '_blank');
}
