var quotes = ['"Drink a glass of water"', '"Step outside"', '"Take 10 deep breaths"', '"Think of something you are grateful for"', '"Do a few stretches"', '"Meditate"'];

var i = 0;  // the index of the current item to show

window.onload = setInterval(function() {            // setInterval makes it run repeatedly
    document
        .getElementById('quote_array')
        .innerHTML = quotes[i++];    // get the item and increment i to move to the next
    if (i == quotes.length) i = 0;   // reset to first element if you've reached the end
}, 1500);
