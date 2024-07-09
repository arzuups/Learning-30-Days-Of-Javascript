let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let word = 'love';
let parts = sentence.split(word);
let count = parts.length - 1;
console.log(` The '${word}' occurs ${count} in the sentence`); // The 'love' occurs 2 in the sentence

let string2 = 'You cannot end a sentence with because because because is a conjunction.';
let word2 = 'because';
let parts2 = string2.split(word2);
let count2 = parts2.length - 1;
console.log(`The '${word2}' occurs ${count2} in the sentence`) //The 'because' occurs 3 in the sentence

const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentence3.replace('%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching', 'I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher.This 30 Days Of Javascript is also the result of love of teaching. '))
/*output:
I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher.This 30 Days Of Javascript is also the result of love of teaching.
*/

let salary = 5000;
let annualBonus = 10000;
let onlineCourseSalary = 15000;
let annualIncome = salary + annualBonus + onlineCourseSalary
console.log(annualIncome); // 30000 euro
