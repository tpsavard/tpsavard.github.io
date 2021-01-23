// Simple script to populate the main page banner with a random quote.
// Quotes should not exceed 50 characters.

quotes = [
    'Computers aren’t the thing; they’re the thing that gets us to the thing.',
    'So much for the little training cruise.',
    'The only good system is a sound system.',
    'Festina Lente',
]

window.addEventListener("load", (event) => {
    var node = document.getElementById('quote');
    node.innerHTML = getRandomQuote();
});

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)]
}