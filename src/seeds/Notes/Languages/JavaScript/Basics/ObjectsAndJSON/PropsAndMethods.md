## Object Properties and Methods

---

### What Are Properties and Methods?

An <span class="emphasis">object</span> in JavaScript can hold both data and behavior.

- A <span class="emphasis">property</span> is a key-value pair representing data.  
- A <span class="emphasis">method</span> is a function that lives inside an object.

✅ Think of an object as a toolkit — its <span class="secondEmphasis">properties</span> are the tools, and its <span class="secondEmphasis">methods</span> are the actions.

---

### Adding Properties to an Object

You can define properties inside the object or add them later using dot or bracket notation.

```javascript
let person = {
  name: "Alice",
  age: 30
};

person.location = "USA";             // dot notation  
person["favorite color"] = "green";  // bracket notation
```

---

### Dot Notation vs Bracket Notation

You can access object data using either:

- <span class="emphasis">Dot notation</span> → cleaner and preferred  
- <span class="emphasis">Bracket notation</span> → required for special characters or spaces

```javascript
let obj = {
  name: "Alice",
  "full name": "Alice A"
};

console.log(obj.name);         // "Alice"
console.log(obj["full name"]); // "Alice A"
```

A period <span class="codeSnip">.</span> is used to look inside an object.

Example:

```js
document.body.style.backgroundColor
```

This means:
- <span class="codeSnip">document</span> has a property called <span class="codeSnip">body</span>
- <span class="codeSnip">body</span> has a property called <span class="codeSnip">style</span>
- <span class="codeSnip">style</span> has a property called <span class="codeSnip">backgroundColor</span>

- Note: <span class="codeSnip">backgroundColor</span> is the JavaScript version of the CSS property <span class="codeSnip">background-color</span>.

Brackets allow dynamic or complex keys (e.g., from variables).

---

### Defining Methods Inside Objects

A method is a function inside an object. There are two ways to define one:

✅ Traditional syntax:

```javascript
let user = {
  greet: function(name) {
    console.log("Hello, " + name + "!");
  }
};
```

✅ Shorthand method syntax (preferred):

```javascript
let user = {
  greet(name) {
    console.log("Hello, " + name + "!");
  }
};

user.greet("Alice"); // "Hello, Alice!"
```

---

### Key Rule: Shorthand Syntax

When including a function inside an object, you do NOT need to use the <span class="codeSnip">function</span> keyword.  
Just place a comma before starting the next method (if it's not the last item).

```javascript
let tool = {
  name: "Hammer",
  use() {
    console.log("Smash!");
  }
};
```

---

### Combining Properties and Methods

An object can contain both properties and methods at the same time.

```javascript
let dog = {
  name: "Barksalot",
  breed: "Beagle",
  bark() {
    console.log("Woof!");
  }
};

dog.bark(); // "Woof!"
```

---

### Real-World Example: addEventListener

<span class="codeSnip">addEventListener</span> is a method that belongs to the <span class="emphasis">document</span> object in the browser.

```javascript
document.addEventListener("click", myAmazingFunction);
```

- The first argument, <span class="codeSnip">"click"</span>, is the event you're listening for  
- The second argument, <span class="codeSnip">myAmazingFunction</span>, is the function to run when it happens

The document object is part of the browser and includes built-in methods and properties.

---

### Summary

Properties store data  
Methods define behavior  
Dot notation is clean; brackets are flexible  
Shorthand syntax makes objects easier to write  
JavaScript objects can contain both data and logic

---
