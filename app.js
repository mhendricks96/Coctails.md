console.log("Hello, World");

var Whiskey;

Whiskey = "The only real drink?";

console.log(Whiskey);

var alertMessage;
var secondResponse;
var color;



var firstQuestion;
firstQuestion = "What drink do you prefer? old fashion, martini, or gimlet?";

var favoriteDrink = prompt (firstQuestion);
console.log(favoriteDrink);

function setColorBasedOnUserInput(drink) {

    if (drink === "gimlet") { 
        color = "yellow";
    } else if (drink === "martini") {
        color = "pink"
    }
     else {
        color = "black";
    }

}
document.getElementById("color-output").style.background= color;

setColorBasedOnUserInput(favoriteDrink);



function getUserPrompt() {

secondResponse = prompt ("Do you enjoy drinking");

if (secondResponse === "yes") {
    alertMessage = "Welcome in!"
 }   
    else {
    alertMessage = "Get out of here!";
    }

alert(alertMessage);

}
getUserPrompt();



var ageVerification = "how old are you";
var visitorAge = prompt (ageVerification);


while (visitorAge < 21) {
    visitorAge = prompt("sorry, you are too young");
} 

document.write("Old enough")




