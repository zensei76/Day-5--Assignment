/*Day 5 - Functions*/

//Task

//3(e)Return all the palindromes in an arrayay


let array = ['dad', 'bad', 'kanak', 'level', 'madam','067000760','practice','guvi','156727'];

 // Ananymous function

let isPalindrome = (elemnt) => {
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
let findPalindrome = (array) => array.filter(function (elemnt) {
    return isPalindrome(elemnt);
});
console.log("Palindromes in array using Arrow Function ")
console.log(findPalindrome(array));

