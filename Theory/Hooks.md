🔥 What are Hooks?

Hooks are functions in React that let you use state and lifecycle features in functional components.

👉 Before Hooks → only class components could manage state
👉 After Hooks → functional components can do everything

🧠 Why Hooks were introduced
To avoid complex class components
To reuse logic easily
To make code cleaner and more readable
⚙️ Basic Rules of Hooks
Use hooks only inside React functions
Don’t call hooks inside loops/conditions
Always call them at the top level
🧩 Most Important Hooks
1. useState (State Management)

Used to store and update data.

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

👉 Think of it as a variable that remembers its value after re-render.

2. useEffect (Side Effects)

Runs code after render (API calls, timers, DOM updates).

import { useEffect } from 'react';

useEffect(() => {
  console.log("Component mounted");

  return () => {
    console.log("Cleanup");
  };
}, []);

👉 Dependency array:

[] → run once
[value] → run when value changes
no array → run every render
3. useRef (Direct DOM / Persistent Value)

Stores a value without causing re-render.

import { useRef } from 'react';

const inputRef = useRef();

<input ref={inputRef} />

👉 Use cases:

Access DOM
Store previous values
4. useContext (Global State)

Used to avoid prop drilling.

const value = useContext(MyContext);

👉 Example: theme, user login info

5. useMemo (Performance Optimization)

Memoizes a value (prevents unnecessary recalculation).

const result = useMemo(() => expensiveFunction(data), [data]);
6. useCallback (Function Memoization)

Prevents function recreation.

const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
7. useReducer (Advanced State)

Used when state logic is complex.

const [state, dispatch] = useReducer(reducer, initialState);

👉 Like Redux but inside component

8. Custom Hooks (🔥 Powerful Concept)

You can create your own hooks.

function useCounter() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}

👉 Reuse logic across components

🧠 When to use what?
Situation	Hook
Simple state	useState
API call / lifecycle	useEffect
DOM access	useRef
Global data	useContext
Complex logic	useReducer
Performance	useMemo / useCallback
⚡ Common Mistakes (very important)
❌ Updating state inside render
❌ Missing dependency in useEffect
❌ Overusing useMemo / useCallback
❌ Calling hooks inside if or loops
🧩 Real-Life Example
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return <div>{data.length}</div>;
}
🚀 Simple Way to Remember
useState → store data
useEffect → do something after render
useRef → hold value without re-render
useContext → share data
useReducer → complex logic


🧾 useId (React Hook) — Quick Notes
👉 useId is a built-in React hook
👉 Generates a unique and stable ID
👉 Used mainly for accessibility (label ↔ input connection)
🔹 Syntax
const id = useId();
🔹 Use Case
const id = useId();

<label htmlFor={id}>Name</label>
<input id={id} />

✔ Links label and input properly

🔹 Key Points
Stable across re-renders
Unique for each component instance
Safe for SSR (server-side rendering)
❌ Don’t Use For
Keys in lists
Replacing database IDs
⚠️ Rules
Use only inside components/custom hooks
Not inside loops/conditions
💡 Final One-Liner

👉 useId = unique, stable ID generator for accessibility in React