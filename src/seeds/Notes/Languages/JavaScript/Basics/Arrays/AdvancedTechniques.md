# Advanced Array Techniques

<hr class="dividerSection" />

## Overview

<hr class="dividerSection" />

This section covers advanced array methods that provide more control over transformation, searching, slicing, flattening, and aggregating data.

These methods are widely used in real-world JavaScript applications for functional and data-driven programming.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Ideal for intermediate-to-advanced use cases.</li>
    <li>Most return new arrays or derived values.</li>
    <li>Often paired with arrow functions or callbacks.</li>
  </ul>
</div>

<hr class="dividerSection" />

## reduce()

<hr class="dividerSection" />

Reduces an array to a single value by applying a reducer function.

```js  
let nums = [1, 2, 3, 4];
let total = nums.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 10
```

<hr class="dividerSection" />

## some() and every()

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">some()</span> returns true if any element passes the test.</li>
    <li><span class="codeSnip">every()</span> returns true if all elements pass the test.</li>
  </ul>
</div>

```js  
let nums = [1, 2, 3];
console.log(nums.some(n => n > 2));   // true
console.log(nums.every(n => n > 0));  // true
```

<hr class="dividerSection" />

## sort() and reverse()

<hr class="dividerSection" />

Sort elements alphabetically or numerically.

```js  
let names = ["Zoe", "Adam", "Eve"];
names.sort();
console.log(names); // ["Adam", "Eve", "Zoe"]
```

```js  
let numbers = [3, 1, 2];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3]
```

```js  
numbers.reverse();
console.log(numbers); // [3, 2, 1]
```

<hr class="dividerSection" />

## slice() and splice()

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">slice()</span> creates a new shallow copy.</li>
    <li><span class="codeSnip">splice()</span> modifies the original array.</li>
  </ul>
</div>

```js  
let fruits = ["apple", "banana", "cherry", "date"];
let sliced = fruits.slice(1, 3);
console.log(sliced); // ["banana", "cherry"]
```

```js  
fruits.splice(2, 1, "grape");
console.log(fruits); // ["apple", "banana", "grape", "date"]
```

<hr class="dividerSection" />

## indexOf(), lastIndexOf(), and findIndex()

<hr class="dividerSection" />

Search for values or conditions.

```js  
let letters = ["a", "b", "c", "b"];
console.log(letters.indexOf("b"));         // 1
console.log(letters.lastIndexOf("b"));     // 3
console.log(letters.findIndex(l => l === "c")); // 2
```

<hr class="dividerSection" />

## concat()

<hr class="dividerSection" />

Merges arrays into a new array.

```js  
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]
```

<hr class="dividerSection" />

## flat() and flatMap()

<hr class="dividerSection" />

Flatten nested arrays and apply transformations.

```js  
let nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat());       // [1, 2, 3, 4, [5]]
console.log(nested.flat(2));      // [1, 2, 3, 4, 5]
```

```js  
let nums = [1, 2, 3];
console.log(nums.flatMap(n => [n, n * 2])); // [1, 2, 2, 4, 3, 6]
```

<hr class="dividerSection" />

## entries(), keys(), and values()

<hr class="dividerSection" />

Useful for iterating with index-value pairs or structure access.

```js  
let fruits = ["apple", "banana", "cherry"];

for (let [index, value] of fruits.entries()) {
  console.log(index, value);
}

for (let index of fruits.keys()) {
  console.log(index);
}

for (let value of fruits.values()) {
  console.log(value);
}
```

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">reduce()</span> is great for totals, transformations, or grouped results.</li>
    <li><span class="codeSnip">sort()</span> and <span class="codeSnip">reverse()</span> help organize data.</li>
    <li><span class="codeSnip">slice()</span> copies arrays, <span class="codeSnip">splice()</span> changes them.</li>
    <li><span class="codeSnip">flat()</span> and <span class="codeSnip">flatMap()</span> handle nested structures.</li>
    <li>Use <span class="codeSnip">findIndex()</span> and <span class="codeSnip">entries()</span> for custom searches and iteration.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/arrays/methods">← Back</a>
    <div class="xrefTitle">JavaScript → Basics → Arrays → Common Array Methods</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/objects-and-json/basics">Next →</a>
    <div class="xrefTitle">Section: JavaScript → Basics → Objects & JSON → Objects Basics</div>
  </div>
</div>