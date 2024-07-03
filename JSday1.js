/*
============================Day 1 (2 July)============================
----------------------------------------------------------------------
*/


//Practice q1 lecture1
const product = {
    name: "Ball pen",
    reviews: 7002,
    rating: 4,
    isDeal: true,
}
console.log(product);


//Practice q2 l1
const profile = {
    username: "@shradhakhapra",
    posts: 195,
    followers: 569000,
    following: false,
    desc: "apna college"
}
console.log(typeof profile);
console.log(typeof profile["following"]);


//Practice q2 l2
let input = prompt("Enter your score: ");
if (input >= 80 && input <= 100) {
    console.log("Your grade is an A\n");
}   else if (input >= 70 && input <= 79) {
        console.log("Your grade is a B\n");
}   else if (input >= 60 && input <= 69) {
        console.log("Your grade is a C\n");
}   else if (input >= 50 && input <= 59) {
        console.log("Your grade is a D\n");
}   else if (input >= 0 && input <= 49) {
        console.log("Your grade is an F\n");
}
else {
    console.log("Invalid input");
}


//Practice q1 l3
for (let i = 0; i <= 100; i++) {
    if (i%2 === 0) {
        console.log(i);
    }
}


//Practice q2 l3
let num = 67;
let guess = prompt("Enter your guess: ");
while (guess != num) {
    console.log("Your guess was wrong, try again: ");
    guess = prompt("Enter your guess: ");
}
console.log("You won!");


//Practice q1 l3
let name = prompt("Enter your full name without any spaces: ");
let username = "@" + name.toLowerCase() + name.length;
console.log(username)


//Practice q1 l4
let sum = 0;
let marks = [85, 97, 44, 37, 76, 60];
for (let i of marks) {
    sum += i;
}
console.log(`The class average is ${sum/marks.length}`);


//Practice q2 l4
let origPrices = [250, 645, 300, 900, 50];
for (let i=0; i<origPrices.length; i++) {
    origPrices[i] *= 0.9;
}
console.log(origPrices);


//Practice q l4
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(`Removed ${companies.shift()}`);
console.log(`Replaced ${companies.splice(1, 1, "Ola")}`);
companies.push("Amazon");
console.log(companies);
