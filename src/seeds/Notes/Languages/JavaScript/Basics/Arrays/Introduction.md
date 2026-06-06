# What Is an Array?

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Arrays</span> in JavaScript are ordered collections that can store multiple values in a single variable.</li>
    <li>Each item in an array is known as an <span class="secondEmphasis">element</span>, and elements are accessed by their <span class="secondEmphasis">index</span>, starting at <span class="codeSnip">0</span>.</li>
    <li>Arrays are useful when you want to store lists of data — like names, numbers, or objects.</li>
    <li>Arrays in JavaScript are a type of <span class="emphasis">object</span> and can hold elements of different types.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Array Characteristics

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>JavaScript arrays are dynamic — they can grow or shrink during runtime.</li>
    <li>Arrays are zero-indexed — the first element is at position <span class="codeSnip">0</span>.</li>
    <li>They can contain elements of any type, including other arrays and objects.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Creating an Array

<hr class="dividerSection" />

```js
let empty = [];
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3];
let mixed = [true, "hello", 42, null];
let fruits = new Array("apple", "banana", "cherry");
```

Prefer array literals using <span class="codeSnip">[]</span> syntax for clarity and reliability.

<hr class="dividerSection" />

## Accessing Elements

<hr class="dividerSection" />

Use bracket notation with the index to access elements:

```js
let animals = ["dog", "cat", "bird"];
console.log(animals[0]); // "dog"
console.log(animals[2]); // "bird"
```

You can also modify values at a specific index:

```js
animals[1] = "rabbit";
console.log(animals); // ["dog", "rabbit", "bird"]
```

<hr class="dividerSection" />

## Arrays of Objects

<hr class="dividerSection" />

Arrays can store complex elements like objects:

```js
let myPets = [
  { name: "Meowsalot", species: "cat" },
  { name: "Barksalot", species: "dog" }
];
```

Each element in the array is itself an object with its own properties.

<hr class="dividerSubsection1" />

### Accessing Object Properties in an Array

<hr class="dividerSubsection1" />

You can access specific object properties by combining array index and dot notation:

```js
console.log(myPets[1].species); // "dog"
```

This logs the <span class="secondEmphasis">species</span> property of the second object in the array.

<hr class="dividerSection" />

## Array Length

<hr class="dividerSection" />

The <span class="codeSnip">length</span> property shows how many elements the array contains:

```js
let nums = [10, 20, 30];
console.log(nums.length); // 3
```

You can also use it to truncate an array:

```js
nums.length = 1;
console.log(nums); // [10]
```

<hr class="dividerSection" />

## Arrays with Holes

<hr class="dividerSection" />

JavaScript allows sparse arrays:

```js
let sparse = [];
sparse[3] = "hi";
console.log(sparse); // [empty × 3, "hi"]
console.log(sparse.length); // 4
```

Sparse arrays are not recommended for most use cases — use dense arrays unless sparse data is intentional.

<hr class="dividerSection" />

## typeof and Array Check

<hr class="dividerSection" />

The <span class="codeSnip">typeof</span> operator returns <span class="codeSnip">"object"</span> for arrays, so use <span class="codeSnip">Array.isArray()</span> to reliably check if a value is an array:

```js
let list = ["a", "b"];
console.log(typeof list);         // "object"
console.log(Array.isArray(list)); // true
```

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Arrays are flexible, ordered collections indexed from zero.</li>
    <li>You can store any type of data — even other arrays or objects.</li>
    <li>Use bracket notation to access or change elements.</li>
    <li>Use <span class="codeSnip">Array.isArray()</span> to reliably test if a value is an array.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/data-types/template-literals">← Back</a>
    <div class="xrefTitle">JavaScript → Data Types → Template Literals</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/arrays/methods">Next →</a>
    <div class="xrefTitle">JavaScript → Arrays → Common Array Methods</div>
  </div>
</div>