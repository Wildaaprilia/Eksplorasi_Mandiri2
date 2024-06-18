let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];

function checkGuess() {
    let userGuess = document.getElementById('guess-input').value;
    let feedback = '';
    userGuess = Number(userGuess);

    if (userGuess === randomNumber) {
        feedback = 'Selamat! Anda menebak dengan benar!';
    } else if (userGuess < randomNumber) {
        feedback = 'Terlalu rendah!';
    } else if (userGuess > randomNumber) {
        feedback = 'Terlalu tinggi!';
    }

    guesses.push(userGuess);
    document.getElementById('game-result').innerText = feedback;
    document.getElementById('previous-guesses').innerText = 'Tebakan sebelumnya: ' + guesses.join(', ');
}
