const studentMarks = [80, 20, 40, 30, 90];

const marks40 = studentMarks.find((mark) => mark === 40);

const marksHigherThan80 = []; // studentMarks[0] , studentMarks[4]

for (let mark of studentMarks) {
  if (mark >= 80) {
    marksHigherThan80.push(mark);
  }
}

const result = studentMarks.filter((mark) => {
  return mark >= 80;
});

console.log(result);

const students = [
  { name: "Alice", score: 85, favFruit: "apple" },
  { name: "Bob", score: 92, favFruit: "apple" },
  { name: "Charlie", score: 48, favFruit: "orange" },
  { name: "David", score: 74, favFruit: "pineapple" },
  { name: "Eve", score: 68, favFruit: "orange" },
];

const isGoodStudents = students.every((student) => {
  return student.score >= 80;
});

console.log(isGoodStudents);

// 2(good) 3(bad), 5(students.length)
// good == students.length (school is good)
let goodStudents = 0;
for (let student of students) {
  if (student.score >= 80) {
    goodStudents++;
  }
}

if (goodStudents === students.length) {
  console.log("good");
} else {
  console.log("bad");
}
// const result = goodStudents === students.length ? 'good' : 'bad'

// students[0].score = student[0].score + 10;

const studentsWithMarksHigherThan80 = students.filter((student) => {
  return student.score >= 80;
});

students.forEach((student) => {
  students.score = student.score + 10;
});

const charlie = students.find((student) => student.name === "Charlie");
// charlie.name = "bas";
// console.log(students);

// normal loop , find if every students marks is greater than 80

