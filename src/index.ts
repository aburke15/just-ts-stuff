// import functions here
// import { appendArrayToString } from './append-2-string';

import { improvedReverse, reverse } from './array';
/*
  Main driver of the program
*/
function main(): void {
  // call functions here
  console.log(improvedReverse([1, 2, 3])); //→ [3, 2, 1]
  console.log(improvedReverse([5, 11, 9])); // → [9, 11, 5]
  console.log(improvedReverse([7, 0, 0])); //→ [0, 0, 7]

  console.log(improvedReverse([1, 2, 3, 4, 5]));
  console.log(improvedReverse([2, 4, 5, 6, 8, 10])); // 10, 8, 6, 5, 4, 2

  console.log(reverse('hello'));
}

main();
