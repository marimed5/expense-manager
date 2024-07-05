const students = [ { name: "Alice", grade: 90 }, { name: "Bob", grade: 80 }, 
{ name: "Charlie", grade: 95 }, { name: "Dave", grade: 85 } ];

//Q1
const newStudents = [ { name: "Eve", grade: 88 }, { name: "Frank", grade: 92 } ];
let newArr = students.concat(newStudents);
console.log(newArr);


//Q2
let entry = students.entries();
for (let el of entry) {
    console.log(el);
}


//Q3
let pass = students.every((student) => {
    return student.grade >= 70;
})
if (pass) {
    console.log("All students have a passing grade");
} else {
    console.log("All students do not have a passing grade");
}


//Q4
const newGrades = new Array(students.length).fill(100);
students.forEach((student, index) => {
   student.grade = newGrades[index];
})
console.log(students);


//Q5
let highMarks = students.filter((student) => {
    return student.grade > 90;
})
console.log(highMarks);


//Q6
let char = students.find((student) => {
    return student.name === "Charlie";
})
console.log(`Charlie's grade is ${char.grade}`);


//Q7
let index = students.findIndex((student) => {
    return student.grade === 85;
})
console.log(`A grade of 85 was found at index ${index}`);


//Q8
const nestedArray = [[1, 2], [3, 4, 5], [6]];
let flatArr = nestedArray.flat();
console.log(flatArr);


//Q9
const passStudents = students.flatMap((student) => {
    return {
        name: student.name,
        grade: student.grade,
        passing: student.grade >= 70
    }
})
console.log(passStudents);


//Q10
students.forEach((student) => {
    console.log(student.name);
})


//Q11
const string = "hello world";
const newArr = Array.from(string);
console.log(newArr);


//Q12
const studentsNames = students.map((student) => {
    return student.name;
})
let including = studentsNames.includes("Eve");
console.log(including);


//Q13
let bobIndex = studentsNames.indexOf("Bob");
console.log(`Bob was found at index ${bobIndex}`);


//Q14
const studentsGrades = students.map((student) => {
    return student.grade;
})
console.log(studentsGrades);


//Q15
const newStudent = { name: "Grace", grade: 87 };
students.push(newStudent);


//Q16
students.pop();


//Q17
const revArray = students.reverse();
console.log(revArray);


//Q18
students.shift();
console.log(students);


//Q19
let sum=0;
let total = studentsGrades.reduce((sum, currentVal) => {
    return sum += currentVal;
})
let avg = total/(studentsGrades.length);
console.log(avg);