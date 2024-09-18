// comparison operators ( == , < ,> , <= , >= ,!=) => true or false
// logical operators ( && , ||) =>
// true && true && ture => true
// true || false || false => true

// falsy => null, undefined, nan, 0 , ""
// const result = "" || false || null;
// console.log(result);

// const resultAnd = false && true && "abc";
// console.log(resultAnd);

// Conditional Branching
const test = prompt("enter:");
console.log(test);
const age = 20; // take this as a input from user prompt()
if (age == 18) {
  console.log("free");
} else if(age < 18)  {
  console.log("%10 discount");
} else {
    console.log("no discount")
}

const result = age > 18 ? "eligible" : "not eligible";
console.log(result);

// enter marks : 100- 90 (A), 90 - 70 (b), 70-50 (c), D


