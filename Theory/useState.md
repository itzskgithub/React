const [state , setState] = useState(props);

    here state is variable and setState is method which is responsible for changing that variable no other can change the variable.

    🔥 What is useState (in one line)

👉 useState is a React Hook that lets a functional component store, update, and remember data between renders.

🧠 Mental Model (very important)

Think of useState like:

“React gives your component a memory slot + a way to update it safely.”

🔹 Syntax
const [state, setState] = useState(initialValue);
state → current value
setState → updates value
initialValue → starting value
🔹 Example (Your color app)
const [color, setColor] = useState('olive');
Initially → 'olive'
On click → changes → React re-renders → UI updates
🔹 How React Works Behind the Scenes
Component renders
useState gives current value
You call setState
React schedules update
Component re-renders with new state

👉 State persists between renders

🔹 Rules of useState ⚠️
1. Only call at top level

❌ Wrong:

if (true) {
  useState(0);
}

✔️ Always:

const [count, setCount] = useState(0);
2. Only inside React functions
Functional components ✔️
Custom hooks ✔️
Normal JS functions ❌
🔹 Types of State
1. Primitive
const [count, setCount] = useState(0);
const [name, setName] = useState("Shubham");
const [isOpen, setIsOpen] = useState(false);
2. Array
const [items, setItems] = useState([]);

✔️ Update:

setItems([...items, "new item"]);
3. Object
const [user, setUser] = useState({ name: "", age: 0 });

✔️ Update:

setUser({ ...user, age: 21 });
🔥 Most Important Concept: Immutability

👉 Never modify state directly

❌ Wrong:

user.age = 22;
setUser(user);

✔️ Correct:

setUser({ ...user, age: 22 });
🔹 State Updates are Async ⚠️
setCount(count + 1);
setCount(count + 1);

👉 Final value = +1 (not +2)

✔️ Correct way (functional update)
setCount(prev => prev + 1);
setCount(prev => prev + 1);

👉 Final value = +2

🔹 Re-render Behavior

👉 When state changes:

Component re-renders
UI updates

👉 When state same:

setCount(0); // if already 0

➡️ No re-render (React optimizes)

🔹 Multiple States vs One Object
✔️ Better
const [name, setName] = useState("");
const [age, setAge] = useState(0);
⚠️ Avoid unless needed
const [user, setUser] = useState({ name: "", age: 0 });

👉 Why?

Easier updates
Cleaner code
Less bugs
🔹 Lazy Initialization (Optimization)
const [value, setValue] = useState(() => {
  console.log("Runs once");
  return 100;
});

👉 Function runs only on first render

🔹 Derived State (Common Mistake)

❌ Wrong:

const [fullName, setFullName] = useState("");

✔️ Correct:

const fullName = firstName + " " + lastName;

👉 Don’t store what you can calculate

🔹 When to use useState

Use when:

UI changes dynamically
User interaction
Data changes over time
🔹 When NOT to use
Static values
Derived values
Complex logic → use useReducer
🔹 Real-world Patterns
Toggle
const [isOpen, setIsOpen] = useState(false);

setIsOpen(prev => !prev);
Input field
const [text, setText] = useState("");

<input onChange={(e) => setText(e.target.value)} />
Counter
setCount(prev => prev + 1);
🔹 Common Mistakes (Interviewer traps)

❌ Mutating state
❌ Not using functional updates
❌ Too many unnecessary states
❌ Storing derived values
❌ Calling hooks conditionally

🔹 useState vs Normal Variable
let count = 0;

❌ resets every render

const [count, setCount] = useState(0);

✔️ persists

🔥 Interview Gold Line

👉
“useState allows functional components to maintain local state and trigger re-renders when that state changes, ensuring UI stays in sync with data.”