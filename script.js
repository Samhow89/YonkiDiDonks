function convertYonks() {
    const yonks = document.getElementById('yonksInput').value;
    if (!yonks) {
        alert("Don't be shy, enter those Yonks!");
        return;
    }
    
    const realTime = yonks * 432; // Because 42 is always the answer!
    document.getElementById('result').innerHTML = `${yonks} Yonki Di Donks is approximately ${realTime} minutes of your precious time!`;

    displayRandomFacts();
    triggerRandomEffects();
}

function displayRandomFacts() {
    const facts = [
        "🌌 Did you know? Yonki Di Donks are the secret currency used to bribe intergalactic squirrels for star maps!",
        "🚀 Fun Fact: The Yonki Di Donks Galactic Congress meets every Thursday to discuss the best donut flavors!",
        "🎩 Breaking News: Yonki Di Donks were originally invented by wizards who needed a magical way to buy invisible ink!",
        "👽 Whoa! You've just unlocked the Yonki Di Donks Time Capsule, which contains the lost recipe for the perfect space pizza!",
        "🎉 Hold on tight! Yonki Di Donks have been discovered to power the world's fastest roller coasters on the Moon!",
        "🍕 Legend says that Yonki Di Donks are the only thing that can make pizza teleport directly to your mouth!",
        "🌠 Breaking News: A Yonki Di Donk was recently spotted in a nebula, where it was reportedly leading a conga line with aliens!",
        "💃 Did you know? Yonki Di Donks are the preferred payment method for dance lessons taught by Martian disco stars!",
        "🛸 Fun Fact: The Yonki Di Donks' official mascot is a dancing llama who has his own theme song on Pluto!",
        "🚀 Rumor has it that Yonki Di Donks are used as fuel for spaceships piloted by intergalactic circus performers!",
        "🎩 Breaking News: Yonki Di Donks have been found to be the only thing that can calm a stampeding herd of cosmic cows!",
        "🍕 Hold on tight! Yonki Di Donks are the secret ingredient in the most delicious galactic nachos you've never tasted!",
        "🌌 Did you know? Yonki Di Donks are rumored to be the secret ingredient in Martian ice cream that never melts!",
        "🛸 Fun Fact: Yonki Di Donks were once used as currency in a parallel universe where everyone is a talking potato!",
        "💃 Whoa! Yonki Di Donks have been scientifically proven to make you dance like a robot with a caffeine rush!",
        "🚀 Breaking News: The Yonki Di Donks Space Agency is developing a new rocket powered solely by laughter and glitter!",
        "🌠 Did you know? Yonki Di Donks can only be found in the pockets of interdimensional trousers worn by time-traveling penguins!",
        "🎉 Hold on tight! Yonki Di Donks are the primary source of energy for the Galactic Karaoke Championship held on Mars!",
        "🍕 Fun Fact: Yonki Di Donks are the official currency used to bribe the Galactic Judge of the Great Interstellar Food Fight!",
        "🚀 Did you know? Yonki Di Donks are known to have magical properties that can turn mundane objects into floating marshmallows!",
        "🎩 Breaking News: Yonki Di Donks are rumored to have been used to pay off ancient space pirates who were obsessed with disco balls!",
        "🌌 Hold on tight! Yonki Di Donks have been spotted in a parallel universe where unicorns are the ruling class!",
        "🛸 Fun Fact: Yonki Di Donks were recently found to be the secret ingredient in a potion that grants you the power to talk to squirrels!",
        "💃 Whoa! Yonki Di Donks are said to be the favorite snack of friendly extraterrestrial beings who love to breakdance!",
        "🚀 Did you know? Yonki Di Donks are the only thing that can power a spaceship capable of reaching the edge of the universe before lunch!",
        "🌠 Fun Fact: The Yonki Di Donks Galactic Olympics includes events like zero-gravity hopscotch and cosmic limbo!",
        "🍕 Breaking News: Yonki Di Donks have been discovered to be the only food that can make a black hole taste like chocolate!",
        "🎉 Hold on tight! Yonki Di Donks are the only things that can make a meteor shower look like a dazzling fireworks display!",
        "🎩 Did you know? Yonki Di Donks were once used to fund the construction of a giant rubber duck floating in Saturn's rings!",
        "🛸 Fun Fact: Yonki Di Donks are the universal payment for a concert featuring the most famous alien rock band, The Cosmic Crustaceans!",
        "💃 Breaking News: Yonki Di Donks are known to be the only cure for a case of the space hiccups that affect time-traveling acrobats!",
        "🚀 Hold on tight! Yonki Di Donks have been discovered to have magical properties that turn ordinary objects into bouncing jellybeans!",
        "🌌 Did you know? Yonki Di Donks are the only currency accepted in the intergalactic market for inflatable space suits!",
        "🍕 Fun Fact: Yonki Di Donks are said to be the only thing that can turn a boring day into an epic adventure across the galaxy!",
        "🎉 Breaking News: Yonki Di Donks are the secret ingredient in a recipe that makes your dreams come true while you sleep on the Moon!",
        "🎩 Hold on tight! Yonki Di Donks are known to make space-time rifts close with a sparkle and a loud whoosh!",
        "🛸 Did you know? Yonki Di Donks are the official prize for winning the annual Galactic Cheese Rolling Championship!",
        "💃 Fun Fact: Yonki Di Donks are the only thing that can make a robotic vacuum cleaner break out into spontaneous dance routines!",
        "🚀 Whoa! Yonki Di Donks have been discovered to be the only food that can make a wormhole taste like a gourmet pizza!",
        "🌠 Breaking News: Yonki Di Donks are the preferred payment for magical potions that turn your laughter into sparkling stardust!",
        "🍕 Hold on tight! Yonki Di Donks are the secret ingredient in a cosmic cake that makes you float like a feather in zero gravity!"
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

    setTimeout(() => headlights.style.display = 'none', 500000);
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
    setTimeout(() => danceParty.style.display = 'none', 50000);
}

function launchFireworks() {
    const fireworkContainer = document.getElementById('fireworks');
    fireworkContainer.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.top = Math.random() * 100 + 'vh';
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.animationDuration = 1 + Math.random() * 1.5 + 's';
        fireworkContainer.appendChild(firework);
    }

    setTimeout(() => fireworkContainer.innerHTML = '', 300000);
}

function playLaughTrack() {
    const laughTrack = document.getElementById('laugh-track');
    laughTrack.play();
}

let conversionCount = 0;
const maxConversions = Math.floor(Math.random() * (10 - 3 + 1)) + 3; // Random number between 3 and 10

function convertYonks() {
    const yonks = document.getElementById('yonksInput').value;
    if (!yonks) {
        alert("Don't be shy, enter those Yonks!");
        return;
    }
    
    const realTime = yonks * 42; // Because 42 is always the answer!
    document.getElementById('result').innerHTML = `${yonks} Yonki Di Donks is approximately ${realTime} minutes of your precious time!`;

    updateProgressBar();
    displayRandomFacts();
    triggerRandomEffects();
}

function updateProgressBar() {
    conversionCount++;
    const progressBar = document.getElementById('progress-bar');
    const progress = (conversionCount / maxConversions) * 100;
    progressBar.style.width = progress + '%';

    // Update the gradient position to reflect progress
    const gradientPosition = 100 - progress; // Calculate the position for the gradient
    progressBar.style.backgroundPosition = `${gradientPosition}% center`;

    if (conversionCount >= maxConversions) {
        triggerShakeEffect();
        resetProgress();
    }
}

function triggerShakeEffect() {
   document.body.classList.add('shake');
   releaseGifsTwo();
   startFireEffect();
   startSirenEffect();
  
    
}

function resetProgress() {
    conversionCount = 0;
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('progress-bar').style.backgroundPosition = 'left center'; // Reset gradient position
}


function releaseGifsTwo() {
    const gifContainer = document.getElementById('gif-containertwo');
    gifContainer.innerHTML = '';

    for (let i = 0; i < 200; i++) {
        const gif = document.createElement('div');
        gif.className = 'flying-giftwo';
        gif.style.top = Math.random() * 100 + 'vh';
        gif.style.left = Math.random() * 100 + 'vw';
        gif.style.animationDuration = 2 + Math.random() * 2 + 's';
        gifContainer.appendChild(gif);
    }
}



function startFireEffect() {
    const fireContainer = document.getElementById('fire-container');
    fireContainer.innerHTML = '';

    for (let i = 0; i < 100; i++) {
        const fire = document.createElement('div');
        fire.className = 'fire';
        fire.style.left = Math.random() * 100 + 'vw';
        fire.style.animationDuration = 0.5 + Math.random() * 0.5 + 's';
        fireContainer.appendChild(fire);
    }

    fireContainer.style.display = 'block';

    setTimeout(() => {
        fireContainer.innerHTML = '';
        fireContainer.style.display = 'none';
    }, 20000); // Fire lasts for 10 seconds
}

function startSirenEffect() {
    const sirenLights = document.getElementById('siren-lights');
    const sirenAudio = document.getElementById('siren-audio');

    sirenLights.innerHTML = '<div class="siren-flash"></div>';
    sirenLights.style.display = 'block';
    sirenAudio.play();

    setTimeout(() => {
        sirenLights.style.display = 'none';
        sirenAudio.pause();
        sirenAudio.currentTime = 0;
    }, 20000); // Siren lasts for 10 seconds
}