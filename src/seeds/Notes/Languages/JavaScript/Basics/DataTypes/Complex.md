# What Are Complex (Non-Primitive) Types?

<hr class="dividerSection" />

Complex types in JavaScript are built using the <span class="emphasis">object</span> data type.

These types can store collections of values and are always passed by reference.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Objects and functions are reference types.</li>
    <li>Arrays are technically specialized objects.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Main Complex Types

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Object</span>, key-value pair storage.</li>
    <li><span class="emphasis">Array</span>, ordered list of values.</li>
    <li><span class="emphasis">Function</span>, reusable block of logic with parameters and return values.</li>
    <li><span class="emphasis">Date</span>, a built-in object representing a specific point in time.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Examples of Complex Types

<hr class="dividerSection" />

```js  
// Object
let user = {
  name: "Alice",
  age: 30
};

// Array
let colors = ["red", "green", "blue"];

// Function
function greet(name) {
  return "Hello, " + name;
}
```

<hr class="dividerSection" />

## Why They Are Called "Reference Types"

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Complex values are <span class="emphasis">stored in memory</span> and referenced by their address.</li>
    <li>If you assign one object to another variable, both variables point to the <span class="emphasis">same object</span>.</li>
  </ul>
</div>

```js  
let original = { value: 10 };
let copy = original;
copy.value = 99;
console.log(original.value); // 99, because both reference the same object
```

<hr class="dividerSection" />

## How to Check Data Type

<hr class="dividerSection" />

You can use the <span class="codeSnip">typeof</span> operator, but it returns <span class="codeSnip">"object"</span> for arrays and <span class="codeSnip">null</span>, so use safer alternatives for more precise checks.

```js  
typeof user         // "object"
typeof colors       // "object"
typeof greet        // "function"
typeof null         // "object", a historical bug in JavaScript
```

<hr class="dividerSection" />

## Better Type Checks

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Check if a value is an array using <span class="codeSnip">Array.isArray()</span>.</li>
    <li>Check if a value is <span class="codeSnip">null</span> using strict equality.</li>
    <li>Check if a value is a plain object by combining <span class="codeSnip">typeof</span>, <span class="codeSnip">Array.isArray()</span>, and a <span class="codeSnip">null</span> check together.</li>
  </ul>
</div>

```js  
Array.isArray(colors);       // true
Array.isArray(user);         // false

user === null;               // false
let value = null;
value === null;               // true

typeof obj === "object" && !Array.isArray(obj) && obj !== null;
```

<hr class="dividerSection" />

## The Date Object

<hr class="dividerSection" />

<span class="codeSnip">Date</span> is a built-in JavaScript object used to work with dates and times.

```js  
let now = new Date();
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Calling <span class="codeSnip">new Date()</span> with no arguments creates a <span class="codeSnip">Date</span> object set to the current date and time.</li>
    <li><span class="codeSnip">Date</span> objects have methods for extracting individual parts of a date, such as the year, month, or day.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Practical Example: Keeping a Year Dynamic

<hr class="dividerSection" />

A common use for <span class="codeSnip">Date</span> is keeping a displayed year current without manually updating it.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">getFullYear()</span> returns the four-digit year from a <span class="codeSnip">Date</span> object.</li>
    <li>A hardcoded year in a template, such as one shown in a page footer, will silently become outdated over time unless it is generated dynamically instead.</li>
  </ul>
</div>

```js  
new Date().getFullYear()
```

Replacing a hardcoded year with this expression means the value always reflects the actual current year, with no manual updates needed.

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/frameworks/express/basics/views-static/ejs" target="_blank" rel="noopener noreferrer">ExpressJS → Basics → Views & Static → EJS</a>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Complex types are reference-based and include arrays, objects, and functions.</li>
    <li>Use <span class="codeSnip">Array.isArray()</span> to distinguish arrays.</li>
    <li>Use strict equality for checking <span class="codeSnip">null</span>.</li>
    <li>Functions are a type of object but have callable behavior.</li>
    <li><span class="codeSnip">Date</span> is a built-in complex type useful for dynamic values like a current year.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/data-types/primitive">← Back</a>
    <div class="xrefTitle">JavaScript → Basics → Data Types → Primitive Data Types</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/data-types/template-literals">Next →</a>
    <div class="xrefTitle">JavaScript → Basics → Data Types → Template Literals</div>
  </div>
</div>