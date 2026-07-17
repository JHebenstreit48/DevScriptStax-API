# What Are Template Literals?

<hr class="dividerSection" />

<span class="emphasis">Template literals</span> are a modern way to create strings in JavaScript.

They use <span class="emphasis">backtick</span> characters instead of quotes and allow embedded expressions, multiline strings, and string interpolation.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Introduced in <span class="emphasis">ES6</span>.</li>
    <li>Useful for cleaner string formatting.</li>
    <li>Reduces the need for manual concatenation with <span class="codeSnip">+</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Syntax

<hr class="dividerSection" />

Use backticks to define a template literal.

Insert variables or expressions using <span class="codeSnip">${}</span>.

```js  
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, Alice!"
```

<hr class="dividerSection" />

## Multiline Strings

<hr class="dividerSection" />

Template literals preserve line breaks automatically.

```js  
let message = `This is line one.
This is line two.`;

console.log(message);

// Output:
// This is line one.
// This is line two.
```

<hr class="dividerSection" />

## Embedding Expressions

<hr class="dividerSection" />

You can insert any JavaScript expression inside <span class="codeSnip">${}</span>.

```js  
let a = 5;
let b = 10;
let result = `The sum is ${a + b}`;
console.log(result); // "The sum is 15"
```

<hr class="dividerSection" />

## Comparison to Traditional Concatenation

<hr class="dividerSection" />

Traditional concatenation:

```js  
let oldWay = "Hello, " + name + "!";
```

Template literal:

```js  
let newWay = `Hello, ${name}!`;
```

Template literals are cleaner, easier to read, and more maintainable.

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Use backticks instead of quotes.</li>
    <li>Insert variables or expressions with <span class="codeSnip">${}</span>.</li>
    <li>Great for multiline output and dynamic content.</li>
    <li>Preferred over string concatenation in modern JavaScript.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/data-types/complex">← Back</a>
    <div class="xrefTitle">JavaScript → Basics → Data Types → Complex Types & Type Checking</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/arrays/introduction">Next →</a>
    <div class="xrefTitle">Section: JavaScript → Basics → Arrays → Introduction</div>
  </div>
</div>