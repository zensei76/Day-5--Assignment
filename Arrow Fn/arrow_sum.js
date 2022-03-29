/*Day 5 - Functions*/

//Task

//3(c)Sum of all numbers in an array

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let sum = 0;

let res1 = (arr) => {
    arr.forEach(x => {
        sum += x;
    });
    return (sum);
};
console.log("Sum of the Array using Ananymous function elemnts is");
console.log(res1(number));



