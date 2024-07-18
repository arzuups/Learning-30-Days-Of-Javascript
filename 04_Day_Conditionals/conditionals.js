//Conditionals Types
//If
//If Else
//If Else If Else
//Switch Case
//Ternary Operator

//IF
let num1 = 3;
if (num1 > 0) {
  console.log(`${num1} is a positive number`); //num1 is a positive number
}

let isRaining = true;
if (isRaining) {
  console.log("Take an umbrella!"); //Take an umbrella!
}

//IF ELSE
let num2 = 5;
if (num2 < 0) {
  console.log(`${num2} is a negative number.`);
} else {
  console.log(`${num2} is a positive number.`); //num2 is a positive number
}

let taxAmount = 1200;
if (taxAmount > 1000) {
  console.log(`${taxAmount} is higher than 1000!`); //1200 is higher than 1000!
} else {
  console.log(`${taxAmount} is less than 1000!`);
}

//IF ELSE IF ELSE
let num3 = 5;
if (num3 > 0) {
  console.log(`${num3} is a positive number.`); //num3 is a positive number
} else if (num3 < 0) {
  console.log(`${num3} is a negative number.`);
} else if (num3 == 0) {
  console.log(`${num3} is equal to 0`);
} else {
  console.log(`${num3} is not a number`);
}

let weather = "cloudy";
if (weather == "rainy") {
  console.log("You need an umbrella!");
} else if (weather == "cloudy") {
  console.log("Weather might be cold. You need a jacket!"); //Weather might be cold. You need a jacket!
} else if (weather == "sunny") {
  console.log("You need sunglasses!");
} else {
  console.log("You dont need anything!");
}

//SWITCH CASE
let month = "March";
switch (month) {
  case "January":
    console.log("This is a winter month!!");
    break;
  case "August":
    console.log("This is a summer month!!");
    break;
  case "June":
    console.log("This is a summer month!!");
    break;
  default:
    console.log("This is not a summer or winter month!!"); //This is not a summer or winter month!!
}

let weekDays = "";
switch (weekDays) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("This is not a week day!!"); //This is not a week day!!
}

//TERNARY OPERATOR
let isWeatherCloudy = true;
isWeatherCloudy
  ? console.log("It is cloudy!") //It is cloudy!
  : console.log("It is rainy!");

let isSheAStudent = false;
isSheAStudent
  ? console.log("Yes, she is a student!")
  : console.log("No, she is a doctor!"); //No, she is a doctor
