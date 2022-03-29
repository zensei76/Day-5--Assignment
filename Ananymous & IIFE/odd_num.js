/*Day 5 - Functions*/

//Task

//1.(a)Print odd numbers in an array using Ananymous Function and IIFE

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 // Ananymous function

let odd = function (num)
{               
  let res= num.filter(x => x % 2 != 0);
  return (res)
};
console.log("Odd numbers using Ananymous Function are ");
console.log(odd(number));

//IIFE

let odd_numbers = (function (num)
{
  let res2 = num.filter(x => x % 2 != 0);
  return (res2)
  })(number);
  console.log("\nOdd numbers using IIFE function are\n");
console.log(odd_numbers);
