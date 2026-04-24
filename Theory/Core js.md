🚀 1. Basic Promise (core concept)
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});
🔹 2. Using .then() and .catch()
myPromise
  .then((result) => {
    console.log(result); // success
  })
  .catch((error) => {
    console.log(error); // failure
  })
  .finally(() => {
    console.log("Always runs");
  });
🔹 3. Promise chaining
Promise.resolve(10)
  .then((num) => num * 2)
  .then((num) => num + 5)
  .then((final) => console.log(final)); // 25
🔹 4. Async / Await (clean way)
async function run() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
run();
🌐 5. Basic fetch (GET request)
fetch("https://api.example.com/data")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
🌐 6. Fetch with async/await
async function getData() {
  try {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();
🌐 7. POST request (sending data)
async function postData() {
  const res = await fetch("https://api.example.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "Shubham",
      age: 21
    })
  });

  const data = await res.json();
  console.log(data);
}
postData();
🌐 8. Handling errors properly
async function getData() {
  try {
    const res = await fetch("https://api.example.com/data");

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}
🔄 9. Multiple API calls
Parallel (faster)
async function getAll() {
  const [a, b] = await Promise.all([
    fetch("url1").then(res => res.json()),
    fetch("url2").then(res => res.json())
  ]);

  console.log(a, b);
}
Sequential (one after another)
async function getSequential() {
  const res1 = await fetch("url1");
  const data1 = await res1.json();

  const res2 = await fetch("url2");
  const data2 = await res2.json();

  console.log(data1, data2);
}
🔁 10. Your React-style API call (final form)
useEffect(() => {
  async function fetchData() {
    try {
      const res = await fetch(`https://api.com/${currency}`);
      const data = await res.json();
      setData(data[currency]);
    } catch (error) {
      console.log(error);
    }
  }

  fetchData();
}, [currency]);
🧠 Final mental map
Promise → async result holder
.then() → handle result
async/await → cleaner syntax
fetch() → API call
.json() → convert response
⚡ Golden rule

👉 Use:

.then() → when chaining simple logic
async/await → for real projects (clean & readable)

If you want, next I can 
give you a real interview question (like building a mini API app or handling loading + error states in React) — that’s where all this becomes practical.

why all this used step by step guide

Alright, let’s make this super practical and step-by-step — not just how, but why each thing exists. Think of it like a real flow when your app talks to an API.

🎯 Big Picture (what are we trying to do?)

👉 “Get data from a server and show it in UI”

Example:

You want currency rates
Data lives on a server (not in your app)
So you must request it
🚀 Step-by-step WHY everything is used
🔹 Step 1: fetch() → Start the request
fetch(url)
❓ Why?

Because:
👉 Your app doesn’t have the data
👉 You need to ask a server for it

📦 Think:

“Send request to server”

🔹 Step 2: Promise → Because it takes time
const res = fetch(url);
❓ Why Promise?

Because:

Server response is not instant
It may take time (network delay)

👉 So JavaScript says:

“I’ll give you the result later”

🔹 Step 3: .then() → Handle response when ready
fetch(url).then((res) => { ... })
❓ Why .then()?

Because:
👉 You need to say:

“When data arrives, do this”

Without it:
❌ You try to use data before it arrives

🔹 Step 4: .json() → Convert data
res.json()
❓ Why?

Because server sends:
👉 JSON string (text format)

But your code needs:
👉 JavaScript object

So:

.json() = convert text → usable object

🔹 Step 5: Second .then() → Get final data
.then((data) => { ... })
❓ Why another .then()?

Because:
👉 .json() is ALSO async

So again:

“When conversion is done, give me final data”

🔹 Step 6: useState → Store data
setData(data);
❓ Why?

Because:
👉 You need to store the result somewhere

And:
👉 When data changes → UI should update

🔹 Step 7: Re-render → Show updated UI
❓ Why re-render?

Because:
👉 UI must reflect new data

React says:

“State changed → redraw UI”

🔹 Step 8: useEffect → Control when it runs
useEffect(() => {
  fetchData();
}, [currency]);
❓ Why?

Because:
👉 You don’t want API call on every render

You want:

Run once OR
Run when currency changes
🔹 Step 9: async/await (optional but cleaner)
const res = await fetch(url);
const data = await res.json();
❓ Why?

Because:
👉 .then() chaining gets messy

👉 async/await = cleaner, readable flow

🧠 Full flow (real thinking)
Need data → use fetch
Takes time → returns Promise
Wait for result → .then() or await
Convert data → .json()
Store data → useState
Show in UI → React re-render
Control execution → useEffect
⚡ One-line summary

We use all this because data comes asynchronously from a server, and we must fetch, wait, convert, store, and render it properly.

💡 Simple analogy
fetch() → ordering food 🍔
Promise → food is being prepared ⏳
.then() → waiter calls you 📞
.json() → unpacking food 🍽️
useState → putting it on your plate
re-render → you can now see/eat it