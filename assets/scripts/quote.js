// Simple script to populate the main page banner with a random quote.
// Quotes should not exceed 50 characters.

quotes = [
    ['Computers aren’t the thing;<br>they’re the thing that gets us to the thing.', 'https://www.imdb.com/title/tt2543312/'],
    ['So much for the little training cruise.', 'https://www.imdb.com/title/tt0084726/'],
    ['The only good system is a sound system.', 'https://twitter.com/showmepixels/status/837315056031313920'],
    ['Festina Lente', 'https://en.wikipedia.org/wiki/Festina_lente'],
]

window.addEventListener("load", (event) => {
    var node = document.getElementById('quote');
    node.innerHTML = formatQuote(getRandomQuote());
});

function formatQuote(quote) {
    return '<a href=\"' + quote[1] + '\">' + quote[0] + '</a>'
}

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)]
}