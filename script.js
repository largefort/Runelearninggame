const runes = [
    { symbol: "ᚠ", meaning: "wealth" },
    { symbol: "ᚢ", meaning: "aurochs, strength" },
    { symbol: "ᚦ", meaning: "thorn, giant" },
    { symbol: "ᚨ", meaning: "god, ancestral god" },
    { symbol: "ᚱ", meaning: "ride, journey" },
    { symbol: "ᚲ", meaning: "torch" },
    { symbol: "ᚷ", meaning: "gift" },
    { symbol: "ᚹ", meaning: "joy" },
    { symbol: "ᚺ", meaning: "hail" },
    { symbol: "ᚾ", meaning: "need" },
    { symbol: "ᛁ", meaning: "ice" },
    { symbol: "ᛃ", meaning: "year, good year, harvest" },
    { symbol: "ᛇ", meaning: "yew-tree" },
    { symbol: "ᛈ", meaning: "lot-cup, fate" },
    { symbol: "ᛉ", meaning: "elk" },
    { symbol: "ᛊ", meaning: "sun" },
    { symbol: "ᛏ", meaning: "Tiwaz, the god Tyr" },
    { symbol: "ᛒ", meaning: "birch" },
    { symbol: "ᛖ", meaning: "horse" },
    { symbol: "ᛗ", meaning: "man" },
    { symbol: "ᛚ", meaning: "water, lake" },
    { symbol: "ᛜ", meaning: "inheritance, estate" },
    { symbol: "ᛟ", meaning: "heritage, estate, possession" },
    { symbol: "ᛞ", meaning: "day" }
];

function generateRune() {
    const runeIndex = Math.floor(Math.random() * runes.length);
    const rune = runes[runeIndex];
    
    document.querySelector('.rune-display').textContent = rune.symbol;
    
    const optionsContainer = document.querySelector('.options-container');
    optionsContainer.innerHTML = '';
    
    runes.forEach(runeOption => {
        const button = document.createElement('button');
        button.textContent = runeOption.meaning;
        button.onclick = function() { checkAnswer(runeOption.symbol, rune.symbol) };
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedSymbol, correctSymbol) {
    const feedback = document.querySelector('.feedback');
    if (selectedSymbol === correctSymbol) {
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = "Wrong, try again!";
    }
}

generateRune();
