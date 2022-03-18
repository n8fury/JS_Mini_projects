const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterButton = document.getElementById("twitter-button");
const newQuoteButton = document.getElementById("new-quote");

let quote = [];
// select random quote from array of quotes
function newQuote() {
  const randomQuote = quote[Math.floor(Math.random() * quote.length)];
  quoteText.textContent = randomQuote.text;
  if (!randomQuote.author) {
    quoteAuthor.textContent = "Unknown";
  } else {
    quoteAuthor.textContent = randomQuote.author;
  }
}
// select random quote from local array of quotes
function localQuote() {
  const localQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  quoteText.textContent = localQuote.text;
  if (!localQuote.author) {
    quoteAuthor.textContent = "Unknown";
  } else {
    quoteAuthor.textContent = localQuote.author;
  }
}
// fetching quotes from api
async function getQuote() {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    quote = await response.json();
    newQuote();
  } catch (error) {
    localQuote();
  }
}
// post to twitter function
function tweetQuote() {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(tweetUrl, "_blank");
}


getQuote();
// event_listeners
newQuoteButton.addEventListener("click", newQuote);
twitterButton.addEventListener("click", tweetQuote);