const fred = document.getElementById("diceImage");
const george = document.getElementById("scoreRecord");
let score = 0;
let lost = "no"

function rollTheDice() {
let x = randomRoll();
if ((score >20) || (lost == "yes")) {
    score = 0;
    lost = "no";
};
if (x == 1) {
    fred.src = "images/dice1.png";
    george.innerHTML = `You lose!`;
    lost = "yes";
} else if (x == 2) {
    fred.src = "images/dice2.png";
    score = score + 2;
    if (score<21) {
        george.innerHTML = `Score = ${score}`;
    } else {
        george.innerHTML = `Score = ${score} You Win!`;
    }
} else if (x == 3) {
    fred.src = "images/dice3.png";
    score = score + 3;
    if (score<21) {
        george.innerHTML = `Score = ${score}`;
    } else {
        george.innerHTML = `Score = ${score} You Win!`;
    }
} else if (x == 4) {
    fred.src = "images/dice4.png";
    score = score + 4;
    if (score<21) {
        george.innerHTML = `Score = ${score}`;
    } else {
        george.innerHTML = `Score = ${score} You Win!`;
    }
} else if (x == 5) {
    fred.src = "images/dice5.png";
    score = score + 5;
    if (score<21) {
        george.innerHTML = `Score = ${score}`;
    } else {
        george.innerHTML = `Score = ${score} You Win!`;
    }
} else if (x == 6) {
    fred.src = "images/dice6.png";
    score = score + 6;
    if (score<21) {
        george.innerHTML = `Score = ${score}`;
    } else {
        george.innerHTML = `Score = ${score} You Win!`;
    }
};

};

function randomRoll() {
    return (Math.floor(Math.random() * (6)) + 1);
};