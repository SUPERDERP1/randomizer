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
        if (count >= 25) {     
            intervalTime += 9;
            console.log("count >= 35");
            if (count = 45) {
                console.log("finished");
                return;
            }
        } else {
            intervalTime += 1.75;
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
