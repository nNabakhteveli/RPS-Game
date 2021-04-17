let execute = true;
let Gameover;  
function startGameText() {
    document.getElementById("resultEnd").style.display = "none";  
    document.getElementById('start-game').style.visibility = 'hidden';
    document.getElementById('startAudio').play();
    if (execute) {
        let text = document.createElement('p');
        text.setAttribute('id', 'startingGameText');
        text.innerHTML = 'Choose your move!';
        document.body.appendChild(text);
        execute = false;
    }
    Gameover = false; 
    reset() // setting things back to normal
    document.getElementById('buttons').style.visibility = 'visible';
    randomSign.style.visibility = 'visible'; 
}

function playAudio() {
    document.getElementById('myAudio').play();//plays audio
}
let playerPoint = 0;
let botPoint = 0;
function reset() {// resetting everything
    Gameover = false;
    playerPoint = 0; 
    botPoint = 0;  
    randomSign.innerHTML = "Bot choice"; 
    document.getElementById('player').innerHTML = `Player: ${playerPoint}`;
    document.getElementById('bot').innerHTML = `Bot: ${botPoint}`;      
} 
 
function renderPoints() {
    document.getElementById('player').innerHTML = `Player: ${playerPoint}`;
    document.getElementById('bot').innerHTML = `Bot: ${botPoint}`;  
    
if (playerPoint === 10 || botPoint === 10){ 
        if(playerPoint >= 10) {endGame("You");}// user won
        if(botPoint >= 10) {endGame("Bot");}// bot won  
        Gameover = true;        
        return 0; 
    }
}

let textOnTop = document.getElementById('textOnTop');
const textAfterMove = ['YOU WIN!', "IT'S TIE 🤝", 'OH SNAP :('];


function RPS_switch(arg) { //this function  switches a user choice to number between 1-3
    if (arg == "rock") return 1;
    if (arg == "paper") return 2;
    if (arg == "scissors") return 3;
}

let randomSign = document.getElementById('random');
function botChoice() {// bot choice is randomly generated here
    let choice = (Math.round(Math.random() * 2) + 1); 
    if (choice === 1) randomSign.innerHTML = '<i class="far fa-hand-rock"><br>Rock</i>';
    if (choice === 2) randomSign.innerHTML = '<i class="far fa-hand-paper"><br>paper</i>';
    if (choice === 3) randomSign.innerHTML = '<i class="far fa-hand-scissors"><br>scissors</i>';
    return choice;  //basically this function returns a random number between 1-3 
}

function Play(userChoice) {// main play starting point
 if (Gameover) return 0;   
    playAudio();
    let user = RPS_switch(userChoice);// change userchoice to Number between 1-3
    let bot = botChoice(); // get botsChoice in number form 1-3; 
    let result = whoWon(user, bot);// get who won as boolean or "draw"
 
    if (result) { textOnTop.innerHTML = textAfterMove[0]; playerPoint++; }// if user won
    if (!result) { textOnTop.innerHTML = textAfterMove[2]; botPoint++; }// if bot won
    if (result == 'draw') textOnTop.innerHTML = textAfterMove[1];// if draw
    renderPoints();// update points
}

function whoWon(user, bot) { // engine of the game
    let won;
    if (user - bot === 1) won = true;
    if (user - bot === -1) won = false;
    if (user - bot > 1) won = false;
    if (user - bot < -1) won = true;
    if (user === bot) won = "draw";
    return won;
}
 
function endGame(winner) {// end the game
    console.log(winner) 
   document.getElementById("resultEnd").style.display = "";    
   document.getElementById('buttons').style.visibility = 'hidden';   
   document.getElementById("result").innerText = `${winner} Won !`; 
   twitterWidget = document.getElementById("twitter") 
   if (winner === "You"){ 
    twitterWidget.setAttribute("href", `https://twitter.com/intent/tweet?text=i%20won%20${playerPoint}-${botPoint}%20against%20bot%20by%20%20%40__Nabakhtevel%20%26%20%40bethropolis%20at%0Ahttps%3A//nnabakhteveli.netlify.app/`)
   }else{
    twitterWidget.setAttribute("href", `https://twitter.com/intent/tweet?text=i%20lost%20${playerPoint}-${botPoint}%20against%20bot%20by%20%20%40__Nabakhtevel%20%26%20%40bethropolis%20at%0Ahttps%3A//nnabakhteveli.netlify.app/`)
   } 
   randomSign.style.visibility = 'hidden';  
   document.getElementById('start-game').style.visibility = ''; 
}
 