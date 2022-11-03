/*
We'll say that a number is "teen" if it is in the range 13..19 inclusive. 
Given 2 int values, return true if one or the other is teen, but not both.

loneTeen(13, 99) → true
loneTeen(21, 19) → true
loneTeen(13, 13) → false
loneTeen(21, 21) -> false
*/

export const loneTeen = (a: number, b: number): boolean => {
  const min: number = 13;
  const max: number = 19;

  const aTeen: boolean = a >= min && a <= max;
  const bTeen: boolean = b >= min && b <= max;

  // if ((aTeen && bTeen) || (!aTeen && !bTeen)) {
  //   return false;
  // }

  // return true;

  return (aTeen && bTeen) || (!aTeen && !bTeen) ? false : true;
  // return aTeen || bTeen;
  // return condition ? value : value;
};

const teens: number[] = [13, 14, 15, 16, 17, 18, 19];
export const loneTeen2 = (a: number, b: number): boolean => {
  const aTeen: boolean = teens.includes(a);
  const bTeen: boolean = teens.includes(b);

  return (aTeen && bTeen) || (!aTeen && !bTeen) ? false : true;
};
