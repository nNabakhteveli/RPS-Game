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


let playerPoint = 0;
let botPoint = 0;

// Options for rock
rock.addEventListener('click', () => {
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
});

// Options for paper
paper.addEventListener('click', () => {
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
});


// Options for scissors
scissors.addEventListener('click', () => {
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
});