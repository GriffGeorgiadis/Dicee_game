//generate random number between 1 - 6 and assing to variables
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//img is set to match the random number that is generated
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

//display who wins and display a draw if no one wins  
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 Wins";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player2 Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}