// console.log("aman");
// const p = new Promise((resolve, reject) => {
//   resolve("done");
// });
// async function getData() {
//   return p;
//   p.then((res) => console.log(res));
// }
// getData();
// const data = getData();
// data.then((res) => console.log(res));
// console.log(data);

// async function handlePromise() {
//   //   await p.then((r) => console.log(r));
//   const val = await p;
//   async function app() {
//     console.log("hello");
//   }
//   await app();
//   console.log("val:", val);
// }
// handlePromise();

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value");
//   }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value");
//   }, 20000);
// });

// async function getData() {
//   //   p1.then((res) => console.log(res));
//   console.log("aman");

//   const val = await p1;
//   console.log("Promise 1");
//   console.log(val);
//   const val2 = await p2;
//   console.log("Promise 2");
//   console.log(val2);
// }
// getData();
// console.log(getData());

// const fetch = require("node-fetch");
// const API_URL = "https://api.github.com/users/amanymous";

// async function handleFetch() {
//   const f = await fetch(API_URL);
//   const jsonVal = await f.json();
// }

// handleFetch();

const API_URL = "https://ap.github.com/users/amanymous";

// async function handleFetch() {
//   try {
//     const f = await fetch(API_URLl);
//     const jsonVal = await f.json().then((res) => console.log(res));
//   } catch (err) {
//     console.log(err);
//   }
// }

// handleFetch();

async function handleFetch() {
  const f = await fetch(API_URL);
  const jsonVal = await f.json().then((res) => console.log(res));
}
handleFetch().catch((err) => console.log(err));
