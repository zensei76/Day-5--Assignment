/*Day 5 - Functions*/

//Task

// 3(b)Convert all the strings to title caps in a string array


let text = "welcome to zenclass by gUVI";



let title = (str) => str.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
console.log("Caps titles of string ");
console.log(title(text));


