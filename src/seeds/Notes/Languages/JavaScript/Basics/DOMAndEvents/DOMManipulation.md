# Introduction

<hr class="dividerSection" />

## What Is the DOM?

<hr class="dividerSection" />

The <span class="emphasis">DOM</span> (Document Object Model) represents the structure of a web page in the browser.

JavaScript can interact with the DOM to:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Select elements</li>
    <li>Read or update content</li>
    <li>Modify attributes and classes</li>
    <li>Insert or remove HTML</li>
  </ul>
</div>

<hr class="dividerSection" />

## Selecting Elements

<hr class="dividerSection" />

JavaScript can locate elements in the page using built-in DOM methods.

```js
document.getElementById("ourForm")
```

This returns the HTML element whose <span class="codeSnip">id</span> attribute matches the provided value. Because HTML elements are represented as objects in JavaScript, this method returns an object representing that element.

<hr class="dividerSubsection1" />

### Storing Elements in Variables

<hr class="dividerSubsection1" />

You can store a selected element in a variable so you can reuse it without calling <span class="codeSnip">getElementById()</span> repeatedly.

```js
let createField = document.getElementById("create-field")
```

Once stored, the variable can be used anywhere in your code to read or update that element:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">createField.value</span> — reads the current input value</li>
    <li><span class="codeSnip">createField.value = ""</span> — clears the input field</li>
    <li><span class="codeSnip">createField.focus()</span> — places the cursor back into the field</li>
  </ul>
</div>

This keeps your code cleaner and more efficient than selecting the same element multiple times.

<hr class="dividerSection" />

## Reading and Updating Content

<hr class="dividerSection" />

Once an element is selected, its content can be read or updated.

```js
element.innerHTML = "New content"
```

The <span class="codeSnip">innerHTML</span> property gets or sets the HTML inside an element. This allows dynamic modification of a webpage's structure and content.

<hr class="dividerSection" />

## Working with Form Inputs

<hr class="dividerSection" />

Form elements expose properties that allow reading and updating user input.

```js
ourField.value = ""
ourField.focus()
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Setting <span class="codeSnip">value</span> clears the input field.</li>
    <li><span class="codeSnip">focus()</span> places the cursor back into the field.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Inserting HTML into the Page

<hr class="dividerSection" />

New HTML can be inserted into the DOM without replacing existing content.

```js
ourList.insertAdjacentHTML("beforeend", ourHTML)
```

This inserts the provided HTML string at a specific position relative to the target element.

<hr class="dividerSection" />

## Removing Elements from the Page

<hr class="dividerSection" />

An element can be removed from the DOM entirely using the <span class="codeSnip">.remove()</span> method.

```js
element.remove()
```

This immediately detaches the element from the page. It is commonly used after a successful delete operation to reflect the change in the UI without a page reload.

<hr class="dividerSection" />

## Traversing the DOM

<hr class="dividerSection" />

When handling events on a child element such as a button, you often need to access a parent element higher up the tree.

```js
e.target.parentElement.parentElement.remove()
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">e.target</span> refers to the element that was clicked.</li>
    <li><span class="codeSnip">parentElement</span> climbs one level up the DOM tree.</li>
    <li>Chaining it twice reaches the grandparent element — in this case the full list item.</li>
  </ul>
</div>

This pattern is commonly used when a button sits inside nested elements and you need to remove or update the entire containing block.

<hr class="dividerSection" />

## Attributes and Element State

<hr class="dividerSection" />

DOM elements can store and expose attribute values.

```js
element.getAttribute("data-id")
```

This retrieves the value of a specified attribute as a string. Attributes such as <span class="codeSnip">data-id</span> are often used to connect DOM elements to application data.

<hr class="dividerSection" />

## DOM Utilities

<hr class="dividerSection" />

Some DOM methods help inspect and query relationships between elements in more flexible ways.

<hr class="dividerSubsection1" />

### querySelector() and querySelectorAll()

<hr class="dividerSubsection1" />

These methods select elements using CSS selector syntax, making them more flexible than <span class="codeSnip">getElementById()</span>.

```js
document.querySelector(".item-text")
document.querySelectorAll(".list-group-item")
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">querySelector()</span> returns the first matching element.</li>
    <li><span class="codeSnip">querySelectorAll()</span> returns all matching elements as a NodeList.</li>
    <li>Any valid CSS selector can be used — class, id, tag, attribute, or a combination.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### contains()

<hr class="dividerSubsection1" />

The <span class="codeSnip">contains()</span> method checks whether a node exists within another node in the DOM tree.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Returns <span class="codeSnip">true</span> if the node is contained.</li>
    <li>Returns <span class="codeSnip">false</span> otherwise.</li>
  </ul>
</div>

This is commonly used when handling user interactions to determine where an event occurred.

<hr class="dividerSection" />

## Working with Classes

<hr class="dividerSection" />

CSS classes can be added, removed, or checked using <span class="codeSnip">classList</span>.

```js
element.classList.add("active")
element.classList.remove("active")
element.classList.contains("active")
```

This allows JavaScript to control visual state through CSS.

<hr class="dividerSubsection1" />

### classList.contains() in Practice

<hr class="dividerSubsection1" />

<span class="codeSnip">classList.contains()</span> is commonly used inside event listeners to check which type of element was interacted with.

```js
if (e.target.classList.contains("delete-me")) {
  // handle delete
}

if (e.target.classList.contains("edit-me")) {
  // handle edit
}
```

This allows a single event listener to handle multiple interaction types based on the class of the clicked element.

<hr class="dividerSection" />

## Initial Page Load Rendering

<hr class="dividerSection" />

When a page first loads, client-side JavaScript can use raw data from the server to generate and insert HTML into the page without a page reload.

The following pattern combines <span class="codeSnip">map()</span>, <span class="codeSnip">join()</span>, and <span class="codeSnip">insertAdjacentHTML()</span> to render a list of items on initial load:

```js
// Initial Page Load Render
let ourHTML = items.map(function(item) {
  return itemTemplate(item)
}).join('')

document.getElementById("item-list").insertAdjacentHTML("beforeend", ourHTML)
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">items</span> is an array of data from the server available in the global scope.</li>
    <li><span class="codeSnip">.map()</span> runs the <span class="codeSnip">itemTemplate()</span> function once for each item in the array, returning an array of HTML strings.</li>
    <li><span class="codeSnip">.join('')</span> converts that array of HTML strings into a single string with no separators between them.</li>
    <li><span class="codeSnip">insertAdjacentHTML("beforeend", ourHTML)</span> inserts the full HTML string just before the closing tag of the target element.</li>
    <li>The goal is to return the HTML template for each list item and render them all at once on page load.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The DOM represents the structure of a web page as objects JavaScript can interact with.</li>
    <li>Elements are selected using <span class="codeSnip">getElementById()</span>, <span class="codeSnip">querySelector()</span>, or <span class="codeSnip">querySelectorAll()</span>.</li>
    <li>Content is read or updated using <span class="codeSnip">innerHTML</span>.</li>
    <li>Form inputs are managed using <span class="codeSnip">value</span> and <span class="codeSnip">focus()</span>.</li>
    <li>HTML is inserted using <span class="codeSnip">insertAdjacentHTML()</span>.</li>
    <li>Elements are removed from the page using <span class="codeSnip">.remove()</span>.</li>
    <li><span class="codeSnip">parentElement</span> traversal climbs up the DOM tree from a child element.</li>
    <li>Attributes like <span class="codeSnip">data-id</span> connect DOM elements to application data.</li>
    <li>Classes are managed using <span class="codeSnip">classList</span> methods.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/objects-and-json/json">← Back</a>
    <div class="xrefTitle">Section: Objects & JSON - Working with JSON</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/dom/event-handling">Next →</a>
    <div class="xrefTitle">DOM and Events - Event Handling</div>
  </div>
</div>