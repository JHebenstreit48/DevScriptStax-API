# Event Handling

---

## React Events: The Basics

React uses camelCase syntax for event handlers, similar to standard DOM events — but not exactly the same. Instead of using <span class="codeSnip">onclick</span>, React uses <span class="codeSnip">onClick</span>.

Example:

```javascript
<button onClick={() => alert('You clicked me!')}>Click Me</button>
```

The function is passed as a value to the <span class="codeSnip">onClick</span> prop
You can define the handler inline or separately

---

## Handling State with Events

Event handlers are often used to update state — like incrementing a counter:

```javascript
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked {count} times
    </button>
  );
}
```

This ties user interaction directly to UI updates
React ensures the component re-renders when state changes

---

## Using &lt;Link&gt; Instead of &lt;a&gt;

React Router DOM uses &lt;Link&gt; for navigation instead of the native HTML anchor tag:

```javascript
<Link to="/about">Go to About</Link>
```

Why not use &lt;a href="/about"&gt;?

<div class="bullet1">

- React Router's <span class="codeSnip">&lt;Link&gt;</span> component enables client-side navigation without full page reloads

- It keeps your app fast and stateful

</div>

---

## Things to Remember

React normalizes event behavior across browsers
You can still access the synthetic event object in handlers
Always use function references — don’t invoke them directly (i.e., <span class="codeSnip">onClick={handleClick}</span>, not <span class="codeSnip">onClick={handleClick()}</span>)

---

## Summary

Use camelCase event names like <span class="codeSnip">onClick</span>, <span class="codeSnip">onChange</span>, etc.
Handlers trigger functions that often update state
Use React Router’s <span class="codeSnip">Link</span> component for navigation
Avoid full-page reloads with proper routing and event handling
