function convertYonks() {
    const yonks = document.getElementById('yonksInput').value;
    const seconds = yonks * 62341234; // Assuming 1 Yonki Di Donk = 60 seconds
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const funFacts = [
        "Did you know? A group of flamingos is called a 'flamboyance'!",
        "Fun fact: Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible!",
        "Random trivia: Bananas are berries, but strawberries aren't!",
        "Here's a laugh: Why don't scientists trust atoms? Because they make up everything!"
    ];

    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];

    document.getElementById('result').innerText = `${yonks} Yonki Di Donks is approximately ${minutes} minutes and ${remainingSeconds} seconds.`;
    document.getElementById('funFact').innerText = randomFact;
}
