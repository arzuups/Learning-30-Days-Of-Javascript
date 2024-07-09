let firstname = 'Arzu';
let lastName = 'Demir';
let country = 'Turkey';
let city = 'Sanliurfa';
let job = 'Student';
console.log(firstname, lastName, country, city, job)

//String Concatenation
let myName = 'Arzu';
let myLastName = 'Demir';
let myCountry = 'Turkey';
let myCity = 'Sanliurfa';
let myJob = 'Student';
console.log("Concatenation = " , 
    myName + ' ' + myLastName + ' ' + myCountry + ' ' + myCity + ' ' + myJob) //Concatenation =  Arzu Demir Turkey Sanliurfa Student

//Long Literal Strings
let paragraph = 'Hello. My name is Arzu.\
I am fifteen years old.\
I am a high school student.\
I love technology.\
My hobbies are listening to music, writing code, and watching series.';
console.log(paragraph);

//Escape Sequences in Strings
// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
//Output: 
/*I hope everyone is enjoying the 30 Days Of JavaScript challenge.
Do you ?
Days    Topics  Exercises
Day 1   3       5
Day 2   3       5
Day 3   3       5
Day 4   3       5
This is a backslash  symbol (\)
In every programming language it starts with "Hello, World!"
In every programming language it starts with 'Hello, World!'
The saying 'Seeing is Believing' isn't correct in 2020*/

//Template String
let a = 13;
let b = 5;
console.log(`The sum of ${a} and ${b} is ${a+b}.`) //The sum of 13 and 5 is 18.

let num1 = 3;
let num2 = 5;
console.log(`${num1} is bigger than ${num2}: ${num1 > num2}`) //3 is bigger than 5: false

//String Methods

//length: returns the length of the string
let lesson = 'English';
let lesson2 = 'Math';
console.log(lesson2.length) //4

//Accessing Characters in a String
let school = 'MACAL';
console.log(school[0]) //M
console.log(school[2]) //C
console.log(school[4]) //L

let lastIndex = school.length - 1;
console.log(school[lastIndex]) //L

//toUpperCase()
let word = "JavaScript";
console.log(word.toUpperCase()) //JAVASCRIPT

//toLowerCase()
let word2 = "JavaScript";
console.log(word2.toLowerCase()) //javascript

//substr()
let word3 = "JavaScript";
console.log(word3.substr(0, 5)) //JavaS
let word4 = 'Python';
console.log(word4.substr(3, 3)) //hon

//substring()
let word5 = 'Golang';
console.log(word5.substring(0, 3)) //Gol

//split()
let words = 'book and pencil';
console.log(words.split(' ')) //['book', 'and', 'pencil'] = changes to an array

//trim()
let words2 = '   book and pencil   ';
console.log(words2.trim()) //book and pencil = removes the spaces

//includes()
let words3 = 'book and pencil';
console.log(words3.includes('book')) //true
console.log(words3.includes('notebook')) //false

//replaces() //replaceAll()
let words4 = 'book and pencil';
console.log(words4.replace('book', 'notebook')) //notebook and pencil

//charAt()
let words5 = 'book and pencil';
console.log(words5.charAt(0)) //b

//charCodeAt()
let words6 = 'book and pencil';
console.log(words6.charCodeAt(0)) //98 = ASCII code for b

//indexOf()
let words7 = 'book and pencil';
console.log(words7.indexOf('book')) //0 = first index of book

//lastIndexOf()
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string.lastIndexOf('love'))       // 67
console.log(string.lastIndexOf('you'))        // 63
console.log(string.lastIndexOf('JavaScript')) // 38

//concat()
let words8 = 'book and pencil';
console.log(words8.concat(' and pen')) //book and pencil and pen

//startsWith
let words9 = 'book and pencil';
console.log(words9.startsWith('book')) //true
console.log(words9.startsWith('Pen')) //false

//endsWidth
let words10 = 'book and pencil';
console.log(words10.endsWith('pencil')) //true
console.log(words10.endsWith('pen')) //false

//search
let words11 = 'book and pencil';
console.log(words11.search('book')) //0 = first index of book
console.log(words11.search('pencil')) //9

//match
// ** g = global i = case sensitive
let words12 = 'book and  pencil book and pencil book and pencil';
console.log(words12.match('book'))
/*output: [
  'book',
  index: 0,
  input: 'book and  pencil book and pencil book and pencil',
  groups: undefined
]*/

//repeat()
let words13 = 'book and pencil';
console.log(words13.repeat(3)) //book and pencilbook and pencilbook and pencil
