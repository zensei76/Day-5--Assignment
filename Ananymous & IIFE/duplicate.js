/*Day 5 - Functions*/

//Task

//1(g)Remove duplicates from an array

 // Ananymous function

var arr = [1,2,2,2,5,6,5,1,10];
  
let removeDuplicates = function (arr) {
    return arr.filter((element, index) => arr.indexOf(element) === index);
};
  
console.log("Unique string using ananymous function is"+''+ removeDuplicates(arr));


//IIFE

let removeDuplicates2 = function (arr) {
    return arr.filter((element, index) => arr.indexOf(element) === index);
}(arr);


console.log("Unique string using ananymous function is"+'' + removeDuplicates2)