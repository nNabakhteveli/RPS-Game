let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');


// To call function and show up text only once
let execute = true;
function startGameText(){
    if (execute){
        let text = document.createElement('p');
        text.setAttribute('id', 'startGameText');
        text.innerHTML = 'Choose your move!';
        document.body.appendChild(text);
        execute = false;
    }
    document.getElementById('buttons').style.visibility = 'visible';
}


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


let playerPoint = 0;
let botPoint = 0;

function renderPoints(){
    document.getElementById('player').innerHTML = `Player: ${playerPoint}`;
    document.getElementById('bot').innerHTML = `Bot: ${botPoint}`;
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


let textOnTop = document.getElementById('textOnTop');

// Options for rock
rock.addEventListener('click', () => {
    switch(changingValue()){
        case 0:
            textOnTop.innerHTML = 'TIE 🤝';
            break;
        case 1:
            textOnTop.innerHTML = 'OH SNAP :(';
            botPoint++;
            playerPoint = playerPoint;
            break;
        case 2:
            textOnTop.innerHTML = 'YOU WIN!';
            playerPoint++;
            botPoint = botPoint;
            break;
    }
    randomSign.style.visibility = 'visible';
    minPointValues();
    renderPoints();
});

// Options for paper
paper.addEventListener('click', () => {
    switch(changingValue()){
        case 0:
            textOnTop.innerHTML = 'YOU WIN!';
            playerPoint++;
            botPoint = botPoint;
            break;
        case 1:
            textOnTop.innerHTML = 'TIE 🤝';
            break;
        case 2:
            textOnTop.innerHTML = 'OH SNAP :(';
            botPoint++;
            playerPoint = playerPoint;
            break;
    }
    randomSign.style.visibility = 'visible';
    minPointValues();
    renderPoints();
});

// Options for scissors
scissors.addEventListener('click', () => {
    switch(changingValue()){
        case 0:
            textOnTop.innerHTML = 'OH SNAP :(';
            botPoint++;
            playerPoint = playerPoint;
            break;
        case 1:
            textOnTop.innerHTML = 'YOU WIN!';
            playerPoint++;
            botPoint = botPoint;
            break;
        case 2:
            textOnTop.innerHTML = 'TIE 🤝';
            break;
    }
    randomSign.style.visibility = 'visible';
    minPointValues();
    renderPoints();
});