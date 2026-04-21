👉 In React (JSX), we use className instead of class because:

"class" is a reserved keyword in JavaScript
🔹 Let’s break it properly
🔸 In normal HTML:
<div class="container"></div>

👉 Works fine because it's plain HTML

🔸 In React (JSX):
<div class="container"></div>   // ❌ wrong

👉 This causes issues because:

JSX is not pure HTML
It is JavaScript-like syntax
And in JavaScript:
class MyClass {}  // "class" is used to define classes

👉 So class is already reserved

🔹 So React uses:
<div className="container"></div>   // ✅ correct
🔹 Why specifically className?

👉 Because in the DOM (JavaScript world):

element.className = "container";

👉 This is how JS sets CSS classes

React follows this same convention