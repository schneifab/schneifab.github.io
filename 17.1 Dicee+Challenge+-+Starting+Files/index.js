function randomNumber1(){
    var randomNumber = Math.floor(Math.random() * 6 + 1);
    return randomNumber;
}

var titel = document.querySelector("h1").innerHTML;
var number1 = 6;
var number2 = 6;

if(titel === "Refresh Me"){
    var number1 = randomNumber1();
    var number2 = randomNumber1();
    if(number1 > number2){
        document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins!";
    }else if(number1 < number2){
        document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681";
    }else{
        document.querySelector("h1").innerHTML = "Draw!";
    }
    document.querySelectorAll(".dice img")[0].setAttribute("src", "./images/dice"+number1+".png");
    document.querySelectorAll(".dice img")[1].setAttribute("src", "./images/dice"+number2+".png");
}
document.querySelectorAll(".dice img")[0].setAttribute("src", "./images/dice"+number1+".png");
document.querySelectorAll(".dice img")[1].setAttribute("src", "./images/dice"+number2+".png");