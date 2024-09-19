// const formRef = document.getElementById("github-form");
// formRef.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const userInputRef = document.getElementById("username");
//   const username = userInputRef.value;
//   fetch(`https://api.github.com/users/${username}`)
//     .then((res) => res.json())
//     .then((user) => {
//       console.log(user);
//       fetch(user.followers_url).then((res) => {
//         res.json().then((data) => {
//           console.log(data);
//         });
//       });
//     });
// });

const formRef = document.getElementById("github-form");
formRef.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userInputRef = document.getElementById("username");
  const username = userInputRef.value;
  const res = await fetch(`https://api.github.com/users/${username}`);
  const user = await res.json();
  const followersRes = await fetch(user.followers_url);
  const followers = await followersRes.json();

  console.log(user, followers);
});

// use then catch syntax,
// user async await
