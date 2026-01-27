<br>

---
### What Are Template Literals?
---

<span class="emphasis">Template literals</span> are a modern way to create strings in JavaScript.
They use **backtick** characters instead of quotes and allow **embedded expressions**, **multiline strings**, and **string interpolation**.

<div class="fullWidthBullet">

🔹 Introduced in <span class="emphasis">ES6</span>
🔹 Useful for cleaner string formatting
🔹 Reduces the need for manual concatenation with <span class="codeSnip">+</span>

</div>

---

### Syntax

Use backticks <span class="codeSnip">``</span> to define a template literal.
Insert variables or expressions using <span class="codeSnip">${}</span>.

```js
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, Alice!"
```

---
### Multiline Strings
---

Template literals preserve line breaks automatically.

```js
let message = `This is line one.
This is line two.`;

console.log(message);

// Output:
// This is line one.
// This is line two.
```

---
### Embedding Expressions
---

You can insert any JavaScript expression inside <span class="codeSnip">${}</span>.

```js
let a = 5;
let b = 10;
let result = `The sum is ${a + b}`;
console.log(result); // "The sum is 15"
```

---
### Comparison to Traditional Concatenation
---

#### Traditional concatenation

```js
let oldWay = "Hello, " + name + "!";
```

#### Template literal

```js
let newWay = `Hello, ${name}!`;
```

Template literals are cleaner, easier to read, and more maintainable.

---
### Summary

Use backticks <span class="codeSnip">``</span> instead of quotes.
Insert variables or expressions with <span class="codeSnip">${}</span>.
Great for multiline output and dynamic content.
Preferred over string concatenation in modern JavaScript.

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/data-types/complex">← Back</a>
    <div class="xrefTitle">Complex Types & Type Checking</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/arrays/introduction">Next →</a>
    <div class="xrefTitle">Arrays</div>
  </div>
</div>