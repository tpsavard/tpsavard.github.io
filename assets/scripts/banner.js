// Simple script to populate the main page banner with a random quote.
// Quotes should not exceed 50 characters.

quotes = [
    'So much for the little training cruise...',
    'Festina Lente',
    'Frog blast the vent core!',
]

window.addEventListener("load", (event) => {
    var node = document.getElementById('banner');
    node.innerHTML = '&laquo;' + getRandomQuote() + '&raquo;';
});

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)]
}