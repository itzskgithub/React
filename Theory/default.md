# 📌 `export default` vs `export` (named export)

## 🔹 1. Default Export

### ✅ Syntax

```js
export default function App() {}
```

### ✅ Import

```js
import App from "./App";
```

### 🔑 Key Points

* Only **ONE default export** per file
* You can give **ANY name while importing**

```js
import MyApp from "./App"; // still works ✅
```

---

## 🔹 2. Named Export (without default)

### ✅ Syntax

```js
export const name = "Shubham";
export const age = 21;
```

### ✅ Import

```js
import { name, age } from "./file";
```

### 🔑 Key Points

* You can export **MULTIPLE values**
* Import name must be **exact same**

```js
import { name } from "./file"; // ✅
import { Name } from "./file"; // ❌ (case matters)
```

---

## 🔹 3. Mixing Both

```js
export const age = 21;
export default function App() {}
```

### Import:

```js
import App, { age } from "./file";
```

---

## 🔹 4. Rename Named Import

```js
import { name as userName } from "./file";
```

---

## 🔹 5. Quick Comparison

| Feature         | Default Export | Named Export    |
| --------------- | -------------- | --------------- |
| Number per file | 1              | Multiple        |
| Import syntax   | No `{}`        | Uses `{}`       |
| Rename allowed  | Yes            | Yes (with `as`) |
| Name must match | No             | Yes             |

---

## 🔹 6. Common Mistakes

❌ Using `{}` with default:

```js
import { App } from "./App"; // ❌
```

❌ Not using `{}` with named:

```js
import name from "./file"; // ❌
```

---

## 🔹 7. When to Use

* Use **default export** → when file has ONE main thing (like a component)
* Use **named export** → when exporting multiple utilities

---

## 🔹 Final Line (Revision)

👉 Default = one main export (no `{}`)
👉 Named = multiple exports (`{}` required)
