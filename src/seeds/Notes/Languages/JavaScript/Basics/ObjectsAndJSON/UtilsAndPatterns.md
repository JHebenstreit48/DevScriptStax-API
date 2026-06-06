# Introduction

<hr class="dividerSection" />

## Destructuring Objects

<hr class="dividerSection" />

Object destructuring lets you extract properties from an object into individual variables.

```js
let user = {
  name: "Alice",
  age: 30,
  country: "USA"
};

let { name, age } = user;

console.log(name); // "Alice"
console.log(age);  // 30
```

Destructuring makes your code cleaner and reduces repetition.

<hr class="dividerSubsection1" />

### Renaming While Destructuring

<hr class="dividerSubsection1" />

You can rename properties when destructuring:

```js
let { name: userName, age: userAge } = user;

console.log(userName); // "Alice"
console.log(userAge);  // 30
```

<hr class="dividerSection" />

## Object.freeze() and Object.seal()

<hr class="dividerSection" />

Use these to restrict modification of an object.

<hr class="dividerSubsection1" />

### Object.freeze()

<hr class="dividerSubsection1" />

Prevents all changes — existing properties cannot be modified, and no properties can be added or removed.

```js
let obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // Fails silently or throws in strict mode
```

<hr class="dividerSubsection1" />

### Object.seal()

<hr class="dividerSubsection1" />

Existing properties can be edited, but no new properties can be added and none can be deleted.

```js
let user = { name: "Alice" };
Object.seal(user);
user.name = "Bob"; // Works
user.age = 25;     // Won't be added
```

<hr class="dividerSection" />

## Object.keys(), Object.values(), Object.entries()

<hr class="dividerSection" />

These utilities allow you to loop over or access an object's structure.

```js
let car = {
  make: "Toyota",
  year: 2023
};

console.log(Object.keys(car));    // ["make", "year"]
console.log(Object.values(car));  // ["Toyota", 2023]
console.log(Object.entries(car)); // [["make", "Toyota"], ["year", 2023]]
```

<hr class="dividerSection" />

## Looping Through an Object

<hr class="dividerSection" />

Use a <span class="codeSnip">for...in</span> loop to iterate over an object's keys:

```js
for (let key in car) {
  console.log(key + ": " + car[key]);
}
```

For cleaner syntax, use <span class="codeSnip">Object.entries()</span> with <span class="codeSnip">for...of</span>:

```js
for (let [key, value] of Object.entries(car)) {
  console.log(key + ": " + value);
}
```

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Use destructuring for cleaner variable access.</li>
    <li>Freeze objects to prevent all modification; seal to allow edits but not additions or deletions.</li>
    <li>Loop through keys, values, or entries depending on your goal.</li>
    <li>Combine patterns to simplify your codebase.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/objects-and-json/props-and-methods">← Back</a>
    <div class="xrefTitle">Objects & JSON - Properties and Methods</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/objects-and-json/json">Next →</a>
    <div class="xrefTitle">Objects & JSON - Working with JSON</div>
  </div>
</div>