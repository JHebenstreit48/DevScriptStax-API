# Event Handling

---

## React Events: The Basics

React uses camelCase syntax for event handlers, similar to standard DOM events — but not exactly the same. Instead of using <span class="codeSnip">onclick</span>, React uses <span class="codeSnip">onClick</span>.

Example:

```jsx
<button onClick={() => alert('You clicked me!')}>
  Click Me
</button>
```

The function is passed as a value to the <span class="codeSnip">onClick</span> prop
You can define the handler inline or separately

---

## Handling State with Events

Event handlers are often used to update state — like incrementing a counter:

```jsx
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

## More Than onClick: Using onChange and Friends

Event handling in React isn’t just about clicks. You can respond to a wide variety of input-driven interactions using events like:

<div class="bullet1">

- <span class="codeSnip">onChange</span> — Fires when the value of an input, select, or textarea changes
- <span class="codeSnip">onInput</span> — Triggers on every input keystroke (more immediate than <span class="codeSnip">onChange</span>)
- <span class="codeSnip">onSubmit</span> — Used for form submissions
- <span class="codeSnip">onBlur</span> — When an input loses focus
- <span class="codeSnip">onFocus</span> — When an input gains focus

</div>

React wraps these in a <span class="codeSnip">SyntheticEvent</span> to normalize behavior across browsers.

---

### Example: Event Handling Outside Forms

```jsx
function WidgetPanel() {
  const [color, setColor] = useState("#ff00ff")
  const [volume, setVolume] = useState(75)
  const [text, setText] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h3>Interactive Widget Panel</h3>

      <label>
        Pick a Color:
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </label>

      <br /><br />

      <label>
        Volume:
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
        />
        {volume}%
      </label>

      <br /><br />

      <label>
        Type Something:
        <input
          type="text"
          value={text}
          onInput={(e) => setText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            border: "2px solid",
            borderColor: isFocused ? "dodgerblue" : "gray"
          }}
        />
      </label>

      <br /><br />

      <p style={{ color }}>Preview: {text || "Nothing typed yet"}</p>
    </div>
  )
}
```

---

## Using &lt;Link&gt; Instead of &lt;a&gt;

React Router DOM uses &lt;Link&gt; for navigation instead of the native HTML anchor tag:

```jsx
<Link to="/about">
Go to About
</Link>
```

Why not use &lt;a href="/about"&gt;?

<div class="bullet1">

- React Router's <span class="codeSnip">&lt;Link&gt;</span> component enables client-side navigation without full page reloads

- It keeps your app fast and stateful

</div>

---

## Things to Remember

<div class="bullet1">

- React normalizes event behavior across browsers
- You can still access the synthetic event object in handlers
- Always use function references — don’t invoke them directly
  - i.e.,

  ✅
  ```jsx
  onClick={handleClick}
  ```

  NOT

  <br>

  ❌
  ```jsx
  onClick={handleClick()}
  ```

</div>

---

## Summary

Use camelCase event names like <span class="codeSnip">onClick</span>, <span class="codeSnip">onChange</span>, etc.
Handlers trigger functions that often update state
Use React Router’s <span class="codeSnip">&lt;Link&gt;</span> component for navigation
Avoid full-page reloads with proper routing and event handling

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/react/basics/core/jsx">← Back</a>
    <div class="xrefTitle">JSX</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/react/basics/core/props-and-state/props">Next →</a>
    <div class="xrefTitle">Props/State</div>
  </div>
</div>