// // getElementById
// const title = document.getElementById("title");
// console.log(title); // Logs the <h1> element

// // getElementsByClassName
// const paragraphsByClass = document.getElementsByClassName("paragraph");
// console.log(paragraphsByClass); // Logs a live HTMLCollection of elements with class 'paragraph'

// // getElementsByTagName
// const paragraphsByTag = document.getElementsByTagName("p");
// console.log(paragraphsByTag); // Logs a live HTMLCollection of <p> elements

// // querySelector
// const firstParagraph = document.querySelector("p"); // (".title")
// firstParagraph.setAttribute("id", "first-paragraph"); // Logs the first <p> element
// console.log(firstParagraph);

// // querySelectorAll
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs); // Logs a NodeList of all <p> elements

// // setAttribute
// firstParagraph.setAttribute("id", "first-paragraph"); // Sets an id attribute on the <p> element

// // getAttribute
// const paragraphId = firstParagraph.getAttribute("id");
// console.log(paragraphId); // Logs 'first-paragraph'

// // removeAttribute
// firstParagraph.removeAttribute("id"); // Removes the id attribute from the <p> element

// // style property
// firstParagraph.style.color = "blue";
// // firstParagraph.style.fontSize = "100px";

// // Changes the text color of the <p> element to blue

// // classList methods
// firstParagraph.classList.add("highlight"); // Adds the 'highlight' class to the <p> element
// firstParagraph.classList.remove("highlight"); // Removes the 'highlight' class from the <p> element
// firstParagraph.classList.toggle("highlight"); // Toggles the 'highlight' class on the <p> element

// const btn = document.getElementById("highlight-button");
// btn.addEventListener("click", (e) => {
//   firstParagraph.classList.toggle("highlight");
// });

const fruits = ["apple", "grapes", "mango", "pineapple"];

let list = "";

for (let fruit of fruits) {
  console.log(`<li>${fruit}</li>`);
  list += `<li>${fruit}</li>`;
}

console.log(list);

document.getElementById("fruits").innerHTML = list;

const user = {
  name: "basanta",
  age: 10,
};

document.getElementById("user-info").innerHTML = `
      <li><b>Name</b>: ${user.name}</li>
      <li><b>Age</b>: ${user.age}</li>
`;
