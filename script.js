function convertYonks() {
    const yonks = document.getElementById('yonksInput').value;
    const totalSeconds = yonks * (92 * 24 * 60 * 60 + 43 * 60 + 69); // 1 Yonki Di Donk = 92 days, 43 minutes, 69 seconds
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    const funFacts = [
        "Did you know? A group of flamingos is called a 'flamboyance'!",
        "Fun fact: Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible!",
        "Random trivia: Bananas are berries, but strawberries aren't!",
        "Here's a laugh: Why don't scientists trust atoms? Because they make up everything!"
    ];

    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];

    document.getElementById('result').innerText = `${yonks} Yonki Di Donks is approximately ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`;
    document.getElementById('funFact').innerText = randomFact;

    createRain();
    playVideo();
}

function createRain() {
    const rainContainer = document.getElementById('rain-container');
    rainContainer.innerHTML = '';

    for (let i = 0; i < 50; i++) {
        const yonk = document.createElement('div');
        yonk.className = 'yonk';
        yonk.innerText = 'Yonk!';
        yonk.style.left = `${Math.random() * 100}vw`;
        yonk.style.animationDuration = `${Math.random() * 2 + 3}s`;
        rainContainer.appendChild(yonk);

        const donk = document.createElement('div');
        donk.className = 'donk';
        donk.innerText = 'Donk!';
        donk.style.left = `${Math.random() * 100}vw`;
        donk.style.animationDuration = `${Math.random() * 2 + 3}s`;
        rainContainer.appendChild(donk);
    }
}

function playVideo() {
    const iframe = document.getElementById('backgroundVideo');
    const src = iframe.src;
    iframe.src = src; // Reload the iframe to ensure autoplay works
}
