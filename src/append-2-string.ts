/*
Append an array of strings to a string
call the function appendArrayToString
function returns a string
function takes two parameters - a string and an array of strings

console.log(appendArrayToString('Hello', ['World', 'Earth', 'Mars'])); // -> 'HelloWorldEarthMars'
console.log(appendArrayToString('WhatUp', ['Hi', 'Hey', 'Hello'])); // -> 'WhatUpHiHeyHello'
console.log(appendArrayToString('Goodbye', ['Word', 'Eeeh', 'Blah'])); // -> 'GoodbyeWordEeehBlah'
console.log(appendArrayToString('Good', ['M', 'o', 'r', 'n', 'i', 'n', 'g'])); // -> 'GoodMorning'
*/
export const appendArrayToString = (word: string, words: string[]): string => {
  for (let i = 0; i < words.length; i++) {
    // result = word + words[i]; // result 'HelloMars' = word 'Hello' + words[i] 2 'Mars'
    word += words[i]; // 'HelloWorldEarthMars' = 'HelloWorldEarth' + 'Mars' 2
  }
  return word;
};
