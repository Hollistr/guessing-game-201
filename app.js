'use strict';

let guest = prompt("What is your name?");
alert("Hello " + guest + ", One Love!!");
// console.log(guest);
document.write("One Love!!! " + guest);

let correctAnswers = 0

let born = prompt("Was I born in the U.S.?");
if (typeof (born) === 'string'){
    born = born.toLowerCase();
    correctAnswers++;
}
if (born === "no"){
    // console.log("Correct!")
    alert("I was born in Tiel, Netherlands");
}
else if (born === "yes"){
    // console.log("Incorrect!")
    alert("I was born in Tiel, Netherlands");
}

let citizen = prompt("Am I a citizen of the U.S.?");
if (typeof (citizen) === 'string'){
    citizen = citizen.toLowerCase();
    correctAnswers++;
}
if (citizen === "yes"){
    // console.log("Correct!")
    alert("I'm a duel citizen of the U.S. and Netherlands");
}
else if (citizen === "yes"){
    // console.log("Correct!")
    alert("I'm a duel citizen of the U.S. and Netherlands");
}

let highschool = prompt("Did I go to high school in the U.S.?");
if (typeof (highschool) === 'string'){
    highschool = highschool.toLowerCase();
    correctAnswers++;
}
if (highschool === "yes"){
    // concole.log("Correct!")
    alert('I went to high school in Sedona');
}
else if (highschool === "no"){
    // console.log("Incorrect!")
    alert('Sedona is a lovely place to live, ' + guest);
}

let college = prompt("Did I get a college degree in the U.S.?");
if (typeof (college) === 'string'){
    college = college.toLowerCase();
    correctAnswers++;
}
if (college === "no"){
    // console.log("Correct!")
    alert('Had too much fun Freshman year at Arizona State.');
}
else if (college === "yes"){
    // console.log("Incorrect!")
    alert('Had too much fun Freshman year at Arizona State.');
}

let military = prompt("Did I fight for the U.S.?");
if (typeof (military) === 'string'){
    military = military.toLowerCase();
    correctAnswers++
}
if (military === "yes"){
    // console.log("Correct!")
    alert("ONE LOVE!!! " + guest);
}
else if (military === "no"){
    // console.log("Incorrect!")
    alert("ONE LOVE!!! " + guest);
}

for (let i = 1; i <= 4; i++){
    let answer = parseInt(prompt("How many states have I lived in?"));

if (answer === 7){
    console.log("Correct")
    alert("Yes!, Florida, California, Arizona, Texas, Mississippi, Oregon, and South Carolina.");
    break;
}
if (answer < 7){
    console.log("Too Low!!!")
    alert("Too Low!!!");
}
else if (answer > 7){
    console.log("Too High!!!")
    alert("Too High!!!");
}
}

for (let i = 1; i <= 6; i++){
let home = prompt("I'm I currently calling FL, CA, AZ, TX, MS, OR, or SC home?");
if (typeof (home) === 'string'){
    home = home.toLowerCase();
    correctAnswers++
}
}
let home = [
    "FL",
    "CA",
    "AZ",
    "TX",
    "MS",
    "OR",
    "SC",
]
if (home === "OR"){
    // console.log("Correct!")
    alert("I love the farm!!!!");
    return(correctAnswers);
}   
else if (home !== "OR"){
    alert("Not that one!!!");
}
alert(correctAnswers);