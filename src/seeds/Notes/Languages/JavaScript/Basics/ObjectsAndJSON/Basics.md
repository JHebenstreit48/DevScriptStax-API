# What Is an Object?

<hr class="dividerSection" />

You can think of an <span class="emphasis">object</span> as a <span class="secondEmphasis">container</span> that stores related pieces of data and logic. Objects hold information in the form of <span class="secondEmphasis">key-value pairs</span>, where each key is called a <span class="emphasis">property</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Objects allow you to organize multiple values inside a single structure.</li>
    <li>Values can be strings, numbers, booleans, arrays, other objects — or even functions.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Creating an Object

<hr class="dividerSection" />

```js
let user = {
  name: "Alice",
  age: 30,
  isMember: true
};

let product = new Object();
product.name = "Laptop";
product.price = 999;
```

Prefer object literal syntax (using curly braces) for readability and simplicity.

<hr class="dividerSection" />

## Object Properties

<hr class="dividerSection" />

The data stored inside the <span class="codeSnip">{}</span> of an object are called <span class="emphasis">properties</span>. Each property uses the format <span class="codeSnip">key: value</span> and must be separated by commas.

```js
let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 218
};
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A property's key must be a string or valid identifier.</li>
    <li>A property's value can be anything.</li>
    <li>Each property must be separated with a comma.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Quoting Keys

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Keys do <span class="emphasis">not</span> require quotes if they are simple words (letters only).</li>
    <li>Keys <span class="emphasis">with</span> spaces, symbols, or digits at the start do require quotes.</li>
  </ul>
</div>

```js
let obj1 = {
  name: "Alice",          // no quotes needed
  "full name": "Alice A", // quotes required
  "2cool": true           // quotes required
};
```

In JSON files, ALL keys must be in double quotes — no exceptions.

<hr class="dividerSection" />

## Nesting Objects

<hr class="dividerSection" />

Objects can contain other objects — this is known as <span class="emphasis">nesting</span>.

```js
let car = {
  brand: "Toyota",
  engine: {
    type: "V6",
    horsepower: 300
  }
};
```

You can access nested data using chained property access — for example <span class="codeSnip">car.engine.horsepower</span>.

<hr class="dividerSection" />

## Accessing Object Data

<hr class="dividerSection" />

Use either dot notation or bracket notation to access property values.

```js
let user = {
  name: "Alice",
  "favorite color": "blue"
};

console.log(user.name);              // "Alice"
console.log(user["favorite color"]); // "blue"
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A period (dot) is used to look inside an object.</li>
    <li>Brackets are required when the key includes spaces or is dynamic.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Objects act like containers that group related data.</li>
    <li>Properties live inside <span class="codeSnip">{}</span> and use a <span class="codeSnip">key: value</span> structure.</li>
    <li>Keys can be quoted or unquoted depending on their format.</li>
    <li>Properties must be comma-separated.</li>
    <li>Objects can be nested.</li>
    <li>Use dot or bracket notation to access values.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/arrays/advanced-techniques">← Back</a>
    <div class="xrefTitle">Section: Arrays - Advanced Array Techniques</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/objects-and-json/props-and-methods">Next →</a>
    <div class="xrefTitle">Objects & JSON - Properties and Methods</div>
  </div>
</div>