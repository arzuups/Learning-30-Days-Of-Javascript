//1-)
let string1 = 'There is no exercise better for the heart than reaching down and lifting people up. by John Holmes teaches us to help one another.';
console.log(string1)

//2-)
let string2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(string2)

//3-)
let num = '10';
let numInt = parseInt(num);
console.log(numInt) //10

//4-)
let num2 = '9.8';
let numFloat = Math.round(parseFloat(num2));
console.log(numFloat) //10

//5-)
let string3 = "python jargon";
console.log(string3.includes('on')) //true

//6-)
let string4 = 'I hope this course is not full of jargon.';
console.log(string4.includes('jargon')) //true

//7-)
let num3 = Math.floor(Math.random() * 101);
console.log(num3) //random number between 0 and 100

//8-)
let min = 50;
let max = 100;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber) //random number between 50- 100

//9-)
let num4 = Math.floor(Math.random() * 256);
console.log(num4) //random number between 0 and 255

//10-)
let str = 'JavaScript';
let randomIndex = Math.floor(Math.random() * str.length);
let randomChar = str[randomIndex];
console.log(randomChar) //random character from string

//11-)
console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')
/*output:
1       1       1       1       1
2       1       2       4       8
3       1       3       9       27
4       1       4       16      64
5       1       5       25      125
*/

//12-)
let string5 = 'You cannot end a sentence with because because because is a conjunction';
console.log(string5.substr(31, 55))

//13-)
let sentence = 'You cannot end a sentence with because because because is a conjunction';
let start = sentence.indexOf('because because because');
let length = 'because because because'.length;
let slicedPhrase = sentence.substr(start, length);
console.log(slicedPhrase); // Output: "because because because"
