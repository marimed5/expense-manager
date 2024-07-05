/*
============================Day 2 (3 July)============================
----------------------------------------------------------------------
*/


//Practice q l5
function numVowels(string) {
    let count=0;
    for (let char of string) {
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            count++;
        }
    }
    return count;
}

//Practice q l5
const countVowels = (string) => {
    let count=0;
    for (let char of string) {
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            count++;
        }
    }
    return count;
}


//Practice q l5
let nums = [8, 9, 4, 3, 21, 60];
nums.forEach(function square(value) {
    console.log(value**2);
});

//or arrow function
nums.forEach((value) => {
    console.log(value**2);
})


//Practice q l5
let marks = [65, 78, 93, 52, 97];
let highMarks = marks.filter((score) => {
    return score > 90;
})


//Practice q l5
let n = prompt("Enter a number: ");
let array = [];
for (let i=1; i <= n; i++) {
    array[i-1] = i;
}
console.log(array);

let sum=0;
let total = array.reduce((sum, curr) => {
    return sum += curr;
})
console.log(`Sum is ${total}`);

let product = array.reduce((prod, curr) => {
    return prod *= curr;
})
console.log(`Product is ${product}`);