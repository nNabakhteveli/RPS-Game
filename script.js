let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');


let randomNum;
let randomSign = document.getElementById('random');
const changingValue = () => {
    let randomNum = Math.floor(Math.random() * 3);    

    switch(randomNum){
        case 0:
            randomSign.innerHTML = '<i class="far fa-hand-rock"><br>Rock</i>';
            return 0;
            break;

        case 1:
            randomSign.innerHTML = '<i class="far fa-hand-paper"><br>Paper</i>';
            return 1;
            break;

        case 2: 
            randomSign.innerHTML = '<i class="far fa-hand-scissors"><br>Scissors</i>';
            return 2;
            break;
    }
}  

changingValue();

let playerPoint = 0;
let botPoint = 0;

function renderPoints(){
    document.getElementById('player').innerHTML = `Player: ${playerPoint}`;
    document.getElementById('bot').innerHTML = `Bot: ${botPoint}`;
    playerPoint = Math.min(0);
    botPoint = Math.min(0);
}

// Defining minimum values for player and bot's points
function minPointValues(){
    let minimum = 0;
    if(playerPoint < minimum){
        playerPoint = minimum;
    }

    if(botPoint < minimum){
        botPoint = minimum;
    }
}


// Options for rock
rock.addEventListener('click', () => {
    renderPoints();
    randomSign.style.visibility = 'visible';
    switch(changingValue()){
        case 0:
            console.log('TIE');
            break;
        case 1:
            console.log('OH SNAP, YOU LOOSE :(');
            playerPoint--;
            botPoint++;
            break;
        case 2:
            console.log('YOU WIN!');
            playerPoint++;
            botPoint--;
            break;
    }
    minPointValues();
});

// Options for paper
paper.addEventListener('click', () => {
    renderPoints();
    randomSign.style.visibility = 'visible';
    switch(changingValue()){
        case 0:
            console.log('YOU WIN!');
            playerPoint++;
            botPoint--;
            break;
        case 1:
            console.log('TIE');
            break;
        case 2:
            console.log('YOU LOOSE :(');
            playerPoint--;
            botPoint++;
            break;
    }
    minPointValues();
});


// Options for scissors
scissors.addEventListener('click', () => {
    renderPoints();
    randomSign.style.visibility = 'visible';
    switch(changingValue()){
        case 0:
            console.log('YOU LOOSE :(');
            playerPoint--;
            botPoint++;
            break;
        case 1:
            console.log('YOU WIN!');
            playerPoint++;
            botPoint--;
            break;
        case 2:
            console.log('TIE');
            break;
    }
    minPointValues();
});