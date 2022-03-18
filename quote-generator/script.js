const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterButton = document.getElementById("twitter-button");
const newQuoteButton = document.getElementById("new-quote");
const loader = document.getElementById("loader");



let quote = [];
// loading animation
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function loader_complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}
// select random quote from array of quotes
function newQuote() {
  loading();
  const randomQuote = quote[Math.floor(Math.random() * quote.length)];

  if (!randomQuote.author) {
    quoteAuthor.textContent = "Unknown";
  } else {
    quoteAuthor.textContent = randomQuote.author;
  }
  quoteText.textContent = randomQuote.text;
  loader_complete();
}
// select random quote from local array of quotes
function localQuote() {
  loading();
  const localQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  if (!localQuote.author) {
    quoteAuthor.textContent = "Unknown";
  } else {
    quoteAuthor.textContent = localQuote.author;
  }
  quoteText.textContent = localQuote.text;
  loader_complete();
}
// fetching quotes from api
async function getQuote() {
  loading();
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

// event_listeners
newQuoteButton.addEventListener("click", newQuote);
twitterButton.addEventListener("click", tweetQuote);


getQuote();