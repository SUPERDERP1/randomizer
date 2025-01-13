ownedTitles = ['common'];
function weightedRandomSelection(items) {
    // Calculate the cumulative sum of probabilities
    let totalProbability = 0;
    for (let i = 0; i < items.length; i++) {
        totalProbability += 1 / items[i].rarity;
    }

    // Generate a random number between 0 and 1
    let randomValue = Math.random() * totalProbability;

    // Select the item based on the random number
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
    let interval = setInterval(generateNumber, intervalTime);
    const generatedNumbers = new Set();
    let titles = [
        {name:'common', rarity:1}, 
        {name:'uncommon', rarity:2}, 
        {name:'rare', rarity:5}, 
        {name:'mythic', rarity:15}, 
        {name:'lucky', rarity:25}, 
        {name:'good', rarity:12}, 
        {name:'gilded', rarity:25}, 
        {name:'divine', rarity:35}, 
        {name:'legendary', rarity:100}, 
        {name:'quartz', rarity:40}
    ];

    function generateNumber() {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 10
        } while (generatedNumbers.has(randomNumber));
        randomTitleObj = weightedRandomSelection(titles);
        randomTitle = randomTitleObj.name;
        generatedNumbers.add(randomNumber);
        console.log(randomTitle + " " + randomTitleObj.rarity);
        document.getElementById('titleDisplay').innerHTML = randomTitle;
        count++;
       
        clearInterval(interval);
        if (count >= 25) {
            intervalTime += 5;
            if (count >= 35) {
                intervalTime += 9;
                if (count >= 40) {
                    intervalTime += 15;
                    if (count >= 42) {
                        intervalTime += 20;
                        if (count >= 45) {
                            if (randomTitleObj.rarity > 4) {bgFade();}
                            if (!ownedTitles.includes(randomTitle)) {
                                ownedTitles.push(randomTitle);
                            }
                            console.log(ownedTitles);
                            clearInterval(interval);
                            return;
                        }
                    }
                }
            }
        } else {
            intervalTime += 1.75;
        }
        interval = setInterval(generateNumber, intervalTime);
    }
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

/*keeping this in case my code doesnt work*/
/*function displayRandomNumbers() {
    let count = 0;
    let intervalTime = 100;
    let interval = setInterval(generateNumber, intervalTime);
    const generatedNumbers = new Set();

    function generateNumber() {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * 101); // Generate a random number between 0 and 100
        } while (generatedNumbers.has(randomNumber));
        
        generatedNumbers.add(randomNumber);
        console.log(randomNumber);
        count++;
       
        clearInterval(interval);
        if (count >= 25) {
            intervalTime += 5;
            if (count >= 35) {
                intervalTime += 9;
                if (count >= 40) {
                    intervalTime += 15;
                    if (count >= 42) {
                        intervalTime += 20;
                        if (count = 45) {
                            return;
                        }
                    }
                }
            }
        } else {
            intervalTime += 1.75;
        }
        interval = setInterval(generateNumber, intervalTime);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function bgFade(){
    document.body.style.animation = "fade 4s cubic-bezier(0.06, 0.98, 0.41, 0.93) 0s 1";
    sleep(4500).then(() => {document.body.style.animation = "";});
}

document.getElementById('randomize').addEventListener('click', displayRandomNumbers);
document.getElementById('bgFade').addEventListener('click', bgFade);*/
