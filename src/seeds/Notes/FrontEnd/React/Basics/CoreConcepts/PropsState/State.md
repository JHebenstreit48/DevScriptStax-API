# State in React

<hr class="dividerSection" />

## What Is State?

<hr class="dividerSection" />

<span class="emphasis">State</span> is data that can change over time and affects what is rendered on screen.

When state changes, React automatically re-renders the component to reflect the new data.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>State is <span class="emphasis">local</span> to the component that owns it.</li>
    <li>When state updates, the component <span class="emphasis">re-renders</span> with the new value.</li>
    <li>State is different from props. Props are passed in and state is managed internally.</li>
  </ul>
</div>

<hr class="dividerSection" />

## The useState Hook

<hr class="dividerSection" />

<span class="codeSnip">useState</span> is a React Hook that lets you add state to a functional component.

It returns an array with two elements: the current state value and a function to update it.

```js
import { useState } from 'react';

const [count, setCount] = useState(0);
```

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Part</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">count</span></td>
      <td class="tableCell">The current state value</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">setCount</span></td>
      <td class="tableCell">The function used to update the state</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">0</span></td>
      <td class="tableCell">The initial value of the state</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## How useState Works

<hr class="dividerSection" />

When you call the state updating function, React schedules a re-render of the component with the new state value.

<hr class="dividerExample" />

#### Example — Counter

```js
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

<hr class="dividerSection" />

## Updating State Based on Previous State

<hr class="dividerSection" />

When your new state depends on the previous state, you should pass a <span class="emphasis">function</span> to the state updating function rather than a value directly.

React will automatically call that function and pass it the current existing state as an argument.

<hr class="dividerExample" />

#### Example — Functional State Update

```js
const [items, setItems] = useState([]);

function addItemHandler() {
  setItems((currentItems) => [
    ...currentItems,
    newItem,
  ]);
}
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The function passed to <span class="codeSnip">setItems</span> is automatically called by React.</li>
    <li>React passes the <span class="emphasis">current state</span> as the argument.</li>
    <li>The spread operator <span class="codeSnip">...</span> copies all existing array items into the new array.</li>
    <li>The new item is then appended at the end.</li>
    <li>This approach is safer than reading the state variable directly because React may batch state updates. The functional form guarantees you always receive the most up-to-date state.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Rendering Lists from State

<hr class="dividerSection" />

You can use the <span class="codeSnip">.map()</span> method to dynamically render a list of items from a state array.

<hr class="dividerExample" />

#### Example — Rendering a List

```js
const [items, setItems] = useState(['Learn React', 'Build Projects']);

return (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">.map()</span> transforms each item in the array into a JSX element.</li>
    <li>Each rendered element must have a <span class="codeSnip">key</span> prop that uniquely identifies it.</li>
    <li>The result is an array of JSX elements that React renders as a list.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### The key Prop

<hr class="dividerSubsection1" />

When rendering a list using <span class="codeSnip">.map()</span>, every item must receive a <span class="codeSnip">key</span> prop that <span class="emphasis">uniquely identifies</span> that item.

Without a <span class="codeSnip">key</span> prop, React will show a warning: <span class="codeSnip">Each child in a list should have a unique key prop.</span>

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The <span class="codeSnip">key</span> prop helps React efficiently update the list under the hood.</li>
    <li>The value passed to <span class="codeSnip">key</span> must be <span class="emphasis">unique</span> among the items in the list.</li>
    <li>Using the item value itself as a key works for simple cases but is not perfectly unique if duplicates are possible.</li>
    <li>In real apps with database data, use a unique ID rather than the item value as the key.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Note — key Prop vs Key Value Pairs

<hr class="dividerSubsection1" />

The <span class="codeSnip">key</span> prop in React lists and <span class="emphasis">key value pairs</span> in JavaScript objects and JSON share the same word but serve completely different purposes.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A <span class="emphasis">key value pair</span> in an object or JSON is a property name mapped to a value. For example: <span class="codeSnip">{ name: "Alice" }</span>. You access and use these in your code.</li>
    <li>The <span class="codeSnip">key</span> <span class="emphasis">prop</span> in a React list is a hint to React's rendering engine to help it track which item is which when the list changes. You do not access it in your code. React uses it internally.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Common State Patterns

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Pattern</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Toggle</span></td>
      <td class="tableCell">Switch a boolean value between true and false</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Counter</span></td>
      <td class="tableCell">Increment or decrement a numeric value</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">Form Input</span></td>
      <td class="tableCell">Track the value of an input field as the user types</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="emphasis">List Management</span></td>
      <td class="tableCell">Add, remove, or update items in an array stored in state</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Best Practices

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Use the <span class="emphasis">functional update form</span> when new state depends on previous state.</li>
    <li>Never mutate state directly. Always create a new value using spread or other immutable patterns.</li>
    <li>Keep state as minimal as possible. Only store what is necessary.</li>
    <li>Lift state up to a parent component when multiple children need to share it.</li>
    <li>Always add a <span class="codeSnip">key</span> prop to elements rendered inside <span class="codeSnip">.map()</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Concept</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">useState</span></td>
      <td class="tableCell">Adds local state to a functional component</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Setter function</td>
      <td class="tableCell">Triggers a re-render with the new value when called</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Spread operator</td>
      <td class="tableCell">Updates array state immutably by copying existing items</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Functional update form</td>
      <td class="tableCell">Pass a function to the setter when new state depends on previous state</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">.map()</span></td>
      <td class="tableCell">Renders arrays of state as lists of JSX elements</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">key</span> prop</td>
      <td class="tableCell">Uniquely identifies each item in a rendered list so React can update it efficiently</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/react/basics/core/props-and-state/props">← Back</a>
    <div class="xrefTitle">React → Core Concepts → Props & State → Props</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/react/basics/core/forms/controlled">Next →</a>
    <div class="xrefTitle">Section: React → Core Concepts → Forms → Controlled vs Uncontrolled</div>
  </div>
</div>