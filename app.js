console.log("Hello, World");

var Whiskey;

Whiskey = "The only real drink?";

console.log(Whiskey);

var firstQuestion;
var alertMessage;
var favoriteDrink;
var secondResponse;
var color;

firstQuestion = "what is your favorite drink?";



favoriteDrink = prompt (firstQuestion);

if (favoriteDrink === "old fashion") { 
    color = "browm";
 } else if (favoriteDrink === "manhattan") {
    color = "grey"
 }
 else {
    color = "black";
}

document.getElementById("drink-output").style.background= color;


secondResponse = prompt ("Do you enjoy drinking");

if (secondResponse === "yes") {
    alertMessage = "Welcome in!"
 }   
    else {
    alertMessage = "Get out of here!";
    }

alert(alertMessage);

    var ageVerification = "how old are you";
var visitorAge = prompt (ageVerification);

if (visitorAge >= 21) {
    color = "yellow";
} else if (visitorAge < 2) {
    color = "pink"
}
    else {
    color = "black";
    }

document.getElementById("age-output").style.background= color;

    