/*
 write a function called printEven()
 that prints even numbers from 1 to 10
  check to see if i is even

 if modulo == 0 print the number

for - for (let i = 0; i < length; i++)
forEach - for (var i : someList) Java
while - while (i < 20) { 
  do something here
  i++; 
}
 do while - do { do something here } while (i < 20)

 now i want this function to print all even numbers from 1 to n 
*/

export const printEven = (n: number): void => {
  let i: number = 2;
  while (i <= n) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  }
};
