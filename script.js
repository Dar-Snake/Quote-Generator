const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote-btn");
const postingBtn = document.getElementById("posting-btn");

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}


getQuote(api_url);
newQuoteBtn.addEventListener("click", getQuote.bind(null, api_url));

postingBtn.addEventListener("click", tweet);
function tweet() {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quote.innerHTML} - ${author.innerHTML}`;
  window.open(tweetUrl, "_blank", "width=600,height=300");
}