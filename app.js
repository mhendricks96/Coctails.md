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
    alertMessage = "Excellent Choice!"
 } else if (favoriteDrink === "manhattan") {
    alertMessage = "that is a lovely choice"
 }
 else {
    alertMessage = "Gross! Grow up and drink an old fashion";
}

alert(alertMessage);


secondResponse = prompt ("Do you enjoy drinking");

if (secondResponse === "yes") {
    alertMessage = "Welcome in!"
 }   
    else {
    alertMessage = "Get out of here!";
    }

thirdResponse = prompt ("do you like martini's?");

if (secondResponse === "yes") {
    color = "yellow";
}
    else {
    color = "black";
    }
document.getElementById("martini-output").style.background= color;

    