/*Day 5 - Functions*/

//Task

//1(h)rotate an array by k times

let arr = [1, 3, 5, 7, 9];
let k = 2;

 // Ananymous function
let rotate = function (arr) {
    let b = []
    for (let i = 0; i < arr.length; i++) {
        b.push(arr[(i + k) % arr.length]);

    }
    return b;
};
console.log("K times rotated arrat using  Ananymous function"+"\n"+rotate(arr));

//IIFE

let rotate2 = function (arr) {
    let b = []
    for (let i = 0; i < arr.length; i++) {
        b.push(arr[(i + k) % arr.length]);

    }
    return b;
}(arr);
console.log("K times rotate2d arrat using  IIFE"+"\n"+rotate2);