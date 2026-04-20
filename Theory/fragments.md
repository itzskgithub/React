Why Fragments?

Normally in React, components must return a single parent element:

❌ This would give an error:

function App() {
  return (
    <h1>Hello</h1>
    <p>World</p>
  );
}


React expects one root element. You might think of wrapping them in a <div>:

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>World</p>
    </div>
  );
}


But this adds an unnecessary <div> to the DOM.

✅ Solution: React Fragments

You can use a fragment instead:

function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>World</p>
    </>
  );
}


This renders without any extra wrapper in the DOM.

Two ways to write Fragments:

Short syntax (common):

<>
  <h1>Item 1</h1>
  <h1>Item 2</h1>
</>


Full syntax (useful if you need keys):

<React.Fragment>
  <h1>Item 1</h1>
  <h1>Item 2</h1>
</React.Fragment>


With keys (e.g. when rendering lists):

<React.Fragment key={1}>
  <h1>Item 1</h1>
</React.Fragment>


✅ Key point: Fragments help avoid unnecessary <div> wrappers, keeping your DOM clean.