//Q1
function product(num1, num2) {
    return num1 * num2;
}

console.log(product(2,3));
console.log(product(4,7));
console.log(product(8,16));


//Q2
function welcome(name) {
    return `Hello, ${name}!`;
}

console.log(welcome("Mariyem"));
console.log(welcome("Anna"));
console.log(welcome("Ahmed"));


//Q3
let total=0
const sum = (nums) => {
    for (let val of nums) {
        total += val;
    }
    return total;
}

let arr1 = [23, 3, 1, 6];
let arr2 = [9, 6, 14, 80];
console.log(sum(arr1));
console.log(sum(arr2));


//Q4
function calculateBMI(weight, height) {
    return `Your Body Mass Index is ${weight/(height**2)}`;
}

console.log(calculateBMI(62,1.83));
console.log(calculateBMI(53,1.58));


//Q5
const strLength = (string) => {
    return string.length;
}

console.log(strLength("mariyem"));
console.log(strLength("javascript"));


//Q6
function revString(string) {
    let newString = ""; 
    for (let i=string.length - 1; i>=0; i--) {
        newString = newString + string.charAt(i);
    }
    return newString;
}

console.log(revString("red"));
console.log(revString("control"));


//Q7
function hello(obj) {
    return `Hello, ${obj["first"]} ${obj["last"]}!`;
}

const name1 = {
    first: "mariyem",
    last: "ahmed"
};

const name2 = {
    first: "hammd",
    last: "ahmed"
};
console.log(hello(name1));
console.log(hello(name2));


//Q8
function capitalize(string) {
    return (string.charAt(0)).toUpperCase() + string.slice(1);
}

console.log(capitalize("mariyem"));
console.log(capitalize("javascript"));


//Q9
let array = [];
const arrCapt = (array) => {
    let newArr = array.map((el) => {
        return (el.charAt(0)).toUpperCase() + el.slice(1);
    });
    return newArr;
}

arr1 = ["red", "blue", "green"];
arr2 = ["mariyem", "ahmed"];
console.log(arrCapt(arr1));
console.log(arrCapt(arr2));


//Q10
function isPalindrome(string) {
    let newString = ""; 
    for (let i=string.length - 1; i>=0; i--) {
        newString = newString + string.charAt(i);
    }
    if (newString === string) {
        return true;
    }
    else 
        return false;
}

console.log(isPalindrome("not"));
console.log(isPalindrome("madam"));