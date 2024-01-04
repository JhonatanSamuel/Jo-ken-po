const result = document.querySelector('.result');
const myScore = document.querySelector('#my-score');
const machineScore = document.querySelector('#score-machine');

let humanScoreNumber = 0;
let machineNumber = 0;

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['pedra', 'papel', 'tesoura']
    const numberRandon = Math.floor(Math.random() * 3)

    return choices[numberRandon]
}

const playTheGame = (player, machine) => {

    console.log('Humano: ' + player + 'Alexa: ' + machine)

    if (player === machine) {
        result.innerHTML = `EMPATE! Alexa também escolheu ${machine}`
    } else if (
        (player === 'pedra - ' && machine === 'tesoura') ||
        (player === 'tesoura' && machine === 'papel') ||
        (player === 'papel' && machine === 'pedra')
    ) {
        humanScoreNumber++
        myScore.innerHTML = humanScoreNumber;
        result.innerHTML = `Você Ganhou! Alexa escolheu ${machine}`;

    } else {
        machineNumber++
        machineScore.innerHTML = machineNumber;
        result.innerHTML = `Você Perdeu! Alexa escolheu ${machine}`;
    }



}