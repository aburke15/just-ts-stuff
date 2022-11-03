// import functions here
// import { appendArrayToString } from './append-2-string';
import { reverse3 } from './array';
/*
  Main driver of the program
*/
function main(): void {
  // call functions here
  console.log(reverse3([1, 2, 3])); //→ [3, 2, 1]
  console.log(reverse3([5, 11, 9])); // → [9, 11, 5]
  console.log(reverse3([7, 0, 0])); //→ [0, 0, 7]
}
main();
