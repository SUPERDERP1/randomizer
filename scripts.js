ownedTitles = ['common'];
function weightedRandomSelection(items) {
    let totalProbability = 0;
    for (let i = 0; i < items.length; i++) {
        totalProbability += 1 / items[i].rarity;
    }

    let randomValue = Math.random() * totalProbability;

    let cumulativeProbability = 0;
    for (let i = 0; i < items.length; i++) {
        cumulativeProbability += 1 / items[i].rarity;
        if (randomValue < cumulativeProbability) {
            return items[i];
        }
    }
}

function displayRandomNumbers() {
    let count = 0;
    let intervalTime = 100;
    const generatedNumbers = new Set();
    let previousTitle = null; 
    const titles = [
        { name: 'common', rarity: 1, color: '#d3d3d3' }, // Light Gray
        { name: 'uncommon', rarity: 2, color: '#90ee90' }, // Light Green
        { name: 'rare', rarity: 5, color: '#add8e6' }, // Light Blue
        { name: 'mythic', rarity: 15, color: '#dda0dd' }, // Plum
        { name: 'lucky', rarity: 25, color: '#ffb6c1' }, // Light Pink
        { name: 'good', rarity: 12, color: '#87ceeb' }, // Sky Blue
        { name: 'gilded', rarity: 25, color: '#98fb98' }, // Pale Green
        { name: 'divine', rarity: 35, color: '#f08080' }, // Light Coral
        { name: 'legendary', rarity: 100, color: '#fdfd96' }, // Pastel Yellow
        { name: 'quartz', rarity: 40, color: '#c0c0c0' } // Silver
    ];

    function generateNumber() {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * 100);
        } while (generatedNumbers.has(randomNumber));

        generatedNumbers.add(randomNumber);

        let randomTitleObj;
        do {
            randomTitleObj = weightedRandomSelection(titles);
        } while (randomTitleObj.name === previousTitle); 

        previousTitle = randomTitleObj.name; 
        const randomTitle = randomTitleObj.name;
        const randomColor = randomTitleObj.color;

        console.log(`${randomTitle} (${randomTitleObj.rarity}), ${randomColor}`);
        const titleDisplay = document.getElementById('titleDisplay');

        titleDisplay.innerHTML = randomTitle;
        titleDisplay.style.setProperty('color', randomColor, 'important'); 

        titleDisplay.classList.remove('animate');
        void titleDisplay.offsetWidth; 
        titleDisplay.classList.add('animate'); 
        setTimeout(() => {
            titleDisplay.classList.remove('animate');
        }, 500);

        count++;

        if (count >= 45) {
            if (randomTitleObj.rarity > 4) {
                bgFade();
            }
            if (!ownedTitles.includes(randomTitle)) {
                ownedTitles.push(randomTitle);
                console.log(`${randomTitle} (${randomTitleObj.rarity})`);
            }
            console.log(ownedTitles);
            return; 
        }

        if (count >= 42) {
            intervalTime += 20;
        } else if (count >= 40) {
            intervalTime += 15;
        } else if (count >= 35) {
            intervalTime += 9;
        } else if (count >= 25) {
            intervalTime += 5;
        } else {
            intervalTime += 1.75;
        }

        setTimeout(generateNumber, intervalTime); 
    }

    generateNumber(); 
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function bgFade(){
    document.body.style.animation = "fade 2s ease-in-out 0s 1";
    sleep(2500).then(() => {document.body.style.animation = "";});
}

document.getElementById('randomize').addEventListener('click', displayRandomNumbers);
document.getElementById('bgFade').addEventListener('click', bgFade);
