/*Day 5 - Functions*/

//Task

// 1(b)Convert all the strings to title caps in a string array


let text = "welcome to zenclass by gUVI";


//Ananymous function
let title = function (str)
{
  return str.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
console.log("Caps titles of string using Ananymous function");
console.log(title(text));


//IIFE 
let string = (function (str) {
  return str.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
})(text);
console.log("Caps titles of string using IIFE function");
console.log(string);