# What Are Built-in Methods?

<hr class="dividerSection" />

<span class="emphasis">Built-in methods</span> are predefined functions provided by JavaScript that you can use on common data types like <span class="secondEmphasis">strings</span> and <span class="secondEmphasis">numbers</span>.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>They help you manipulate and evaluate data easily.</li>
    <li><span class="emphasis">Methods</span> are called with parentheses <span class="codeSnip">()</span> after the value.</li>
    <li><span class="emphasis">Strings</span> and numbers have many helpful methods available without you needing to define them yourself.</li>
  </ul>
</div>

<hr class="dividerSection" />

## String Methods

<hr class="dividerSection" />

<hr class="dividerSubsection1" />

### .toUpperCase()

<hr class="dividerSubsection1" />

Converts a string to uppercase letters.

```js  
let name = "alice";
console.log(name.toUpperCase()); // "ALICE"
```

<hr class="dividerSubsection1" />

### .toLowerCase()

<hr class="dividerSubsection1" />

Converts a string to lowercase.

```js  
let title = "JAVASCRIPT";
console.log(title.toLowerCase()); // "javascript"
```

<hr class="dividerSubsection1" />

### .charAt()

<hr class="dividerSubsection1" />

Returns the character at a specific index.

```js  
let word = "hello";
console.log(word.charAt(1)); // "e"
```

<hr class="dividerSubsection1" />

### .trim()

<hr class="dividerSubsection1" />

Removes whitespace from both ends of a string.

```js  
let messy = "  clean me  ";
console.log(messy.trim()); // "clean me"
```

<hr class="dividerSubsection1" />

### .split()

<hr class="dividerSubsection1" />

Splits a string into an array using a separator.

```js  
let sentence = "apple,banana,grape";
let fruits = sentence.split(",");
console.log(fruits); // ["apple", "banana", "grape"]
```

<hr class="dividerSection" />

## Number Methods and Utilities

<hr class="dividerSection" />

<hr class="dividerSubsection1" />

### .toFixed()

<hr class="dividerSubsection1" />

Rounds a number to a fixed number of decimal places and returns a string.

```js  
let price = 5.6789;
console.log(price.toFixed(2)); // "5.68"
```

<hr class="dividerSubsection1" />

### parseInt()

<hr class="dividerSubsection1" />

Converts a string into an integer, a whole number.

```js  
let strNum = "42";
console.log(parseInt(strNum)); // 42
```

<hr class="dividerSubsection1" />

### parseFloat()

<hr class="dividerSubsection1" />

Converts a string into a floating-point number, decimal supported.

```js  
let value = "3.14";
console.log(parseFloat(value)); // 3.14
```

<hr class="dividerSubsection1" />

### isNaN()

<hr class="dividerSubsection1" />

Checks if a value is <span class="emphasis">Not a Number</span>.

```js  
console.log(isNaN("hello")); // true
console.log(isNaN(123));     // false
```

<hr class="dividerSection" />

## Type Conversion Helpers

<hr class="dividerSection" />

<hr class="dividerSubsection1" />

### String()

<hr class="dividerSubsection1" />

Converts a value into a string.

```js  
let age = 25;
console.log(String(age)); // "25"
```

<hr class="dividerSubsection1" />

### .replace()

<hr class="dividerSubsection1" />

<span class="emphasis">replace</span> is a JavaScript string method used to find and replace substrings or patterns within a string.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>It searches for specific text or patterns and replaces them with new text.</li>
    <li>It can handle advanced search patterns through regular expressions.</li>
    <li>Commonly used in web development to clean or reformat data, like standardizing numeric strings.</li>
  </ul>
</div>

```js  
let greeting = "Hello World";
let newGreeting = greeting.replace("World", "JavaScript");
console.log(newGreeting); // "Hello JavaScript"
```

<hr class="dividerSubsection1" />

### Number()

<hr class="dividerSubsection1" />

Converts a string or boolean into a number.

```js  
let isTrue = true;
console.log(Number(isTrue)); // 1
```

<hr class="dividerSubsection1" />

### typeof

<hr class="dividerSubsection1" />

Returns the data type of a value.

```js  
let x = "hello";
console.log(typeof x); // "string"
```

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">.toUpperCase()</span>, <span class="codeSnip">.split()</span>, and <span class="codeSnip">.trim()</span> make strings easier to work with.</li>
    <li><span class="codeSnip">parseInt()</span>, <span class="codeSnip">toFixed()</span>, and <span class="codeSnip">isNaN()</span> are essential for number manipulation.</li>
    <li>Use <span class="codeSnip">String()</span> and <span class="codeSnip">Number()</span> to convert between types.</li>
    <li><span class="codeSnip">typeof</span> helps you check what kind of data you are working with.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/core/operators">← Back</a>
    <div class="xrefTitle">JavaScript → Basics → Core Concepts → Operators</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/core/conditionals">Next →</a>
    <div class="xrefTitle">JavaScript → Basics → Core Concepts → Conditionals</div>
  </div>
</div>