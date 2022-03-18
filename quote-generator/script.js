const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterButton = document.getElementById("twitter-button");
const facebookButton = document.getElementById("facebook-button");
const newQuoteButton = document.getElementById("new-quote");

let quote = [];

function newQuote() {
  const randomQuote = quote[Math.floor(Math.random() * quote.length)];
  quoteText.textContent = randomQuote.text;
  if (!randomQuote.author) {
    quoteAuthor.textContent = "Unknown";
  } else {
    quoteAuthor.textContent = randomQuote.author;
  }

}

function localQuote() {
  const localQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(localQuote);
}

async function getQuote() {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    quote = await response.json();
    newQuote();
  } catch (error) {
    // Do something for an error here
    localQuote();
  }
}
getQuote();