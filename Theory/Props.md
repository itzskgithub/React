🔹 What are Props in React?

Props (short for properties) are used to pass data from one component to another.

👉 Think of them like function arguments.

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

Usage:

<Welcome name="Shubham" />

👉 Output: Hello, Shubham

🔹 Why Props are Important

React follows one-way data flow:

Parent → Child (data goes downward only)

Props help you:

Reuse components
Make components dynamic
Keep code clean
🔹 Props are Read-Only ⚠️

You cannot modify props inside the component.

❌ Wrong:

props.name = "New Name"; // not allowed

👉 Props are immutable

🔹 Types of Props
1. String Props
<Greet name="Shubham" />
2. Number Props
<Age age={20} />
3. Boolean Props
<User isLoggedIn={true} />

Shortcut:

<User isLoggedIn />
4. Array Props
<List items={[1, 2, 3]} />
5. Object Props
<User user={{ name: "Shubham", age: 20 }} />
6. Function Props (VERY IMPORTANT 🔥)

Used for communication from child → parent.

function Button(props) {
  return <button onClick={props.handleClick}>Click</button>;
}
🔹 Props in Functional Components
Normal way:
function Greet(props) {
  return <h1>Hello {props.name}</h1>;
}
Destructuring (Best Practice):
function Greet({ name }) {
  return <h1>Hello {name}</h1>;
}
🔹 Default Props

If no value is passed:

function Greet({ name = "Guest" }) {
  return <h1>Hello {name}</h1>;
}
🔹 Passing Children (Special Prop)

React gives a special prop: children

function Card(props) {
  return <div>{props.children}</div>;
}

Usage:

<Card>
  <h1>Hello</h1>
</Card>
🔹 Props vs State (Important Difference ⚡)
Feature	Props	State
Mutability	Read-only	Mutable
Controlled by	Parent	Component itself
Purpose	Pass data	Manage internal data
🔹 Props Flow (Very Important Concept)
Parent Component
      ↓
   Props
      ↓
Child Component

👉 Data flows one direction only

🔹 Real Example
function App() {
  return <User name="Shubham" age={20} />;
}

function User({ name, age }) {
  return (
    <h1>
      {name} is {age} years old
    </h1>
  );
}
🔹 Common Mistakes 🚫
❌ Trying to change props
❌ Forgetting {} for JS expressions
❌ Not destructuring (makes code messy)
❌ Confusing props with state
🔹 Interview-Level Points 🔥
Props are immutable
Used for component communication
Support any data type
Enable reusability
Follow unidirectional data flow
🔹 Simple Analogy (You’ll remember this)

👉 Component = Function
👉 Props = Inputs

f(x) → output
Component(props) → UI