const quotes = [
"\"Everything we hear is an opinion, not a fact.\" - Marcus Aurelius",
"\"Let come what comes, let go what goes. See what remains.\" - Ramana Maharshi",
"\"Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.\" - Margaret Mead",
"\"Happiness is the meaning and the purpose of life, the whole aim and end of human existence.\" - Aristotle",
"\"One, remember to look up at the stars and not down at your feet.\" - Stephen Hawking"
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote(){
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear();
    }

    while(true){
        const quoteIndex = Math.floor(Math.random() * quotes.length);
        
        if(usedIndexes.has(quoteIndex)){
            continue
        }
        
        const quote = quotes[quoteIndex];
        quoteElement.innerHTML = quote;
        usedIndexes.add(quoteIndex);
        break;
    }
}