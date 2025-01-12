function displayRandomNumbers() {
    let count = 0;
    const interval = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
        console.log(randomNumber);
        count++;
        if (count === 25) {
            clearInterval(interval);
        }
    }, 5);
}

displayRandomNumbers();