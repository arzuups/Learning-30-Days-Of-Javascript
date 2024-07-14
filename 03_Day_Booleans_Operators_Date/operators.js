//OPERATORS
// =
// + , +=
// - , -=
// / , /=
// * , *=
// % , %=
// ** , **=

let num1 =30;
let num2 = 15;
let addition = num1 + num2; //45
let subtraction = num1 - num2; //5
let multiplication = num1 * num2; //450
let division = num1 / num2; //2
let modulus = num1 % num2; //0
let exponential = num1 ** num2; //1.4348907e+22
console.log(addition, subtraction, multiplication, division, modulus, exponential);

//COMPARISON OPERATORS
//== -> equal in value only
//=== -> equal in value and data type
//!=
//!==
//>
//<
//>=
//<=

console.log(4 == "4"); //true because compare only values not the data type
console.log(4 === "4"); //false because compare value and data type
console.log(4 != 4); //false because values are equal
console.log(4 !== "4"); //true because compare both value and data type
console.log( 16 > 4); //true because 16 is greater than 4
console.log(4 < 1); //false because 4 is not less than 1
console.log(8 >= 6); //true because 8 greater than 6
console.log(7 <= 4); //false because 7 is not less than 
console.log('meat'.length == 'avacado'.length); //false because lenght is not equal
console.log('milk'.length === 'juice'.length); //false
console.log('cacao'.length != 'onion'.length ); //false
console.log('tomato'.length == 'potato'.length); //true
console.log('watermelon'.length > 'coconut'.length); //true
console.log('python'.length < 'javascript'.length); //true

//LOGICAL OPERATORS
//&& -> and
//|| -> or
//! -> not
//true -> true
//false -> false

// &&
let example1 = 4 > 3 && 6 < 10; //true && true = true
let example2 = 8 < 9 && 7 > 9; //true && false = false
let example3 = 1 < 0 && 3 < 1; //false && false = false
console.log(example1, example2, example3);

// ||
let example4 = 4 > 3 || 6 < 10; //true || true = true
let example5 = 8 < 9 || 7 > 9; //true || false = true
let example6 = 1 < 0 || 3 < 1; //false || false = false
console.log(example4, example5, example6);

// !
let example7 = 4 > 3; //true
let example8 = !(4 > 3); //false
let isLightOn = true; //true
let isLightOff = !isLightOn; //false
let isMarried = !true; //false
console.log(example7, example8, isLightOn, isLightOff, isMarried);

//INCREMENT OPERATOR
//++ -> increment

let count = 0;
console.log(++count); //1
console.log(count); //1

let count2 = 0;
console.log(count2++); //0
console.log(count2); //1

//DECREMENT OPERATOR
//-- -> decrement

let count3 = 0;
console.log(--count3); //-1
console.log(count3); //-1

let count4 = 0;
console.log(count4--); //0
console.log(count4); //-1

//TERNARY OPERATOR
//condition ? true : false

let isRaining = true;
isRaining ? console.log('Take an umbrella!') //Take an umbrella!
: console.log( 'Stay home!');

isRaining = false;
isRaining ? console.log('Take an umbrella!')
: console.log( 'Stay home!'); //Stay home!

let myName = 'Arzu';
myName.includes('r');
myName.includes('r') ? console.log('My name includes letter r!') //My name includes letter r!
: console.log('My name does not inludes letter r!');

myName = 'John';
myName.includes('r') ? console.log('My name includes letter r!')
: console.log('My name does not inludes letter r!'); //My name does not includes letter r!

//OPERATOR PRECEDENCE
//1. ()
//2. **
//3. * / %
//4. + -
//5. < > <= >=
//6. == !=
//7. &&
//8. ||
//9. = += -= *= /= %=
//10. ? :
//11. ,
//12. ++ --
//13. ! ~
//14. void

let operation1 = (8 + 3 - 1) / 4 + 2 * 7;
console.log(operation1); // 16.5

//WINDOW METHODS
//alert('Hello World!') -> This method displays an alert box with a specified message and an OK button. It is a builtin method and it takes on argument.

//confirm('Are you sure?') ->The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button. A confirm box is often used to ask permission from a user to execute something. Window confirm() takes a string as an argument. Clicking the OK yields true value, whereas clicking the Cancel button yields false value.

//prompt('What is your name?') -> This method display a prompt box with an input on your browser to take input values and the input data can be stored in a variable. The prompt() method takes two arguments. The second argument is optional.


