# What Are Properties and Methods?

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>An <span class="emphasis">object</span> in JavaScript can hold both data and behavior.</li>
    <li>A <span class="emphasis">property</span> is a key-value pair representing data.</li>
    <li>A <span class="emphasis">method</span> is a function that lives inside an object.</li>
  </ul>
</div>

Think of an object as a toolkit — its <span class="secondEmphasis">properties</span> are the tools, and its <span class="secondEmphasis">methods</span> are the actions.

<hr class="dividerSection" />

## Adding Properties to an Object

<hr class="dividerSection" />

You can define properties inside the object or add them later using dot or bracket notation.

```js
let person = {
  name: "Alice",
  age: 30
};

person.location = "USA";             // dot notation
person["favorite color"] = "green";  // bracket notation
```

<hr class="dividerSection" />

## Dot Notation vs Bracket Notation

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Dot notation</span> — cleaner and preferred.</li>
    <li><span class="emphasis">Bracket notation</span> — required for special characters, spaces, or dynamic keys.</li>
  </ul>
</div>

```js
let obj = {
  name: "Alice",
  "full name": "Alice A"
};

console.log(obj.name);         // "Alice"
console.log(obj["full name"]); // "Alice A"
```

A period <span class="codeSnip">.</span> is used to look inside an object. For example:

```js
document.body.style.backgroundColor
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">document</span> has a property called <span class="codeSnip">body</span>.</li>
    <li><span class="codeSnip">body</span> has a property called <span class="codeSnip">style</span>.</li>
    <li><span class="codeSnip">style</span> has a property called <span class="codeSnip">backgroundColor</span>.</li>
  </ul>
</div>

<span class="emphasis">Note:</span> <span class="codeSnip">backgroundColor</span> is the JavaScript version of the CSS property <span class="codeSnip">background-color</span>.

Brackets allow dynamic or complex keys such as those stored in variables.

<hr class="dividerSection" />

## Defining Methods Inside Objects

<hr class="dividerSection" />

A method is a function inside an object. There are two ways to define one.

<hr class="dividerSubsection1" />

### Traditional Syntax

<hr class="dividerSubsection1" />

```js
let user = {
  greet: function(name) {
    console.log("Hello, " + name + "!");
  }
};
```

<hr class="dividerSubsection1" />

### Shorthand Method Syntax (Preferred)

<hr class="dividerSubsection1" />

```js
let user = {
  greet(name) {
    console.log("Hello, " + name + "!");
  }
};

user.greet("Alice"); // "Hello, Alice!"
```

<hr class="dividerSubsection1" />

### Key Rule: Shorthand Syntax

<hr class="dividerSubsection1" />

When including a function inside an object, you do NOT need to use the <span class="codeSnip">function</span> keyword. Just place a comma before starting the next method if it is not the last item.

```js
let tool = {
  name: "Hammer",
  use() {
    console.log("Smash!");
  }
};
```

<hr class="dividerSection" />

## Combining Properties and Methods

<hr class="dividerSection" />

An object can contain both properties and methods at the same time.

```js
let dog = {
  name: "Barksalot",
  breed: "Beagle",
  bark() {
    console.log("Woof!");
  }
};

dog.bark(); // "Woof!"
```

<hr class="dividerSection" />

## Real-World Example: addEventListener

<hr class="dividerSection" />

<span class="codeSnip">addEventListener</span> is a method that belongs to the <span class="emphasis">document</span> object in the browser.

```js
document.addEventListener("click", myAmazingFunction);
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The first argument <span class="codeSnip">"click"</span> is the event you are listening for.</li>
    <li>The second argument <span class="codeSnip">myAmazingFunction</span> is the function to run when it happens.</li>
  </ul>
</div>

The document object is part of the browser and includes many built-in methods and properties.

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Properties store data; methods define behavior.</li>
    <li>Dot notation is clean; brackets are flexible.</li>
    <li>Shorthand syntax makes objects easier to write.</li>
    <li>JavaScript objects can contain both data and logic.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/objects-and-json/basics">← Back</a>
    <div class="xrefTitle">Objects & JSON - Objects Basics</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/objects-and-json/utils-and-patterns">Next →</a>
    <div class="xrefTitle">Objects & JSON - Utilities and Patterns</div>
  </div>
</div>