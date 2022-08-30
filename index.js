
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDice1 = "dice" + randomNumber1 + ".png";
var randomDice1img = "images/" + randomDice1 ;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomDice1img);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDice2img = "images/" + "dice" + randomNumber2 + ".png" ;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomDice2img);


if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins"
}else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins"
}else{
  document.querySelector("h1").innerHTML = "DRAW!"
}
