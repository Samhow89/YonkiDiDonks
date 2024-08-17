function convertYonks() {
    const yonks = document.getElementById('yonksInput').value;
    if (!yonks) {
        alert("Don't be shy, enter those Yonks!");
        return;
    }
    
    const realTime = yonks * 42; // Because 42 is always the answer!
    document.getElementById('result').innerHTML = `${yonks} Yonki Di Donks is approximately ${realTime} minutes of your precious time!`;

    displayRandomFacts();
    triggerRandomEffects();
}

function displayRandomFacts() {
    const facts = [
        "Did you know? The Yonk-iverse is expanding!",
        "Fun Fact: Yonki Di Donks are the preferred currency on Planet Zog!",
        "Breaking News: Yonki Di Donks have surpassed Bitcoin in value!",
        "Whoa! You've just entered the Yonki Di Donks Hall of Fame!",
        "Hold on tight! Yonki Di Donks are going galactic!",
        "Alert! Yonki Di Donks can be used as fuel for your intergalactic spaceship!",
        "Fun Fact: Yonki Di Donks were found in the last box of cereal in the multiverse!",
        "Breaking News: Yonki Di Donks are now the official time unit in Narnia!",
        "Holy Smokes! Yonki Di Donks just won an Oscar for Best Comedy!",
        "Did you know? Yonki Di Donks are the secret ingredient in Grandma’s famous cookies!"
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('funFact').innerHTML = randomFact;
}

function triggerRandomEffects() {
    rainYonksAndDonks();
    animateClouds();
    activateHeadlights();
    releaseGifs();
    startDanceParty();
    launchFireworks();
    playLaughTrack();
    unleashPartyAnimal();
    explodeYonks();
    floatBalloons();
    releaseConfetti();
}

function rainYonksAndDonks() {
    const rainContainer = document.getElementById('rain-container');
    rainContainer.innerHTML = '';

    for (let i = 0; i < 50; i++) {
        const yonkDonk = document.createElement('div');
        yonkDonk.className = Math.random() < 0.5 ? 'yonk' : 'donk';
        yonkDonk.innerText = Math.random() < 0.5 ? 'Yonk' : 'Donk';
        yonkDonk.style.left = Math.random() * 100 + 'vw';
        yonkDonk.style.animationDuration = 3 + Math.random() * 5 + 's';
        yonkDonk.style.fontSize = (1.5 + Math.random() * 2) + 'em';
        rainContainer.appendChild(yonkDonk);
    }
}

function animateClouds() {
    const cloudContainer = document.getElementById('cloud-container');
    cloudContainer.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloud.style.top = Math.random() * 50 + 'vh';
        cloud.style.left = -150 - Math.random() * 150 + 'px';
        cloud.style.animationDuration = 10 + Math.random() * 10 + 's';
        cloudContainer.appendChild(cloud);
    }
}

function activateHeadlights() {
    const headlights = document.querySelector('.headlights');
    headlights.style.display = 'block';

    document.querySelectorAll('.headlight').forEach(light => {
        light.style.setProperty('--start-x', Math.random());
        light.style.setProperty('--start-y', Math.random());
        light.style.setProperty('--end-x', Math.random());
        light.style.setProperty('--end-y', Math.random());
    });

    setTimeout(() => headlights.style.display = 'none', 5000);
}

function releaseGifs() {
    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        const gif = document.createElement('div');
        gif.className = 'flying-gif';
        gif.style.top = Math.random() * 100 + 'vh';
        gif.style.left = Math.random() * 100 + 'vw';
        gif.style.animationDuration = 4 + Math.random() * 2 + 's';
        gifContainer.appendChild(gif);
    }
}

function startDanceParty() {
    const danceParty = document.getElementById('dance-party');
    danceParty.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const dancer = document.createElement('div');
        dancer.className = 'dancer';
        danceParty.appendChild(dancer);
    }

    danceParty.style.display = 'block';

    setTimeout(() => danceParty.style.display = 'none', 5000);
}

function launchFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    fireworksContainer.innerHTML = '';

    for (let i = 0; i < 20; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 100 + 'vh';
        firework.style.animationDelay = Math.random() * 1.5 + 's';
        fireworksContainer.appendChild(firework);
    }
}

function playLaughTrack() {
    const laughTrack = document.getElementById('laugh-track');
    laughTrack.play();
}

function unleashPartyAnimal() {
    const partyAnimal = document.getElementById('party-animal');
    partyAnimal.style.display = 'block';

    setTimeout(() => partyAnimal.style.display = 'none', 5000);
}

function explodeYonks() {
    const yonkContainer = document.getElementById('exploding-yonks');
    yonkContainer.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        const yonk = document.createElement('div');
        yonk.className = 'exploding-yonk';
        yonk.style.left = Math.random() * 100 + 'vw';
        yonk.style.top = Math.random() * 100 + 'vh';
        yonk.style.animationDuration = 2 + Math.random() * 3 + 's';
        yonkContainer.appendChild(yonk);
    }
}

function floatBalloons() {
    const balloonContainer = document.getElementById('balloon-container');
    balloonContainer.style.display = 'block';

    setTimeout(() => balloonContainer.style.display = 'none', 5000);
}

function releaseConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = '';

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiPiece.style.animationDuration = 3 + Math.random() * 3 + 's';
        confettiContainer.appendChild(confettiPiece);
    }
}
