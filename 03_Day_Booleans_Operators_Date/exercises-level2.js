/*
//1-)
let base = prompt('Enter base:');
base = parseFloat(base);
let height = prompt('Enter height:');
height = parseFloat(height);
let area = 0.5 * base * height;
alert("The area of the triangle is " + area);
*/

/*
//2-)
let sideA = prompt('Enter sideA value:');
sideA = parseFloat(sideA);
let sideB = prompt('Enter sideB value:');
sideB = parseFloat(sideB);
let sideC = prompt('Enter sideC value:');
sideC = parseFloat(sideC);
let perimeter = sideA + sideB + sideC;
alert("The perimeter of the triangle is " + perimeter);
*/

/*
//3-)
let length = prompt('Enter length:');
length = parseFloat(length);
let width = prompt('Enter width:');
width = parseFloat(width);
let rectangle = length * width;
let perimeter = 2 * (length + width);
alert("The area of the rectangle is " + rectangle + " and the perimeter is " + perimeter);
*/

/*
//4-)
let radius = prompt('Enter radius:');
radius = parseFloat(radius);
const PI = 3.14;
let area = PI * radius * radius;
let circumference = 2 * PI * radius;
alert('The are of the circle is ' + area + ' and the circumference of the circle is ' + circumference);
*/

//5-)
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let slope = (y2 - y1) / (x2 - x1);
console.log("The slope between the points (" + x1 + ", " + y1 + ") and (" + x2 + ", " + y2 + ") is: " + slope);

//6-)
let hours = prompt('Enter hours:');
hours = parseFloat(hours);
let perHour = prompt('Enter rate per hour:');
perHour = parseFloat(perHour);
let weeklyEarn = hours * perHour;
alert('You weekly earning ' + weeklyEarn);

//7-)
let myName = 'Arzu Demir';
if (myName.length > 7) {
    alert('Your name is longer than 7 charaters.');
} else {
    alert('Your name is shorter than 7 characters.');
}

//8-)
let myAge = 250;
let yourAge = 25;
let ageGap = myAge - yourAge;
alert('I am 225 years older than you ' + ageGap);

//9-)
let currentYear = new Date().getFullYear;
let birthYear = prompt('Enter your birth year:');
let age = currentYear - birthYear;
if (age >= 18) {
    alert('You are allowed to drive.');
} else {
    let yearsToWait = 18 - age;
    alert('You need to wait ' + yearsToWait + 'more year(s) to be allowed to drive.');
}

