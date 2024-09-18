const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value from 1st promise");
  }, 5000);
});

promise.then((val) => {
  console.log(val);
});

console.log("helooo");

const promiseRejcet = new Promise((resovle, reject) => {
  reject("error");
});

promiseRejcet.catch((val) => {
  console.log(val);
});

function getUser() {
  const user = {
    name: "suman",
    age: 22,
  };

  return user;
}

function getUserAsync() {
  const user = {
    name: "suman",
    age: 22,
  };

  return new Promise((resolve, reject) => {
    resolve(user);
  });
}

const user = getUser();
console.log(user.name);
const suman = getUserAsync();
suman.then((user) => {
  console.log(user);
});

fetch("https://jsonplaceholder.org/posts")
  .then((res) => {
    res.json().then((posts) => {
      let titles = "";
      for (let post of posts) {
        titles += `<li>
      <img src="${post.image}" width="200" height="200" />
      ${post.title}
      </li>`;
      }
      document.getElementById("posts").innerHTML = titles;
    });
  })
  .catch((err) => {
    console.log(err);
  });

// promise
// initali (pedning)
// resolve () => then  (fullfile)
// rject  => catch (rejected)

// use this api to fetch users data and show on screen
// https://jsonplaceholder.typicode.com/users

// display only single post as well
// https://jsonplaceholder.org/posts/1
