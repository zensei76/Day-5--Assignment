/*Day 5 - Functions*/

//Task

//1(e)Return all the palindromes in an arrayay


let array = ['dad', 'bad', 'kanak', 'level', 'madam','067000760','practice','guvi','156727'];

 // Ananymous function

let isPalindrome = function (elemnt) {
    let str = String(elemnt);
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] === str[j]) {
            i++;
            j--;
        }
        else {
            return false;
        }
    }
    return true;
}
let findPalindrome = function (array) {
    return array.filter(function (elemnt) {
        return isPalindrome(elemnt);
    });
};
console.log("Palindromes in array using Ananymous Function ")
console.log(findPalindrome(array));

//IIFE

let isPalindrome2 = function (elemnt) {
    let str = String(elemnt);
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] === str[j]) {
            i++;
            j--;
        }
        else {
            return false;
        }
    }
    return true;
}
let findPalindrome2 = function (array) {
    return array.filter(function (elemnt) {
        return isPalindrome2(elemnt);
    });
}(array);
console.log("Palindromes in array using IIFE ")
console.log(findPalindrome2);