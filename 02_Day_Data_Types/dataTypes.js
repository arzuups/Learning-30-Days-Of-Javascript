// Primitive and Non-Primitive Data Types

// PRIMITIVE DATA TYPES
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null

// Example Codes
let a = 10;
let b = 10;
console.log(a == b); //true = because values are same

let c = 15;
let d = 20;
console.log(c == d); //false = because values are not same

let js = 'Javascript';
let ts = 'Typescript';
console.log(js == ts); //false = because values are not same
  
let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff); //false = because values are not same

// NON-PRIMITIVE DATA TYPES
// 1. Object
// 2. Array
// 3. Function

// Example Codes
let numbers = [1, 2, 3];
numbers[1] = 5;
console.log(numbers); // [1, 5, 3]

let nums1 = [3, 2, 1];
let nums2 = [3, 2, 1];
console.log(nums1 == nums2); //false = because references are not same :/

let person1 = {
    name: 'John',
    age: 30,
    country: 'Finland',
}
let person2 = {
    name: 'John',
    age: 30,
    country: 'Finland',
}
console.log(person1 == person2); //false = because references are not same

let arr1 = ["Arzu Demir",  true, 15];
let arr2 = ["Arzu Demir",  true, 15];
console.log(arr1 == arr2); //false = because references are not same

let user1 ={
    name: 'Arzu',
    age: 15,
    country: 'Turkey',
}
let user2 = user1;
console.log(user1 == user2); //true = because references are same
