'use strict';

// Marc's function work

function askNameWithResponse(q,a) {
  let response = prompt(q);
  if (response.toLowerCase() === a.toLowerCase()) {
    return 'Nailed it!';
  } else {
    return 'Oops.';
  }
}

let isCorrect = askNameWithResponse('What is my name?', 'Buck');
alert(isCorrect);


let guest = prompt("What is your name?");
alert("Hello " + guest + ", One Love!!");
// console.log(guest);
document.write("One Love!!! " + guest);


let born = prompt("Was I born in the U.S.?");
if (typeof (born) === 'string'){
    born = born.toLowerCase();
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
}
if (citizen === "yes"){
    // console.log("Correct!")
    alert("I'm a duel citizen of the U.S. and Netherlands");
}
else if (citizen === "no"){
    // console.log("Incorrect!")
    alert("I'm a duel citizen of the U.S. and Netherlands");
}

let highschool = prompt("Did I go to high school in the U.S.?");
if (typeof (highschool) === 'string'){
    highschool = highschool.toLowerCase();
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
}
if (military === "yes"){
    // console.log("Correct!")
    alert("ONE LOVE!!! " + guest);
}
else if (military === "no"){
    // console.log("Incorrect!")
    alert("ONE LOVE!!! " + guest);
}

// let states = prompt("How many states have I lived in?");

// let states = "7"
// if (answer === "7"){
//     // console.log("Correct")
//     alert("Yes!, Florida, California, Arizona, Texas, Mississippi, Oregon, and South Carolina.");
//     }
// if (states > 7){
//     // console.log("Too Low!!!")
//     alert("Too Low!!!")l;
// }
// else (states < 7){
//     // console.log("Too High!!!")
//     alert("Too High!!!");
//     break;
// }

// let home = prompt("What state am I currently calling home?");
// if (typeof (home) === 'string'){
//     home = home.toLowerCase();
// }
// let home = [
//     "Florida",
//     "California"
//     "Arizona"
//     "Texas"
//     "Mississippi"
//     "Oregon"
//     "South Carolina"
// ];
// if (home === "Oregon"){
//     // console.log("Correct!")
//     alert("I love the farm!!!!");
// }

