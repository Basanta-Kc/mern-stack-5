const obj = {};

// while (true) {
//   const key = prompt("Enter Key:"); // from user (prompt)
//   if (key === "exit") break;
//   const value = prompt("Enter value:"); // from user; (prompt)
//   obj[key] = value; // obj.name  = 'basanta'
// }
// console.log(this); // window object

function greet() {
  console.log(this); // windows
}

// console.log(this)
const greetArrow = () => {
  console.log(this);
};

// greetArrow();
// console.log(this)
const person = {
  name: "basanta",
  hadPaidFee: true,
  age: 10,
  greetArrow: () => {
    console.log(this)
  },
  greet: function () {
    console.log(this)
    const arrowFunc = () => {
      console.log("arrow vitra", this);
    };
    arrowFunc();
  },
  father: {
    name: "father name",
  },
};

person.greetArrow();

// for (let key in person) {
//   console.log(key, person[key]); // name: basanta // hasPaidFee: true
// }

/// obj["school"] = nbhs
// console.log(obj);

// ask user for which data they want()
// const property = prompt("Enter key:"); // dynamically
// console.log(person[property]); // person.name
