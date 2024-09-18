// Array
const arr = [1, 2, 3, 4];

const person = { name: "basanta" };
const person2 = person;

person2.name = "basanta kc";
console.log(person);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let num of arr) {
//   console.log(num);
// }

const studentMarks = [80, 20, 40, 30];
// const result = [];
// result[0] = studentMarks[0] + 5;

// for (let i = 0; i < studentMarks.length; i++) {
//   result[i] = studentMarks[i] + 5;
// }

const increaseNumBy5 = (num, index) => {
  console.log(index);
  return num + 5;
};

const resultUsingMap = studentMarks.map(increaseNumBy5);

// const resultUsingMap = studentMarks.map((num) => num + 5);

// test(80) => resulUsingMap[0] = 85
// test(20)
// test(40)
// test(30)

console.log(resultUsingMap);

const laptop = { name: "Laptop", price: 300 };
laptop.discount = (10 / 100) * laptop.price;
console.log(laptop);

const addDiscountAmount = (product) => {
  product.discount = (10 / 100) * product.price;
  return product;
};

const products = [
  { name: "Laptop", price: 300 },
  { name: "Phone", price: 200 },
  { name: "Tablet", price: 150 },
  { name: "Monitor", price: 400 },
];

const productWithDiscount = products.map((product) => {
  const newProduct = {
    name: product.name,
    price: product.price,
    discount: (10 / 100) * product.price,
  };
  //   product.discount = (10 / 100) * product.price;
  return newProduct;
});

console.log(products)

const students = [
  { name: "Alice", score: 85, favFruit: "apple" },
  { name: "Bob", score: 92, favFruit: "apple" },
  { name: "Charlie", score: 48, favFruit: "orange" },
  { name: "David", score: 74, favFruit: "pineapple" },
  { name: "Eve", score: 68, favFruit: "orange" },
];

// increase each students marks by 5%
const updatedStudentMarks = []; // user .map here

const goodStudents = []
