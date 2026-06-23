# Common Array Methods

<hr class="dividerSection" />

## Overview

<hr class="dividerSection" />

Arrays in JavaScript come with many built-in methods that help you manipulate, search, and iterate over elements.

This file focuses on practical, commonly used array methods you'll encounter early and often.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>These methods help with adding, removing, searching, and transforming array contents.</li>
    <li>Most of them are beginner-friendly and mutate or return new arrays depending on usage.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Mutating vs Non-Mutating Methods

<hr class="dividerSection" />

Some array methods <span class="emphasis">modify</span> the <span class="emphasis">original</span> array <span class="emphasis">(mutate)</span>, while others <span class="emphasis">return</span> a <span class="emphasis">new</span> array without changing the original.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Mutates Original?</th>
      <th class="tableCellHeader">Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Yes</td>
      <td class="tableCell"><span class="codeSnip">push()</span>, <span class="codeSnip">pop()</span>, <span class="codeSnip">shift()</span>, <span class="codeSnip">unshift()</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">No (Returns New Array)</td>
      <td class="tableCell"><span class="codeSnip">map()</span>, <span class="codeSnip">filter()</span>, <span class="codeSnip">find()</span></td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## push()

<hr class="dividerSection" />

Adds one or more elements to the end of the array.

```js
let colors = ["red", "green"];
colors.push("blue");
console.log(colors); // ["red", "green", "blue"]
```

<hr class="dividerSection" />

## pop()

<hr class="dividerSection" />

Removes the last element from the array and returns it.

```js
let numbers = [1, 2, 3];
let last = numbers.pop();
console.log(last); // 3
console.log(numbers); // [1, 2]
```

<hr class="dividerSection" />

## shift() and unshift()

<hr class="dividerSection" />

<span class="codeSnip">shift()</span> removes the first element.

<span class="codeSnip">unshift()</span> adds one or more elements to the beginning.

```js
let names = ["Alice", "Bob"];
names.shift(); // Removes "Alice"
names.unshift("Zara"); // Adds "Zara" to the start
console.log(names); // ["Zara", "Bob"]
```

<hr class="dividerSection" />

## splice()

<hr class="dividerSection" />

The <span class="codeSnip">splice()</span> method removes or replaces items in an array.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>First argument: the index to start from.</li>
    <li>Second argument: how many items to remove.</li>
  </ul>
</div>

```js
let myWords = ["red", "orange", "yellow"];
myWords.splice(1, 1);
console.log(myWords); // ["red", "yellow"]
```

This removes "orange". <span class="codeSnip">splice()</span> mutates the original array.

<hr class="dividerSection" />

## includes()

<hr class="dividerSection" />

Checks if the array contains a specified value and returns a boolean.

```js
let pets = ["dog", "cat", "rabbit"];
console.log(pets.includes("cat")); // true
console.log(pets.includes("bird")); // false
```

<hr class="dividerSection" />

## Functional Array Methods

<hr class="dividerSection" />

These methods take a <span class="emphasis">callback function</span> and apply it to each element.

<hr class="dividerSection" />

## forEach()

<hr class="dividerSection" />

Runs a function on every element of the array.

Does not return a new array.

```js
let nums = [1, 2, 3];
nums.forEach((n) => {
  console.log(n * 2); // 2, 4, 6
});
```

<hr class="dividerSection" />

## map()

<hr class="dividerSection" />

Creates a new array by applying a function to each element.

The function is called once per array item.

Whatever the function returns is added to the new array.

```js
let nums = [1, 2, 3];
let doubled = nums.map((n) => n * 2);
console.log(doubled); // [2, 4, 6]
```

<hr class="dividerSection" />

## filter()

<hr class="dividerSection" />

Returns a new array with elements that pass a test condition.

The callback function must return <span class="emphasis">true</span> (or any truthy value) for an item to be included in the new array.

```js
let nums = [1, 2, 3, 4, 5];
let even = nums.filter((n) => n % 2 === 0);
console.log(even); // [2, 4]
```

You can also use a named function for more readable logic:

```js
function onlyDogs(pet) {
  return pet.species === "dog";
}

let pets = [
  { name: "Rex", species: "dog" },
  { name: "Whiskers", species: "cat" },
];

let dogs = pets.filter(onlyDogs);
// [{ name: "Rex", species: "dog" }]
```

<hr class="dividerSection" />

## join()

<hr class="dividerSection" />

The <span class="codeSnip">join()</span> method converts an array into a string using a custom separator.

```js
let items = ["Hello", "World"];
items.join(" "); // "Hello World"
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The argument defines what goes between items.</li>
    <li>An empty string <span class="codeSnip">""</span> removes commas entirely — items are joined with nothing between them.</li>
    <li>This is especially useful when joining HTML strings together for rendering, where unwanted commas would break the markup.</li>
  </ul>
</div>

<hr class="dividerSection" />

## find()

<hr class="dividerSection" />

Returns the first element that matches a condition.

```js
let people = ["Adam", "Eve", "Zoe"];
let match = people.find((name) => name.startsWith("Z"));
console.log(match); // "Zoe"
```

<hr class="dividerSection" />

## Summary Table

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Method</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">push()</span></td>
      <td class="tableCell">Adds item(s) to the end — returns new length of array</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">pop()</span></td>
      <td class="tableCell">Removes last item — returns removed item</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">shift()</span></td>
      <td class="tableCell">Removes first item — returns removed item</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">unshift()</span></td>
      <td class="tableCell">Adds item(s) to the beginning — returns new length of array</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">splice()</span></td>
      <td class="tableCell">Removes or replaces items by index — mutates the array</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">includes()</span></td>
      <td class="tableCell">Checks if value exists — returns boolean</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">forEach()</span></td>
      <td class="tableCell">Runs function on each item — returns undefined</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">map()</span></td>
      <td class="tableCell">Transforms each item — returns new array</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">filter()</span></td>
      <td class="tableCell">Filters items based on test — returns new array</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">find()</span></td>
      <td class="tableCell">Finds first match — returns single item or undefined</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">join()</span></td>
      <td class="tableCell">Converts array into a string with a separator — returns string</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/arrays/introduction">← Back</a>
    <div class="xrefTitle">JavaScript → Arrays → Introduction to Arrays</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/arrays/advanced-techniques">Next →</a>
    <div class="xrefTitle">JavaScript → Arrays → Advanced Array Techniques</div>
  </div>
</div>