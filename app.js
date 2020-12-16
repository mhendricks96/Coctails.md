console.log("Hello, World");

var Whiskey;

Whiskey = "The only real drink?";

console.log(Whiskey);

var firstQuestion;
var alertMessage;
var firstResponse;
var secondResponse;

firstQuestion = "what is your favorite drink?";



firstResponse = prompt (firstQuestion);

if (firstResponse === "old fashion") { 
    alertMessage = "Excellent Choice!"
 } else if (firstResponse === "manhattan") {
    alertMessage = "that is a lovely choice"
 }
 else {
    alertMessage = "Gross! Grow up and drink an old fashion";
}

alert(alertMessage);

console.log(element);

secondResponse = prompt ("Do you enjoy drinking");

if (secondResponse === "yes") {
    alertMessage = "Welcome in!"
 }   
    else {
    alertMessage = "Get out of here!";
    }

    var element = document.getElementById("response-output");

    element.innerText = alertMessage;

thirdResponse = prompt ("do you like martini's?");

if (secondResponse === "yes") {
    alertMessage = "Here's the nasty drink you like";
}
    else {
    alertMessage = "Thank you for being honest. These are gross";
    }

    var element = document.getElementById("martini-output");

    element.innerText = alertMessage;