# JSX & Rendering

---

## What Is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like elements directly inside JavaScript.

- Makes your UI structure more readable  
- Transpiles down to <span class="codeSnip">React.createElement()</span> calls  
- Can include JavaScript expressions inside <span class="codeSnip">{ }</span>

### Example

```javascript
function HelloWorld() {
  return <h1>Hello, World!</h1>;
}
```

---

## Class Names in React

React uses <span class="codeSnip">className</span> instead of <span class="codeSnip">class</span> to apply CSS classes.

Why? Because <span class="codeSnip">class</span> is a reserved keyword in JavaScript.

### Example

```javascript
<div className="container">
  <p>This uses className</p>
</div>
```

---

## Rendering Arrays

You can dynamically render a list of elements using the <span class="codeSnip">.map()</span> method.

### Example

```javascript
const items = ['Apples', 'Bananas', 'Oranges'];

function FruitList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

- <span class="codeSnip">key</span> helps React identify which items changed, added, or removed  
- Keys should be stable and unique per element in the list

---

## Key Prop: Why It Matters

When rendering lists, React needs a way to track each item uniquely. The <span class="codeSnip">key</span> prop helps with performance by minimizing DOM changes during re-renders.

Use a unique identifier if possible (like an ID), but if unavailable, you can use the index as a fallback.

<span class="codeSnip">&lt;li key={item.id}&gt;</span> ✅  
<span class="codeSnip">&lt;li key={index}&gt;</span> ⚠️ (only use if the list is static and will not be reordered)

---

## Lifecycle Behavior

Lifecycle methods describe the different phases a component goes through during its life in the DOM. These phases include mounting, updating, and unmounting. While originally associated with class components, functional components can mimic them using Hooks.

---

### Class Component Lifecycle (Reference)

Class components have special methods triggered during specific lifecycle stages:

- <span class="codeSnip">constructor()</span> – Setup logic and initial state.  
- <span class="codeSnip">componentDidMount()</span> – Runs after the first render.  
- <span class="codeSnip">componentDidUpdate()</span> – Runs after any update.  
- <span class="codeSnip">componentWillUnmount()</span> – Runs before removal from the DOM.

### Example

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    console.log("Clock updated");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return <div>{this.state.time.toLocaleTimeString()}</div>;
  }
}
```

---

### Functional Lifecycle with useEffect

Functional components use <span class="codeSnip">useEffect</span> to simulate lifecycle behaviors.

#### Mounting Only (componentDidMount)

```javascript
useEffect(() => {
  console.log("Mounted once");
}, []);
```

- The empty array means this effect runs only on the first render.

---

#### Updating (componentDidUpdate)

```javascript
useEffect(() => {
  console.log("Updated due to changes in value");
}, [value]);
```

- Runs on initial mount and again whenever <span class="codeSnip">value</span> changes.

---

#### Unmounting (componentWillUnmount)

```javascript
useEffect(() => {
  const id = setInterval(() => console.log("Tick"), 1000);

  return () => {
    clearInterval(id);
    console.log("Cleaned up on unmount");
  };
}, []);
```

- The return function inside <span class="codeSnip">useEffect</span> handles cleanup.

---

### All-in-One Example

```javascript
useEffect(() => {
  console.log("Effect runs at mount or dependency change");

  return () => {
    console.log("Cleanup before re-run or unmount");
  };
}, [dependency]);
```

- Perfect for setting up and cleaning up subscriptions, timers, etc.  
- Runs once on mount and again whenever <span class="codeSnip">dependency</span> changes.

---

## Summary

- JSX blends HTML with JavaScript  
- Use <span class="codeSnip">className</span> instead of <span class="codeSnip">class</span>  
- Use <span class="codeSnip">.map()</span> to render lists dynamically  
- Always assign a <span class="codeSnip">key</span> to repeated elements  
- Lifecycle behavior can be achieved in both class and function components  
