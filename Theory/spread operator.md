# 📌 Spread Operator (`...`) in React / JavaScript

## 🔹 Definition

The `...` is called the **spread operator**.
It is used to **expand elements** of an array or object into another array/object.

---

## 🔹 Why it is used in React

React state should be **immutable** (do not modify original data).
So we use `...` to create a **new copy** instead of changing the old one.

---

## 🔹 Syntax

### Arrays

```js
const newArray = [...oldArray];
```

### Objects

```js
const newObject = { ...oldObject };
```

---

## 🔹 Example (Todo App)

```js
setTodos(prevTodos => [...prevTodos, newTodo]);
```

### Explanation:

* `prevTodos` = previous state
* `...prevTodos` = copies all existing todos
* `newTodo` = added at the end

👉 Result: New array with old + new item

---

## 🔹 Step Example

```js
prevTodos = ["task1", "task2"];
```

```js
[...prevTodos, "task3"];
```

👉 Output:

```js
["task1", "task2", "task3"];
```

---

## 🔹 Common Uses

### 1. Add item

```js
setState(prev => [...prev, newItem]);
```

### 2. Remove item

```js
setState(prev => prev.filter(item => item !== value));
```

### 3. Update item

```js
setState(prev =>
  prev.map(item =>
    item.id === id ? { ...item, done: true } : item
  )
);
```

---

## 🔹 Important Points

* Creates a **new array/object**
* Prevents direct mutation ❌
* Required for proper React re-rendering
* Works for both arrays and objects

---

## 🔹 Common Mistake

```js
setTodos(prev => [prev, newTodo]);
```

❌ Output:

```js
[["task1", "task2"], "task3"] // Nested array
```

---

## 🔹 Spread vs Rest (Quick Note)

* Spread → Expands values
* Rest → Collects values

Example:

```js
const arr = [1, 2, 3];
const newArr = [...arr]; // Spread

function sum(...nums) {} // Rest
```

---

## 🔹 Final Line (for revision)

👉 `...` = copy + expand → used for safe state updates in React
