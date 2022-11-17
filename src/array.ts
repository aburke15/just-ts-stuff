// Given an array of ints length 3, return a new array with the elements
// in reverse order, so {1, 2, 3} becomes {3, 2, 1}.

// reverse3([1, 2, 3]) → [3, 2, 1]
// reverse3([5, 11, 9]) → [9, 11, 5]
// reverse3([7, 0, 0]) → [0, 0, 7]

/*
* looping through the array - includes incrementing 
* for loop {
    what goes here?

    reassign the value of the array - more detail
    TODO: expand this to work for an array of size n
  }
*/
export const reverse3 = (array: number[]): number[] => {
  let firstNum: number = array[0]; // 3
  let lastNum: number = array[array.length - 1]; // 7
  array[0] = lastNum;
  array[array.length - 1] = firstNum;
  return array;
};
export const improvedReverse3 = (array: number[]): number[] => {
  let n: number = array.length
  for(i = 0; i < n; i++)
     
 }
