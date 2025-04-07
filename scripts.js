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
        {name:'common', rarity:1, color:'white'}, 
        {name:'uncommon', rarity:2, color:'green'}, 
        {name:'rare', rarity:5, color:'blue'}, 
        {name:'mythic', rarity:15, color:'purple'}, 
        {name:'lucky', rarity:25, color:'pink'}, 
        {name:'good', rarity:12, color:'light blue'}, 
        {name:'gilded', rarity:25, color:'lime'}, 
        {name:'divine', rarity:35, color:'red'}, 
        {name:'legendary', rarity:100, color:'yellow'}, 
        {name:'quartz', rarity:40, color:'silver'}
    ];

    function generateNumber() {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 100 (this is left here to iterate things, the number isnt used)
        } while (generatedNumbers.has(randomNumber));
        
        generatedNumbers.add(randomNumber);

        randomTitleObj = weightedRandomSelection(titles); /*generates a title based on rarities*/
        randomTitle = randomTitleObj.name;
        randomColor = randomTitleObj.color;

        console.log(randomTitle + " " + randomTitleObj.rarity); //debugging
        document.getElementById('titleDisplay').innerHTML = randomTitle; //displaying the selected title on screen
        document.getElementById('titleDisplay').style.color = randomColor;
        document.getElementById('titleDisplay').style.animation = 'titleBounce 4s ease-in infinite, pop 0.1s ease infinite;';
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
                                console.log(randomTitle + " " + randomTitleObj.rarity);
                            }
                            document.getElementById('titleDisplay').style.animation = 'titleBounce 4s ease-in infinite;';
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
