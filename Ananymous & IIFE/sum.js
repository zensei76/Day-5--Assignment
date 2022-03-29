/*Day 5 - Functions*/

//Task

//1(c)Sum of all numbers in an array

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 // Ananymous function
let sum = 0;

let res1 = function (arr) {
    arr.forEach(x => {
        sum += x;
    });
    return (sum);
};
console.log("Sum of the Array using Ananymous function elemnts is");
console.log(res1(number));

//IIFE

 sum = 0;

let res2 = (function (arr) {
    arr.forEach(x => {
        sum += x;
    });
    return (sum);
})(number);
console.log("Sum of the Array elemnts using IIFE is");
console.log(res2);
    




