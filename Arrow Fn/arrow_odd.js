/*Day 5 - Functions*/

//Task

//3.(a)Print odd numbers in an array using Ananymous Function and IIFE

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



let odd = (num) => {
    let res = num.filter(x => x % 2 != 0);
    return (res);
};
console.log("Odd numbers are ");
console.log(odd(number));


