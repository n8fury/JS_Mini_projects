let quote = [];

function newQuote() {
  const randomQuote = quote[Math.floor(Math.random() * quote.length)];
  console.log(randomQuote);
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