let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');


let randomNum;
let randomSign = document.getElementById('random');
const changingValue = () => {
    let randomNum = Math.floor(Math.random() * 3);    

    switch(randomNum){
        case 0:
            randomSign.innerHTML = "rock";
            return 0;
            break;
    
        case 1:
            randomSign.innerHTML = 'paper';
            return 1;
            break;

        case 2: 
            randomSign.innerHTML = 'scissors';
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
            console.log('YOU LOOSE :(');
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