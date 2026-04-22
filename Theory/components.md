🧩 What are Components in React?

In React, a component is:

👉 a reusable piece of UI (User Interface)

Think of it like LEGO blocks 🧱
You build small pieces → combine them → make a full app

📦 Simple Example
function App() {
  return <h1>Hello World</h1>;
}

👉 App is a component

🧠 Why Components?
Reusability ✅
Clean code ✅
Easy maintenance ✅
Better structure ✅
🔥 Types of Components
1. Functional Components (Modern Way ✅)
function Welcome() {
  return <h1>Hello Shubham</h1>;
}

👉 Just a JavaScript function that returns JSX

2. Class Components (Old Way ❌)
class Welcome extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

👉 Mostly not used anymore after hooks

⚙️ Component Structure

A component usually has:

JSX (UI)
State (data)
Props (input from parent)
🧩 Props (Passing Data)
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

<Welcome name="Shubham" />

👉 Props = arguments passed to component

🔄 Component Types (Based on Usage)
1. Presentational Components

👉 Only UI (no logic)

2. Container Components

👉 Handle logic + state

🧠 Component Tree

React apps are structured like a tree:

App
 ├── Navbar
 ├── Sidebar
 └── Content
      ├── Card
      └── Button

👉 Everything is connected

🔥 Reusable Component Example
function Button({ text }) {
  return <button>{text}</button>;
}

<Button text="Login" />
<Button text="Signup" />

👉 Same component reused with different data

⚡ Key Rules
Component name must start with capital letter
Must return single parent element
Can use hooks only inside components
🧠 Smart Way to Think

👉 Component = function + UI + logic

🚀 Real Example (Combining Everything)
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

👉 This component:

has state
has UI
has logic
🧩 Advanced Concepts (You’ll Need Later)
Controlled vs uncontrolled components
Higher Order Components (HOC)
Render props
Lazy loading (React.lazy)
⚡ One-Line Summary

👉 Component = reusable building block of UI in React