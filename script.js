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
    createClouds();
    playVideo();
    moveHeadlights();
    showGifs();
    triggerCrazyEffects();
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

function createClouds() {
    const cloudContainer = document.getElementById('cloud-container');
    cloudContainer.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloud.style.left = `${Math.random() * 100}vw`;
        cloud.style.top = `${Math.random() * 20}vh`;
        cloudContainer.appendChild(cloud);
    }
}

function playVideo() {
    const iframe = document.getElementById('backgroundVideo');
    const src = iframe.src;
    iframe.src = src; // Reload the iframe to ensure autoplay works
}

function moveHeadlights() {
    const headlights = document.querySelector('.headlights');
    headlights.style.display = 'block';
    const headlightElements = document.querySelectorAll('.headlight');
    headlightElements.forEach(headlight => {
        headlight.style.setProperty('--start-x', Math.random());
        headlight.style.setProperty('--start-y', Math.random());
        headlight.style.setProperty('--end-x', Math.random());
        headlight.style.setProperty('--end-y', Math.random());
    });
}

function showGifs() {
    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = '';

    const gifs = [
        'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
        'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
        'https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif',
        'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif'
    ];

    for (let i = 0; i < 20; i++) {
        const gif = document.createElement('img');
        gif.src = gifs[Math.floor(Math.random() * gifs.length)];
        gif.className = 'flying-gif';
        gif.style.left = `${Math.random() * 100}vw`;
        gif.style.top = `${Math.random() * 100}vh`;
        gif.style.animationDuration = `${Math.random() * 3 + 2}s`;
        gifContainer.appendChild(gif);
    }
}

function triggerCrazyEffects() {
    // Effect 1: Background color change
    document.body.style.animation = 'colorChange 5s infinite';

    // Effect 2: Random text appearing
    const randomText = document.createElement('div');
    randomText.className = 'random-text';
    randomText.innerText = 'Wow! So many Yonki Di Donks!';
    randomText.style.left = `${Math.random() * 100}vw`;
    randomText.style.top = `${Math.random() * 100}vh`;
    document.body.appendChild(randomText);

    // Effect 3: Spinning container
    const container = document.querySelector('.container');
    container.style.animation = 'spin 5s infinite';

    // Effect 4: Flashing border
    container.style.border = '5px solid';
    container.style.animation = 'flashBorder 1s infinite';

    // Effect 5: Random emojis
    const emojiContainer = document.createElement('div');
    emojiContainer.className = 'emoji-container';
    document.body.appendChild(emojiContainer);

    const emojis = ['😂', '🤣', '😜', '🤪', '🎉'];
    for (let i = 0; i < 10; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.top = `${Math.random() * 100}vh`;
        emojiContainer.appendChild(emoji);
    }
}
