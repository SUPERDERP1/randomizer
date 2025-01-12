function displayRandomNumbers() {
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
        if (count >= 35) {                  //og value: 25
            intervalTime *= 2.5;            //og value: += 5
            console.log("count >= 35");
            if (count >= 45) {
                intervalTime += 1.5;
                console.log("count >= 40");
                if (count = 55) {           //og value: 45
                    return;
                }
            }
        } else {
            intervalTime += 2.75;           //og value: 1.75
            console.log("else");
        }
        interval = setInterval(generateNumber, intervalTime);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function bgFade(){
    document.body.style.animation = "fade 2s cubic-bezier(0.06, 0.98, 0.41, 0.93) 0s 1";
    sleep(2000).then(() => {document.body.style.animation = "";});
}

document.getElementById('randomize').addEventListener('click', displayRandomNumbers);
document.getElementById('bgFade').addEventListener('click', bgFade);
