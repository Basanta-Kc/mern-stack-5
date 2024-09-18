// the ability of a function to capture and
// retain the values of its local variables, even
// after the function has completed execution.

// function highOrder() {
//   let count = 0;
//   function canAccessCount() {
//     count++;
//     console.log(count);
//   }

//   return canAccessCount;
// }

// const logCount = highOrder();
// logCount(); //1
// logCount(); //2
// const logCount2 = highOrder()
// logCount2(); //
// console.log(highOrder)

// way to declare variable in js ? and difference between them ?
// why is fucntion called first class citizen in Js?
// hoisting in js.
// how operators behave in different type of operand. (give example of +, -, /) how + does two things (concat, addition)
// way to declare function in js and their behaviour.
// what is closure?

// Class Animal() { }
// Animal a = new Animal("kaley", 4)
// cons person = {}, new Object()
// perso.name = 'basanta"
const num = 1;
// num = 3;
const num2 = 1;
// console.log(num === num2);

const person = {
  name: "basanta",
  hadPaidFee: true,
  age: 10,
  greet: function () {
    console.log("heloo");
  },
  "my school name": "nbhs",
  father: {
    name: "father name",
  },
};

console.log(person["age"]);

console.log(person.greet());

const son = person; // pass by reference
son.name = "basanta khatri";
// console.log(person === son);

delete person.father;
console.log(son);

const person2 = {
  name: "basanta",
  age: 10,
  father: {
    name: "father name",
  },
};

// console.log(person === person2);

// new Object()
person.name = "basnata kc";
// person.age = 10;
// person.father.name = "new name";
// const name = person.name;

// // ? => OPTIONA CHAINING
// console.log(person.father.father?.name ?? "DEFAULT NAME");

function addPropSchool(obj) {
  // let obj = person;
  obj.school = "test school";
}

addPropSchool(person);

console.log(person);
