// Given an array of ints length 3, return a new array with the elements
// in reverse order, so {1, 2, 3} becomes {3, 2, 1}.

// reverse3([1, 2, 3]) → [3, 2, 1]
// reverse3([5, 11, 9]) → [9, 11, 5]
// reverse3([7, 0, 0]) → [0, 0, 7]

export const reverse3 = (array: number[]): number[] => {
  let firstNum: number = array[0]; // 3
  let lastNum: number = array[array.length - 1]; // 7
  array[0] = lastNum;
  array[array.length - 1] = firstNum;
  return array;
};

export class Stack<T> {
  private stack: T[];
  private size: number;

  constructor() {
    this.stack = [];
    this.size = 0;
  }

  push(item: T): void {
    this.stack[this.size++] = item;
  }

  pop(): T {
    if (this.isEmpty()) throw new Error('Cannot pop from an empty stack.');

    this.size = this.size - 1;
    return this.stack[this.size];
  }

  peek(): T {
    if (this.isEmpty()) throw new Error('Cannot pop from an empty stack.');

    return this.stack[this.size - 1];
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}

// recursive approach
export const reverse = (str: string): string => {
  if (str === '') return '';

  let end: number = str.length - 1;
  let char: string = str.charAt(end);
  return char + reverse(str.substring(0, end));
};

// [5, 2, 3, 4, 1], [2, 4, 6, 8, 10, 12, 14, 16]
//    i^     ^j
// 1 array.len / 2 (middle)
// 2 something that captures just one index in the array
// 3 replace the original 1 with the 5, array[i] = array[j], create a varaible to capture the end of the array
// 4 array[j] = temp;
export const improvedReverse = (nums: number[]): number[] => {
  // auxillary data structure approach
  const stack: Stack<number> = new Stack();

  nums.forEach((element) => {
    stack.push(element);
  });

  for (let index = 0; index < nums.length; index++) {
    nums[index] = stack.pop();
  }

  // iterative approach
  // let n: number = array.length / 2;
  // let j: number = array.length - 1;

  // for (let i: number = 0; i < n; i++, j--) {
  //   let temp: number = array[i];
  //   array[i] = array[j];
  //   array[j] = temp;
  // }

  return nums;
};
