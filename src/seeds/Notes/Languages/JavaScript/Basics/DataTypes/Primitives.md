<br>

---

### What Are Primitive Data Types?

---

In JavaScript, a **primitive** is data that is not an object and has no methods.  
These values are immutable (they cannot be changed) and are passed by value, not reference.

✅ JavaScript has 7 primitive data types.  
✅ Each represents a simple, singular value.

---

### List of Primitive Types

---

🔹 <span class="emphasis">String</span> – represents text  
🔹 <span class="emphasis">Number</span> – represents integers and floats  
🔹 <span class="emphasis">Boolean</span> – true or false logic  
🔹 <span class="emphasis">Null</span> – intentional absence of any value  
🔹 <span class="emphasis">Undefined</span> – a declared variable with no value  
🔹 <span class="emphasis">Symbol</span> – unique and immutable identifier (ES6)  
🔹 <span class="emphasis">BigInt</span> – large integers (ES11)

---

### Examples of Each Primitive Type

```js
let name = "Alice";               // String  
let age = 30;                     // Number  
let isLoggedIn = true;           // Boolean  
let nickname = null;             // Null  
let middleName;                  // Undefined  
let id = Symbol("userID");       // Symbol  
let big = 12345678901234567890n; // BigInt
```

---

### Key Notes

- Strings are enclosed in single, double, or backtick quotes.  
- Numbers include both integers and floating points (no separate float type).  
- null is a special value that means “no value.”  
- typeof null returns "object" (this is a JavaScript bug).  
- undefined is the default value of uninitialized variables.  
- Symbol values are unique and not equal to any other value.  
- BigInt allows safe representation of large integers (use the <span class="codeSnip">n</span> suffix).

---

### typeof Operator Examples

```js
typeof "Hello"         // "string"  
typeof 42              // "number"  
typeof true            // "boolean"  
typeof undefined       // "undefined"  
typeof null            // "object" ← known bug  
typeof Symbol("x")     // "symbol"  
typeof 123n            // "bigint"
```

---

### Summary

✅ Primitive types are the foundation of all data in JavaScript.  
✅ They are immutable and compared by value.  
✅ Use typeof to inspect a value's type — but be careful with null!

---
