# What Are Primitive Data Types?

<hr class="dividerSection" />

In JavaScript, a <span class="emphasis">primitive</span> is data that is not an object and has no methods.

These values are immutable, they cannot be changed, and are passed by value, not reference.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>JavaScript has 7 primitive data types.</li>
    <li>Each represents a simple, singular value.</li>
  </ul>
</div>

<hr class="dividerSection" />

## List of Primitive Types

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">String</span>, represents text.</li>
    <li><span class="emphasis">Number</span>, represents integers and floats.</li>
    <li><span class="emphasis">Boolean</span>, true or false logic.</li>
    <li><span class="emphasis">Null</span>, intentional absence of any value.</li>
    <li><span class="emphasis">Undefined</span>, a declared variable with no value.</li>
    <li><span class="emphasis">Symbol</span>, unique and immutable identifier, ES6.</li>
    <li><span class="emphasis">BigInt</span>, large integers, ES11.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Examples of Each Primitive Type

<hr class="dividerSection" />

```js  
let name = "Alice";               // String
let age = 30;                     // Number
let isLoggedIn = true;            // Boolean
let nickname = null;              // Null
let middleName;                   // Undefined
let id = Symbol("userID");        // Symbol
let big = 12345678901234567890n;  // BigInt
```

<hr class="dividerSection" />

## Key Notes

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Strings</span> are enclosed in single, double, or backtick quotes.</li>
    <li><span class="emphasis">Numbers</span> include both integers and floating points, there is no separate float type.</li>
    <li><span class="codeSnip">null</span> is a special value that means no value.</li>
    <li><span class="codeSnip">typeof null</span> returns <span class="codeSnip">"object"</span>, a known JavaScript bug.</li>
    <li><span class="codeSnip">undefined</span> is the default value of uninitialized variables.</li>
    <li><span class="codeSnip">Symbol</span> values are unique and not equal to any other value.</li>
    <li><span class="codeSnip">BigInt</span> allows safe representation of large integers, using the <span class="codeSnip">n</span> suffix.</li>
  </ul>
</div>

<hr class="dividerSection" />

## typeof Operator Examples

<hr class="dividerSection" />

```js  
typeof "Hello"         // "string"
typeof 42              // "number"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof null            // "object", known bug
typeof Symbol("x")     // "symbol"
typeof 123n            // "bigint"
```

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Primitive types are the foundation of all data in JavaScript.</li>
    <li>They are immutable and compared by value.</li>
    <li>Use <span class="codeSnip">typeof</span> to inspect a value's type, but be careful with <span class="codeSnip">null</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/core/scope-and-context">← Back</a>
    <div class="xrefTitle">Section: JavaScript → Basics → Core Concepts → Scope & Context</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/data-types/complex">Next →</a>
    <div class="xrefTitle">JavaScript → Basics → Data Types → Complex Types & Type Checking</div>
  </div>
</div>