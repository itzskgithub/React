🧠 What is React Context?

React Context API lets you share data globally across components without passing props manually at every level.

👉 Problem it solves: Prop Drilling

<App>
  <Parent>
    <Child>
      <GrandChild />  // needs data 😩
    </Child>
  </Parent>
</App>

Without context → pass props through every level
With context → access directly anywhere ✅

🔥 When to Use Context

Use it for:

🔐 Auth (user login state)
🌙 Theme (dark/light)
🌍 Language
🛒 Cart data

❌ Don’t use it for:

Very frequent updates (performance issue)
Large complex apps → use Redux/Zustand instead
⚙️ Core Pieces (Very Important)
1. Create Context
import { createContext } from "react";

export const MyContext = createContext();
2. Provider (Wrap your app)
import { useState } from "react";
import { MyContext } from "./MyContext";

const MyProvider = ({ children }) => {
  const [data, setData] = useState("Hello Shubham");

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;

👉 value = what you want to share

3. Wrap App
import MyProvider from "./MyProvider";

<MyProvider>
  <App />
</MyProvider>
4. useContext (Access Data)
import { useContext } from "react";
import { MyContext } from "./MyContext";

const Child = () => {
  const { data, setData } = useContext(MyContext);

  return <h1>{data}</h1>;
};
🧩 Real Example (Theme Toggle)
Create Context
const ThemeContext = createContext();
Provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
Use It
const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Current: {theme}
    </button>
  );
};
⚡ Important Concepts
🔁 Re-render Behavior

When context value changes:
👉 All components using it re-render

🚀 Optimization Trick (VERY IMPORTANT)

Bad:

<MyContext.Provider value={{ data, setData }}>

👉 This creates new object every render

Better:

const value = useMemo(() => ({ data, setData }), [data]);

<MyContext.Provider value={value}>
🧠 Multiple Contexts
<AuthProvider>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</AuthProvider>

👉 Clean separation of concerns

🪝 Custom Hook (Best Practice)
export const useMyContext = () => {
  return useContext(MyContext);
};

Use:

const { data } = useMyContext();
⚠️ Common Mistakes

❌ Forgetting Provider → context undefined
❌ Overusing context → performance issues
❌ Updating context too frequently
❌ Not memoizing value

🆚 Context vs Redux
Feature	Context	Redux
Setup	Easy	Complex
Scale	Small–Medium	Large apps
Performance	Can re-render a lot	Optimized
DevTools	Basic	Powerful
🧠 Mental Model (IMPORTANT)

Think of Context as:
👉 A global variable system inside React

BUT controlled and reactive.

🚀 When YOU should use it (practical advice)

Since you're learning fast and aiming full stack:

👉 Use Context for:

Auth system
Theme
Small apps

👉 Avoid it for:

Big dashboards
Heavy real-time updates