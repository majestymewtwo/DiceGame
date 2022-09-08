var randomNumber1, randomNumber2;
randomNumber1 = Math.floor(Math.random()*6) + 1; //1 to 6
randomNumber2 = Math.floor(Math.random()*6) + 1; //1 to 6

var randomDice1 = "dice" + randomNumber1 + ".png"; //dice1.png to dice6.png
var randomDice2 = "dice" + randomNumber2 + ".png"; //dice1.png to dice6.png

var randomImageSource1 = "images/" + randomDice1;
var randomImageSource2 = "images/" + randomDice2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "It's a draw!"
}


switch(randomNumber1){
    case 1:
        document.querySelector("img").setAttribute()
}