# State

---

## What Is State?

State is a built-in feature in React that allows components to store dynamic data that can change over time. When the state changes, the component re-renders to reflect the new data.

- Think of state as the “memory” of a component.  
- It is local by default and scoped to the component in which it's defined.

---

## What Are Hooks?

Hooks are functions that let you "hook into" React features from functional components. Before hooks, most dynamic behavior relied on class components. Now, hooks allow functional components to manage state, lifecycle, and side effects.

- Hooks work only in functional components (not classes)  
- They follow strict rules to ensure consistent behavior  
- They allow reusable logic via custom hooks

---

## Core Rules of Hooks

- Only call hooks at the top level — never inside loops, conditions, or nested functions.  
- Only call hooks from React functions — either your component or a custom hook.

These rules ensure consistent state handling and predictable behavior.

---

## Common Built-in Hooks

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Hook</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">useState</span></td>
      <td class="tableCell">Adds local component state</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">useEffect</span></td>
      <td class="tableCell">Runs side effects after rendering</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">useContext</span></td>
      <td class="tableCell">Accesses context values</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">useReducer</span></td>
      <td class="tableCell">Manages complex state logic</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">useRef</span></td>
      <td class="tableCell">References DOM elements or persistent values</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">useMemo</span></td>
      <td class="tableCell">Optimizes expensive calculations</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">useCallback</span></td>
      <td class="tableCell">Memoizes callback functions</td>
    </tr>
  </tbody>
</table>

---

## Managing State with useState

<span class="codeSnip">useState</span> is a React Hook that adds local state to functional components.

### Example: Basic Counter

```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

- <span class="codeSnip">count</span> is the current state value.  
- <span class="codeSnip">setCount</span> is the function that updates <span class="codeSnip">count</span>.  
- <span class="codeSnip">useState(0)</span> sets the initial value to <span class="codeSnip">0</span>.

---

## When to Use State

Use state when a component needs to:

- Respond to user input  
- Track dynamic values (like counters, forms, toggles)  
- Handle component-specific behavior that changes over time  

---

## useReducer for Complex State

<span class="codeSnip">useReducer</span> is an alternative to <span class="codeSnip">useState</span> for managing more complex state logic.

- Ideal when the next state depends on the previous one  
- Works well when handling multiple related values  

### Example: Basic useReducer Skeleton

```javascript
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, initialState);
```

---

## Global State with Context

To share state across many components without prop drilling, use the Context API:

- Combine <span class="codeSnip">useContext</span> with <span class="codeSnip">useState</span> or <span class="codeSnip">useReducer</span>  
- Common use cases: authentication, themes, user preferences  

---

## 🧠 Hook Naming Convention

React relies on naming to detect hooks. All custom hook functions must start with <span class="codeSnip">use</span> — like <span class="codeSnip">useAuth</span> or <span class="codeSnip">useFormData</span>.

If you don't follow this naming pattern, React can't verify that the rules of hooks are being followed.

---

## Summary

- State stores dynamic values inside components  
- <span class="codeSnip">useState</span> handles local, simple values  
- <span class="codeSnip">useReducer</span> is better for complex logic  
- <span class="codeSnip">useContext</span> enables shared/global state  
- Hooks enable reactivity in functional components  
- Changing state causes re-rendering  
