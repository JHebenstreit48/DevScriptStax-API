# Forms & Inputs

---

## Handling Form Inputs in React

React uses a <span class="emphasis">controlled component</span> pattern to manage form elements like <span class="codeSnip">&lt;input&gt;</span>, <span class="codeSnip">&lt;textarea&gt;</span>, and <span class="codeSnip">&lt;select&gt;</span>. This means the form data is handled by React state.

---

## Controlled Components

A controlled component is an input element whose value is controlled by React state.

### Example: Text Input

```javascript  
import { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');

  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  );
}
```

- <span class="codeSnip">value</span> is bound to React state.  
- <span class="codeSnip">onChange</span> updates the state when the user types.

---

## Why Use Controlled Components?

- Easier to validate input data  
- Lets you disable/enable buttons based on input  
- Enables dynamic behavior (e.g. live character count)

---

## Handling Checkboxes

Checkboxes use a boolean value tied to state.

```javascript  
const [isChecked, setIsChecked] = useState(false);

<input
  type="checkbox"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>
```

---

## Handling Select Menus

Select elements follow the same pattern:

```javascript  
const [fruit, setFruit] = useState('apple');

<select value={fruit} onChange={(e) => setFruit(e.target.value)}>
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
</select>
```

---

## Form Submission

To handle form submission:

```javascript  
function handleSubmit(e) {
  e.preventDefault();
  console.log('Form submitted!');
}

<form onSubmit={handleSubmit}>
  ...
</form>
```

- Prevents default page refresh behavior.  
- Useful for sending data to an API or validating before submission.

---

---

## Full Form Example with Multiple Inputs

This example demonstrates handling multiple input types within a single form:

```jsx
function FormExample() {
  const [text, setText] = useState("")
  const [bio, setBio] = useState("")
  const [color, setColor] = useState("#00bfff")
  const [volume, setVolume] = useState(50)
  const [agreed, setAgreed] = useState(false)

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      alert("Form submitted!")
    }}>
      <label>
        Text:
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>

      <br /><br />

      <label>
        Bio:
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      </label>

      <br /><br />

      <label>
        Favorite Color:
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>

      <br /><br />

      <label>
        Volume:
        <input type="range" min={0} max={100} value={volume} onChange={(e) => setVolume(Number(e.target.value))} />
        {volume}%
      </label>

      <br /><br />

      <label>
        Agree to Terms:
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
      </label>

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  )
}
```

## Best Practices

- Always use <span class="codeSnip">value</span> + <span class="codeSnip">onChange</span> for inputs.  
- Use a <span class="codeSnip">submit</span> handler instead of inline <span class="codeSnip">onClick</span> for buttons.  
- Consider using libraries like Formik or React Hook Form for complex forms.

---

## Summary

- React forms are usually **controlled** using state  
- Bind inputs with <span class="codeSnip">value</span> and update with <span class="codeSnip">onChange</span>  
- Handle different input types: text, checkbox, select  
- Prevent default form submission with <span class="codeSnip">e.preventDefault()</span>
