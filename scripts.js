function displayRandomNumbers() {
    let count = 0;
    const generatedNumbers = new Set();
    let intervalTime = 100;
    let interval = setInterval(generateNumber, intervalTime);

    function generateNumber() {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
        } while (generatedNumbers.has(randomNumber));
        
        generatedNumbers.add(randomNumber);
        console.log(randomNumber);
        count++;
       
        if (count === 25) {
            clearInterval(interval);
        } else {
            clearInterval(interval);
            intervalTime += 3.25;
            interval = setInterval(generateNumber, intervalTime);
        }
    }
}

document.getElementById('randomize').addEventListener('click', displayRandomNumbers);