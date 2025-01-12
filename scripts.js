function displayRandomNumbers() {
    let count = 0;
    let speed = 100;
    const generatedNumbers = new Set();
    const interval = setInterval(() => {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
        } while (generatedNumbers.has(randomNumber));
        
        generatedNumbers.add(randomNumber);
        console.log(randomNumber);
        count++;
        speed -+ 1.5;
        if (count === 25) {
            clearInterval(interval);
        }
    }, speed);
}

document.getElementById('randomize').addEventListener('click', displayRandomNumbers);