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
       
        clearInterval(interval);
        if (count >= 25) {
            intervalTime += 5;
            if (count = 45) {
                return;
            }
        } else {
            intervalTime += 1.75;
        }
        interval = setInterval(generateNumber, intervalTime);
    }
}
function bgFade(){
    document.body.style.backgroundColor = '#fff';
    document.getElementById('container').style.color = '#000';
    interval = setInterval(() => {console.log('test'); clearInterval(interval);},200);
    document.body.style.backgroundColor = 'rgb(28,28,28)'; 
    document.getElementById('container').style.color = 'rgb(215,215,215)';
}
document.getElementById('randomize').addEventListener('click', displayRandomNumbers);
document.getElementById('bgFade').addEventListener('click', bgFade);
