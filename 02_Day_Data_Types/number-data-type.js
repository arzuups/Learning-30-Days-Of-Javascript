let age = 15;
const gravity = 9.81;
let mass = 72;
const PI = 3.14;
const boilingPoint = 100;
const bodyTemp = 37;
console.log(age, gravity, mass, PI, boilingPoint, bodyTemp);

//Using Math Object()
Math.PI;
console.log(Math.PI); //3.141592653589793

console.log(Math.round(PI)); //3 =rounded to the nearest number

console.log(Math.floor(PI)); //3 = rounding down
console.log(Math.ceil(PI)); //4 = rounding up

console.log(Math.min(4, 8, 9, 29, -4)); //-4 = finds the lowest value in them
console.log(Math.max(4, 8, 9, 29, -4)); //29 = finds the greatest value

const randNum = Math.random(); //creates random number between 0 to 0.999999
console.log(randNum);

const num = Math.floor(Math.random() * 11);
console.log(num); //creates random number between 0 to 10

console.log(Math.abs(-40)); //40 = absolute value

console.log(Math.sqrt(100)); //10 = square root

console.log(Math.pow(5, 3)); //125 = power/üs alma

//Example Random Code
let randomNum = Math.random();
let randomNum2 = randomNum * 11;
console.log(randomNum2); //9.854321141282698
let randomNumRoundToFloor = Math.floor(randomNum2);
console.log(randomNumRoundToFloor); //9
