const person = {
  name: "anish",
  age: 10,
  school: "nbhd",
  father: {
    name: "abc",
  },
};

const anotherPerson = {
  // name: "anish",
  // age: 10,
  // school: "nbhd",
  // father: {
  //   name: "abc",
  // },
  ...person,
  father: {
    ...person.father,
  },
};

console.log(anotherPerson.father === person.father);

// const name = person.name;
// const personName= person.name;
const { name: personName, father, ...remaining } = person;
father.name = "xyz";

console.log(remaining);

const numbers = [1, 2, 3, 4, 4, 5];
const firstNum = numbers[0];
const secondNum = numbers[1];

const [first, second, , ...remaingNums] = numbers;
console.log(remaingNums);

function greet({ name }) {
  //   let { name } = person;
  console.log(`hello, ${name}`);
}

greet(person);

function getNums(...nums) {
  console.log(nums);
}

getNums(1, 2, 3, 4);
