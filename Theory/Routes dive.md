🚦 What is Routing in React?

Routing means showing different UI (components) based on the URL.

In normal websites:

/home → Home page
/about → About page

In React (SPA - Single Page App):
👉 No full page reload
👉 Only components change

This is handled using React Router

📦 Install React Router
npm install react-router-dom
🧠 Core Concepts
1. BrowserRouter (Wrap your app)
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>

👉 This enables routing in your app

2. Routes & Route
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>

👉 Routes = container
👉 Route = mapping URL → Component

3. Link (instead of <a>)
import { Link } from "react-router-dom";

<Link to="/about">Go to About</Link>

❌ <a href="/about"> → reloads page
✅ Link → smooth navigation

4. useNavigate (Programmatic Navigation)
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

navigate("/about");

👉 Useful after login, form submit, etc.

5. useParams (Dynamic Routing)
<Route path="/user/:id" element={<User />} />
import { useParams } from "react-router-dom";

const { id } = useParams();

👉 URL: /user/5 → id = 5

6. Nested Routes (VERY IMPORTANT)
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>

Inside Dashboard.jsx:

import { Outlet } from "react-router-dom";

<Outlet />

👉 Outlet = where child routes render

7. useLocation
import { useLocation } from "react-router-dom";

const location = useLocation();
console.log(location.pathname);

👉 Gives current URL info

8. Protected Routes (Auth)
const Protected = ({ children }) => {
  const isLoggedIn = true;

  return isLoggedIn ? children : <Navigate to="/login" />;
};

Usage:

<Route path="/dashboard" element={
  <Protected>
    <Dashboard />
  </Protected>
} />
9. 404 Page (Not Found)
<Route path="*" element={<NotFound />} />
🧩 Folder Structure (Clean Way)
src/
 ├── pages/
 │    ├── Home.jsx
 │    ├── About.jsx
 │    └── Dashboard.jsx
 ├── components/
 ├── App.jsx
 └── main.jsx
⚡ Full Example
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
🧠 Key Takeaways
React Router makes SPA navigation possible
Routes + Route = core
Link replaces <a>
useNavigate = redirect
Outlet = nested routing
useParams = dynamic URL
⚠️ Common Mistakes

❌ Forgetting <BrowserRouter>
❌ Using <a> instead of Link
❌ Not using Outlet in nested routes
❌ Wrong path like /profile vs profile