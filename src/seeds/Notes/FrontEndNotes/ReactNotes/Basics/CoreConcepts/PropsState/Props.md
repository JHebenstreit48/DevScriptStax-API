# Props

---

## What Are Props?

Props are short for “properties”, allow a component to receive data from its parent. They make components customizable and dynamic by enabling different data to be passed at render time.

<div class="bullet2">

- Props are read-only. A child component cannot modify the prop values it receives.
- You can pass strings, numbers, arrays, objects, functions even JSX as props.

</div>

---

## Example: Customizing a Component with Props

Here’s a functional component named <span class="codeSnip">Pet</span> that takes props and displays them in a list item.

### JSX Example

```javascript
function Pet(props) {
  return (
    <li>
      {props.name} is a {props.species} and is {props.age} years old.
    </li>
  );
}
```

---

### How It Works

<div class="bullet2">

- <span class="codeSnip">props.name</span>: Displays the pet’s name.
- <span class="codeSnip">props.species</span>: Indicates the type of animal.
- <span class="codeSnip">props.age</span>: Displays the pet’s age.

</div>


This structure makes the <span class="codeSnip">Pet</span> component reusable. You can render it multiple times with different props:

```javascript
<Pet name="Buddy" species="dog" age={4} />
<Pet name="Mittens" species="cat" age={2} />
```

---

## Best Practices for Props

- Use <span class="codeSnip">propTypes</span> or TypeScript interfaces to validate expected props (if applicable).
- Provide default values with <span class="codeSnip">defaultProps</span> or default parameters.
- Avoid unnecessary prop nesting — pass only what the child component actually needs.
- Destructure props inside the component for cleaner code:

```javascript
function Pet({ name, species, age }) {
  return <li>{name} is a {species} and is {age} years old.</li>;
}
```

---

## Summary

- Props are passed from parent to child components
- They are immutable in the receiving component
- Make components reusable and configurable
- Props can be strings, numbers, arrays, objects, or functions
