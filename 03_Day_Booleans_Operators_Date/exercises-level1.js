//1-)
let firstName = (typeof 'Arzu'); //string
let lastName = (typeof 'Demir'); //string
let country = (typeof 'Turkey'); //string
let city = (typeof 'Sanliurfa'); //string
let age = (typeof 15); //number
let isMarried = (typeof false); //boolean
let birthYear = (typeof 2008); //number  
console.log(firstName, lastName, country, city, age, isMarried, birthYear);

//2-)
let example1 = '10' == 10;
console.log(example1); //true
let example2 = parseInt(9.8) == 10;
console.log(example2); //false

//3-)
//Truthy
let str1 = 'Hello world:)';
console.log(Boolean(str1)); //true
let num1 = 15;
console.log(Boolean(num1)); //true
let obj1 = {};
console.log(Boolean(obj1)); //true
//Falsy
let str2 = '';
console.log(Boolean(str2)); //false
let num2 = 0;
console.log(Boolean(num2)); //false
let nullValue = null;
console.log(Boolean(nullValue)); //false

//4-)
console.log(4 > 3); //true
console.log( 4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != '4'); //false
console.log(4 == '4'); //true
console.log(4 === '4'); //false
console.log('python'.length !== 'jargon'.length); //false

//5-)
let example3 = 4 > 3 && 10 < 12; //true && true = true
let example4 = 4 > 3 && 10 > 12; //true && false = false
let example5 = 4 > 3 || 10 < 12; //true || true = true
let example6 = 4 > 3 || 10 > 12; //true || false = true
let example7 = !(4 > 3); //false
let example8 = !(4 < 3); //true
let example9 = !(false); //true
let example10 = !(4 > 3 && 10 < 12); //false
let example11 = !(4 > 3 && 10 > 12); //true
let example12= !(4 === '4'); //true
let example13 = !('python'.includes('on'), 'jargon'.includes('on')); //false
console.log(example3, example4, example5, example6, example7, example8, example9, example10, example11, example12, example13);

//6-)
let year = new Date();
console.log(year.getFullYear()); //2024
let month = new Date();
console.log(month.getMonth() + 1); //7
let date = new Date();
console.log(date.getDate()); //13
let day = new Date();
console.log(day.getDay()); //6
let hours = new Date();
console.log(hours.getHours()); //21
let minute = new Date();
console.log(minute.getMinutes()); //36
let all = new Date();
console.log(all); //2024-07-13T18:36:21.880Z