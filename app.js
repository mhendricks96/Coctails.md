console.log("Hello, World");

var Whiskey;

Whiskey = "The only real drink?";

console.log(Whiskey);

var firstQuestion;
var alertMessage;
var firstResponse;
var overDrinkingAge

firstQuestion = "what is your favorite drink?";



firstResponse = prompt (firstQuestion);
console.log(firstResponse);

if (firstResponse === "old fashion") { 
    alertMessage = "Excellent choice!"
 } else {
    alertMessage = "Gross! grow up and drink an old fashion";
}

overDrinkingAge = prompt ("how old are you?");

if (overDrinkingAge > 20) {
    console.log ("old enough to advertise")
}
    else {
    console.log ("get them outta here!");
    }