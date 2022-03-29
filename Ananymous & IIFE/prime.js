/*Day 5 - Functions*/

//Task

//1(d)Return all the prime number in array

let number = [1, 2, 3, 5, 6, 7, 8, 9, 10];

let isprime = function (element) {
    if (element === 2) {
        return 1;
    }
    else if (element > 2) {
        for (let i = 2; i < element / 2; i++) {
            if (element % i === 0) {
                return 0;
            }
        }
        return 1;
    }
    else {
        return 0;
    }
};
let result = function (element) {
    let primeArray = [];
    for (let i = 0; i < element.length; i++) {
        if (isprime(element[i])) {
            primeArray.push(element[i]);
        }
    }
    return primeArray;
};
console.log("Prime numbers using Ananyomus Function are");
console.log(result(number));


//IIFE

let isprime2 = function (element) {
    if (element === 2) {
        return 1;
    }
    else if (element > 2) {
        for (let i = 2; i < element / 2; i++) {
            if (element % i === 0) {
                return 0;
            }
        }
        return 1;
    }
    else {
        return 0;
    }
};
let result2 = function (element) {
    let primeArray = [];
    for (let i = 0; i < element.length; i++) {
        if (isprime2(element[i])) {
            primeArray.push(element[i]);
        }
    }
    return primeArray;
}(number);
console.log("Prime numbers using IIFE are");
console.log(result2);

