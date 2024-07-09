let challenge = "30 Days of Javascript";
console.log(challenge); //30 Days of Javascript

let string1 = "Welcome to Javascript!!";
console.log(string1); //Welcome to Javascript!!

let string2 = "Hello! What's up?";
console.log(string2.length); //17

let string3 = "Hello:)";
console.log(string3.toUpperCase()); //HELLO:)

let string4 = "HELLO:)";
console.log(string4.toLowerCase()); //hello:)

let string5 = "Learning 30 Days of Javascript";
console.log(string5.substr(12)); //Days of Javascript

let string6 = "Hello,, my name is Arzu!";
console.log(string6.split(" ")); //[ 'Hello,,', 'my', 'name', 'is', 'Arzu!' ]

let string7 = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(string7.split(", "));
/*[
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
  ]
*/

let string8 = "30 Days of Javascript";
console.log(string8.replace("Javascript", "Python")) //30 Days of Python

let string9 = "30 Days of Javascript";
console.log(string9.charAt(15)) //s

let string10 = "30 Days of Javascript";
console.log(string10.charCodeAt('J')) //51 //ASCII code

let string11 = "30 Days of Javascript";
console.log(string11.indexOf("of")) //8

let string12 = "30 Days of Javascript";
console.log(string12.lastIndexOf("of")) //8

let string13 = 'You cannot end a sentence with because because because is a conjunction';
console.log(string13.indexOf("because")) ///31

let string14 = 'You cannot end a sentence with because because because is a conjunction';
console.log(string14.lastIndexOf("because")) //47

let string15 = 'You cannot end a sentence with because because because is a conjunction';
console.log(string15.search("because")) //31

let string16 = '  30 Days of Javascript  ';
console.log(string16.trim()) //30 Days of Javascript

let string17 = "30 Days of Javascript";
console.log(string17.startsWith('30 Days')) //true

let string18 = "30 Days of Javascript";
console.log(string18.endsWith('Javascript')) //true

let string19 = "30 Days of Javascript";
console.log(string19.match(/a/gi)) //[ 'a', 'a', 'a' ]

let string20 = "30 Days of ";
console.log(string20.concat('Javascript')) //30 Days of Javascript

let string21 = "30 Days of Javascript";
console.log(string21.repeat(2)) //30 Days of Javascript30 Days of Javascript
