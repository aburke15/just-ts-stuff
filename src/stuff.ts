// import fs from 'fs';

// javascript
// - number: 1, 2, 3 or 1.22, etc
// - string: 'This is a string' single or double quotes
// - boolean: true OR false
// - null:
// - undefined:
// - object: { name: 'Andre', age: 29 }
// typescript
// - any: (should avoid using this) telling the compilier that this could be anything
// - unknown: telling the typescript compiler we don't know what the type will be
// - never: telling the compiler that a function will never return I.E. Infinite loop
// - enum: good for representing things like the days of the week
//         a list of values that rarely change example below
// enum DaysOfWeek {
//   'Monday' = 1,
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday',
// }
// // - tuple: can contain multiple values of diff data types example below
// const someTuple: [string, number] = ['Hi', 23];
// const someOtherTuple: [string, boolean, number] = ['Andre', false, 29];

// // functions: function key word, function name,
// // parameters, return type, and function body
// function someFunc(name: string, age: number): number {
//   console.log(name + age);
//   return 0;
// }

// const concatName: Function = (name: string): string => {
//   return 'Hello, ' + name;
// };

// // calling functions, store return value in new variable
// const functionReturnValue: string = concatName('Andre');
// // print value to console
// // console.log(functionReturnValue);

// // create a variable // called myName // with the type of string // and assign yourself a name //
// // end with semicolon
// // var myName: string = 'Miguel';
// const myOtherName: string = 'Andre'; // const = immutable - does not change

// // create a function
// // called addTwo
// // that takes 2 parameters that are both numbers
// // func has a return type of number
// // in func body, return those two parameters added together
// function addTwo(fish: number, dog: number): number {
//   return fish + dog;
// }

// // call the function
// // pass two numbers as arguments
// // store the result in a variable
// // call the variable fishDogAddition
// // print the result of fishDogAddition to the console
// const fishDogAddition: number = addTwo(2, 8);

//console.log('fishDogAddition result: ' + fishDogAddition);

// const addSomeStuff: Function = (num: number) => {
//   // boolean
// };

// psuedo code
// Goal is to print/log only one message

/*
  if age is greater than or equal to 21 print 'You can drive and go to a bar'
  else if age is greater than or equal 16 print 'You can drive!'
  else - the age is less than 16, print 'cannot drive'

  OR => ||
  AND => &&
  NOT => ! inverse of a boolean expression !true == false and !false == true

  XOR => exclusive or - one or the other not both
  NAND ! and then &&
  NOR  ! and then OR

  */

/*
    T XOR T => F
    T XOR F => T
    F XOR T => T
    F XOR F => F

     T && T => I am not in // I am in
     T && F => I am not in // I am not in
     F && F => I am not in // I am not in
     F && T => I am not in // I am not in

     T || T => I am in
     F || T => I am in
     T || F => I am in
     F || F => I am not in
  */

/*
    Truth table
        OR
     -----|-----
      1   |  1    => 1
      0   |  1    => 1
      1   |  0    => 1
      O   |  0    => 0
  */

// def key word
// name
// type
// assign OR initialize value to the variable
// const isOfRetirementAge: boolean = true;

// camel case

// create a function
// call the function isOfRetirementAge
// that accpepts param called age of type number
// returns whether or not the person is retiring age (aka boolean) boolean = true OR false

// if keyword
// open & closing parentheses
// inside paraentheses (conditional expression age >= 65)
// add open & closing curly braces
// inside of curly braces is the logic

// const isOfRetirementAge = (age: number): boolean => {
//   return age >= 65;
// };

// const result: boolean = isOfRetirementAge(77);
//console.log('Are you of retirement age?', result);

// create 5 functions

// declaration key word
// name of the function
// assignment =
// parentheses (inside parens we have parameters)
// type that our function returns
// arrow =>
// open & closing curly braces { }
// inside curly braces is our func body
// {
//   ...func body
//}
// return keyword in func body
// {
//   ...func body
//   return 'blah'; (in the case of a func that returns a string)
//}

// TODO: create a function, called messenger, has 1 param called messageType which is a string, has the void return type (meaning it doesn't return anything)
/*
for the other 4 functions
each of these "messaging functions" returns a string
each function has 1 param of type string with their respective platform messages

send email function - return the string 'Messenger function is sending an email: ' + email
send sms function - return the string 'Messenger function is sending an sms: ' + sms
send twitter dm function - return the string 'Messenger function is sending a twitter dm: ' + twitterDm
send IG dm function - return the string 'Messenger function is sending an Instagram dm: ' + instagramDm


back in the messenger function add another param to the function of type string called message
use an if statement to decided which message should be sent based off of the message type
ie: if (messageType === 'sms') { 
  // fill out your code here 
}
pass the message to each of your send functions

if the message type doesn't exist return a default message 'messageType: ' + messageType + ' does not exist';
*/

// const messageType: string = messageTypeInput.toLowerCase();
// if (messageType === 'sms') {
//   return sendSMS(message);
// } else if (messageType === 'email') {
//   return sendEmail(message);
// } else if (messageType === 'twitter') {
//   return sendTwitterDm(message);
// } else if (messageType === 'ig') {
//   return sendIgDm(message);
// }

// switch (messageType) {
//   case 'sms':
//     return sendSMS(message);
//   case 'email':
//     return sendEmail(message);
//   case 'twitter':
//     return sendTwitterDm(message);
//   case 'ig':
//   default:
//     return 'messsageType: ' + messageType + ' does not exist';
// }

// for loops consist of 3 parts: create a control variable, condition, increment/decrement

// if messageType equals messageTypes at index i

// create a variable, assign the function call to THAT variable, print the variable to the console/terminal, save file, build program, run program

// const messageTypes: string[] = [
//   'sms',
//   'email',
//   'twitter',
//   'facebook',
//   'whatsapp',
//   'snapchat',
//   'instagram',
//   'slack',
//   'telegram',
//   'discord',
//   'skype',
//   'line',
//   'viber',
//   'vk',
//   'wechat',
//   'youtube',
//   'truthsocial',
//   'reddit',
//   'pinterest',
//   'linkedin',
//   'aol',
//   'tumblr',
// ];

// const sendMessage = (message: string, messageType: string): string => {
//   return 'Messenger function is sending via ' + messageType + ': ' + message;
// };

//console.log(messenger('114999854', 'Howdy pardner?'));
//

/* 
using a for loop reverse all of the elements in the array
and print the array to the console.

1. create a for loop
  a. create a control (i) and assign it the array length - 1
  b. create a comparison that loops through array while i is greater than or equal to 0
  c. decrement the control by 1
2. create a third control variable


N. have the console log that for loop
*/

// const numbers: number[] = [3, 23, 34, 55, 51];
// const nums: number[] = swap(numbers);

// console.log(nums);
// console.log(numbers);

// numbers[0] = 100;

// console.log(nums);
// console.log(numbers);

const swapNums = (x: number, y: number): [number, number] => {
  let temp = x;
  x = y;
  y = temp;

  return [x, y];
};

let x = 3;
let y = 4;

let a: number = 0;
let b: number = 0;

[a, b] = swapNums(x, y);

// console.log(`x: ${x}, y: ${y}`);

// console.log(`a: ${a}, b: ${b}`);
// console.log('a: ' + a + ', b: ' + b);

a = 100;

const swap = (nums: number[]): number[] => {
  let j = nums.length - 1;

  for (let i = 0; i < nums.length / 2; i++, j--) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  return nums;
};

let swaps: number[] = [3, 4];
let swapped: number[] = swap(swaps);

swaps[0] = 69;
swapped[0] = 100;

/*
  The parameter weekday is true if it is a weekday, 
  and the parameter vacation is true if we are on vacation. 
  We sleep in if it is not a weekday or we're on vacation. 
  Return true if we sleep in. 
*/
const sleepIn = (weekday: boolean, vacation: boolean): boolean => {
  return !weekday || vacation;
};

// console.log(sleepIn(true, false)); // false
// console.log(sleepIn(false, true)); // true
// console.log(sleepIn(false, false)); // true
// console.log(sleepIn(true, true)); // true

/*
We have two monkeys, a and b, 
and the parameters aSmile and bSmile indicate if each is smiling. 
We are in trouble if they are both smiling or if neither of them is smiling. 
Return true if we are in trouble.
|| 
&& 
!
*/
const monkeyTrouble = (aSmile: boolean, bSmile: boolean): boolean => {
  if (aSmile && bSmile) {
    return true;
  }
  if (!aSmile && !bSmile) {
    return true;
  }
  return false;
};

// console.log(monkeyTrouble(true, false)); // false
// console.log(monkeyTrouble(false, true)); // false
// console.log(monkeyTrouble(false, false)); // true
// console.log(monkeyTrouble(true, true)); // true

/*
We'll say that a number is "teen" if it is in the range 13..19 inclusive. 
Given 3 int values, return true if 1 or more of them are teen.

hasTeen(13, 20, 10) → true
hasTeen(20, 19, 10) → true
hasTeen(20, 10, 13) → true
hasTeen(20, 21, 22) → false

func w 3 params called hasTeen all params are numbers and func returns a boolean
*/

const someVar: string = 'hello world';

const age: number = 23;

// variable key word
// variable name
// type annotation
// assignment
// assigned val

const teens: number[] = [13, 14, 15, 16, 17, 18, 19];
const hasTeen = (one: number, two: number, three: number): boolean => {
  const min = 13;
  const max = 19;

  return (one >= min && one <= max) || teens.indexOf(two) > -1 || teens.indexOf(three) > -1;
};

// console.log(hasTeen(13, 20, 10)); // → true
// console.log(hasTeen(20, 19, 10)); // → true
// console.log(hasTeen(20, 10, 13)); // → true
// console.log(hasTeen(20, 21, 22)); // → false

/*

Given two number values, return their sum. 
Unless the two values are the same, then return double their sum.

sumDouble(1, 2) → 3
sumDouble(3, 2) → 5
sumDouble(2, 2) → 8

need a func
func needs 2 params both numbers a & b
func returns a number

return the sum of a + b * 2
*/
const sumDouble = (a: number, b: number): number => {
  return a === b ? (a + b) * 2 : a + b;
};

// console.log(sumDouble(1, 2)); // → 3
// console.log(sumDouble(3, 2)); // → 5
// console.log(sumDouble(2, 2)); // → 8

/*
Given an int n, return true if it is within 10 of 100 or 200. 
Note: Math.abs(num) computes the absolute value of a number.

nearHundred(93) → true
nearHundred(90) → true
nearHundred(89) → false

need a func called nearHundred
with a single param called num that is a number
func returns a boolean
*/
const nearHundred = (num: number): boolean => {
  // const absNum = Math.abs(num);
  // if (absNum >= 90 && absNum <= 110) {
  //   return true;
  // }
  // if (absNum >= 190 && absNum <= 210) {
  //   return true;
  // }

  // return false;

  return Math.abs(100 - num) <= 10 || Math.abs(200 - num) <= 10;
};

console.log(nearHundred(93)); // → true
console.log(nearHundred(90)); // → true
console.log(nearHundred(89)); // → false
