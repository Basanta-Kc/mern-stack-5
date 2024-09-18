// // const basanta = { // new Object()
// //   name: "basnata",
// //   age: 10,
// //   greet: function () {
// //     console.log(this);
// //     console.log(`${this.name}: Hello`);
// //   },
// // };

// const suman = {
//   name: "suman",
//   age: 22,
//   greet: function () {
//     console.log(this);
//     console.log(`${this.name}: Hello`);
//   },
// };

// function createPerson(name, age) {
//   const person = {
//     name,
//     age,
//     greet: function () {
//       console.log(this);
//       console.log(`${this.name}: Hello`);
//     },
//   };

//   return person;
// }

// function Person(name, age) {
//   // this = {}
//   this.name = name;
//   this.age = age;

//   // new copy is created for every object
//   this.greet = function () {
//     console.log(this);
//     console.log(`${this.name}: Hello`);
//   };
//   // return this
// }
// // it is declared only once
// Person.prototype.greetV2 = function () {
//   console.log(this);
//   console.log(`${this.name}: Hello`);
// };

// // const suraj = createPerson("suman", "10");
// const suraj = new Person("suraj", 22);
// const suman = new Person("suman", 22);
// console.log(suraj.greetV2());
// console.log(suman);

// function Student(name, age, major) {
//   // this = {}
//   //   this.name = name;
//   //   this.age = age;
//   Person.call(this, name, age);
//   this.major = major;
// }

// Object.setPrototypeOf(Student.prototype, Person.prototype);

// const ram = new Student("ram", 10, "science");
// console.log(ram);

// suman.__proto__ = basanta

// console.log(basanta);

// const nums = []; // new Array()

// console.log(nums);

// const result = nums.map((num) => num * 2);

//  console.log(nums.hasOwnProperty('length'))

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`${this.name}: Hello`);
  }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age) // Person.call(this, name, age)
        this.major = major
    }
}
