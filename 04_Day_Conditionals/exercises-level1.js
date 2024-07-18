/*
//1-)
let yourAge = prompt('Enter your age:');
let driveAge = 18;
yourAge = Number(yourAge);
if (yourAge >= driveAge) {
    console.log('You are old enough to drive:)');
} else {
    console.log('You have to wait until you are 18:(');
}
*/

/*
//2-)
let yourAge = prompt("Enter your age:");
let myAge = 15;
yourAge = Number(yourAge);
if (yourAge > myAge) {
  console.log("You are older than me!");
} else if (yourAge < myAge) {
  console.log("I am older than you!");
} else {
  console.log("We are the same age!");
}
*/

//3-)
let a = 4;
let b = 3;
if (a > b) {
  console.log("a is bigger than b."); //a is bigger than b.
} else if (a < b) {
  console.log("a is less than b.");
} else {
  console.log("a is equal to b.");
}
/*or*/
let a2 = 4;
let b2 = 3;
let result =
  a > b
    ? console.log("a is bigger than b.") //a is bigger than b.
    : console.log("a is less than b.");

//4-)
let number = prompt("Enter a number:");
number = Number(number);

if (number % 2 == 0) {
  console.log(`${number} is an even number.`);
} else {
  console.log(`${number} is an odd number.`);
}

//5-)
let score = prompt(`Enter a student's score:`);
score = Number(score);

let grade;
if (score >= 80 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 79) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 40 && score <= 49) {
  grade = "F";
} else {
  grade = "Invalid score";
}
alert(`The student's grade is ${grade}.`);
