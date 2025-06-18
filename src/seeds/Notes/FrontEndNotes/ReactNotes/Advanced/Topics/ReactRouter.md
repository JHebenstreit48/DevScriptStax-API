# React Router

---

## 🧭 What Is React Router?

React Router is the standard library for routing in React applications. It enables navigation between different views of a single-page app without full page reloads.

- Uses a component-based approach for defining routes.
- Supports client-side routing for smooth transitions.
- Integrates with browser history (pushState/popState).

---

## 🔗 The <span class="codeSnip">Link</span> Component

Use the <span class="codeSnip">&lt;Link&gt;</span> component instead of an HTML anchor tag to avoid full page reloads:

javascript
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>

- <span class="codeSnip">to</span> is the target path.
- Acts like an anchor tag but handled internally by React Router.

---

## 💡 Why Not Use <span class="codeSnip">&lt;a href&gt;</span>?

Using a native anchor tag (e.g., <span class="codeSnip">&lt;a href="/about"&gt;</span>) reloads the page — losing state and reinitializing the app.

<span class="codeSnip">&lt;Link&gt;</span> allows React to intercept and render the new component **without reloading**.

---

## 🧱 Route Structure (Overview)

To define routes in your app:

javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

---

## 🔑 Dynamic Routes with Params

You can pass parameters in routes using the colon <span class="codeSnip">:</span> syntax:

javascript
<Route path="/user/:id" element={<UserProfile />} />

To access the ID in the component:

javascript
import { useParams } from 'react-router-dom';

const { id } = useParams();

---

## 🧠 Key Props in <span class="codeSnip">&lt;Link&gt;</span> Lists

When rendering multiple links in a loop:

javascript
{items.map((item) => (
  <Link key={item.id} to={`/item/${item.id}`}>
    {item.name}
  </Link>
))}

- Always provide a unique <span class="codeSnip">key</span> to each item in a list to help React track re-renders efficiently.

---

## Summary

- Use <span class="codeSnip">react-router-dom</span> to navigate without reloading
- Replace anchor tags with <span class="codeSnip">&lt;Link&gt;</span>
- Define routes with <span class="codeSnip">&lt;Route&gt;</span> inside <span class="codeSnip">&lt;BrowserRouter&gt;</span>
- Use <span class="codeSnip">useParams()</span> to access route variables
- Always assign a <span class="codeSnip">key</span> when rendering multiple <span class="codeSnip">&lt;Link&gt;</span> components
