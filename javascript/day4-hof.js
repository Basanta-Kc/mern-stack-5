// function
// const result = addExpression(2, 3);
// console.log(result);

// function declaration
// add(2,3)
// function add(a, b = 0) {
//   // let a, b; let a= 2, b;
//   console.log(a + b);
// } // return undefined;

// add(2);

// addExpression(2, 3);
// // function expression
// var addExpression = function (num1, num2) {
//   console.log(num1 + num2);
// };
// no return for single line
// let addArrowFunc = (num1, num2) => {
//   console.log(num1 + num2);
// };

let addArrowFunc = (num1, num2) => num1 + num2;
let addArrowFunc2 = (num1) => {};

// this.add(2, 3);
// addArrowFunc(3, 4);
// this.addExpression(3, 4);

// var a;

// a()

// a = 10;

const num = 10;
const num2 = num;

const add = function (num1, num2) {
  console.log(num1 + num2);
};

const addAnother = add;
// adAnother(), add() , add(num, num2)

// function add(num1, num2){
//     return num1 + num2;
// }

// add(2,3)

function highOrderfunc(callback) {
  callback();

  function insideOfHighOrder() {
    console.log("inside high order.");
  }

  return insideOfHighOrder; // 2
}

function test() {
  console.log("test");
}

const result = highOrderfunc(test);
result();
