const numbers = [1, 23, 43, 53, 12];

// let sum = 0;
// for (let num of numbers) {
//   sum = sum + num;
// }

// google about reduce method, and use reduce method to get sum

// const result = numbers.reduce((prev, curr) => {
//   return prev + curr;
// },0);

const students = [
  { name: "Alice", score: 85, favFruit: "apple" },
  { name: "Bob", score: 92, favFruit: "apple" },
  { name: "Charlie", score: 48, favFruit: "orange" },
  { name: "David", score: 74, favFruit: "pineapple" },
  { name: "Eve", score: 68, favFruit: "orange" },
  { name: "Eve", score: 68, favFruit: "grpaes" },
];

const finalResult = students.reduce((prev, curr) => {
  const { favFruit } = curr;
  if (prev[favFruit] === undefined) {
    prev[favFruit] = 1;
  } else {
    prev[favFruit]++;
  }
  return prev;
}, {});

console.log(finalResult);

const result = {};
// console.log(result.apple); // udnefined

for (let { favFruit } of students) {
  if (result[favFruit] === undefined) {
    result[favFruit] = 1;
  } else {
    result[favFruit]++;
  }
}

console.log(result);

// if property, add property, initializ value to 1
// if property exist incremtn by 1

// needed output
// {
// 	apple: 2,
// 	orange: 2,
// 	pineapple: 1,
//  grapes: 1
// }
