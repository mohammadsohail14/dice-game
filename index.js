var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;

var randomNumberimage = "dice" + randomNumber1 + ".png" ;
 
var randomimagesource = "images/" + randomNumberimage ;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomimagesource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

var randomNumberimage2 = "dice" + randomNumber2 + ".png" ;
 
var randomimagesource2 = "images/" + randomNumberimage2 ;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomimagesource2);

if(randomNumber1 > randomNumber2){
    document.querySelectorAll("h1")[0].innerHTML = "player 1 wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelectorAll("h1")[0].innerHTML = "player 2 wins";
}else {
    document.querySelectorAll("h1")[0].innerHTML = "draw";
};