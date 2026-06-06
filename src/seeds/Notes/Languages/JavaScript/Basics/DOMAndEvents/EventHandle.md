# Introduction

<hr class="dividerSection" />

## The Event Object

<hr class="dividerSection" />

When an event occurs in the browser, JavaScript automatically creates an <span class="emphasis">Event object</span> that contains information about what happened — including the type of event, the element that triggered it, and more.

<hr class="dividerSubsection1" />

### Placeholder for an Event

<hr class="dividerSubsection1" />

The parameter <span class="emphasis">(e)</span> inside a <span class="secondEmphasis">function</span> serves as a placeholder for the <span class="emphasis">Event object</span>. It allows access to <span class="secondEmphasis">event properties</span>.

```js
document.querySelector("button").addEventListener("click", (e) => {
  console.log("Button clicked", e.type); // Outputs: Button clicked click
});
```

<hr class="dividerSection" />

## Preventing Default Behavior

<hr class="dividerSection" />

The <span class="emphasis">preventDefault()</span> method stops the browser's default behavior, such as submitting a form or navigating a link.

```js
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Default form submission prevented");
});
```

This is especially useful when you want to handle form submissions manually — for example, sending data to a server without reloading the page.

<hr class="dividerSubsection1" />

### Example: Create Form Submit Without Page Reload

<hr class="dividerSubsection1" />

```js
let createField = document.getElementById("create-field")

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault()
  axios
    .post("/create-item", { text: createField.value })
    .then(function (response) {
      document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data))
      createField.value = ""
      createField.focus()
    })
    .catch(function () {
      console.log("Please try again later.")
    })
})
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">e.preventDefault()</span> stops the form from reloading the page on submit.</li>
    <li>The input value is read from <span class="codeSnip">createField.value</span> and sent to the server.</li>
    <li>On success, the new item is inserted into the list using <span class="codeSnip">insertAdjacentHTML()</span>.</li>
    <li>The input field is then cleared and refocused for the next entry.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Event Delegation

<hr class="dividerSection" />

Instead of adding individual event listeners to each button, a single listener can be placed on a parent element — or even <span class="codeSnip">document</span> — to handle events from any matching child.

```js
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-me")) {
    // handle delete
  }

  if (e.target.classList.contains("edit-me")) {
    // handle edit
  }
})
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">e.target</span> refers to the specific element that was clicked.</li>
    <li><span class="codeSnip">classList.contains()</span> checks whether the clicked element has a specific class.</li>
    <li>This pattern works even for elements added to the page dynamically after the listener was set up.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Confirming Before Deleting

<hr class="dividerSection" />

Before performing a destructive action like deleting an item, it is good practice to ask the user to confirm.

```js
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Do you really want to delete this item permanently?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then(function () {
          e.target.parentElement.parentElement.remove()
        })
        .catch(function () {
          console.log("Please try again later.")
        })
    }
  }
})
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">confirm()</span> shows a browser popup with OK and Cancel options.</li>
    <li>If the user clicks Cancel, the deletion is skipped entirely.</li>
    <li>On confirmation, the item is removed from the database and then from the DOM using <span class="codeSnip">.remove()</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Guarding Against Empty Submissions

<hr class="dividerSection" />

When prompting a user for input — such as editing an item — wrapping the action in an <span class="codeSnip">if (userInput)</span> check prevents empty or cancelled values from being submitted.

```js
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt("Enter your desired new text", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
    if (userInput) {
      axios
        .post("/update-item", { text: userInput, id: e.target.getAttribute("data-id") })
        .then(function () {
          e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
        })
        .catch(function () {
          console.log("Please try again later.")
        })
    }
  }
})
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">prompt()</span> shows a browser input dialog pre-filled with the current item text.</li>
    <li>If the user clicks Cancel or submits an empty value, <span class="codeSnip">userInput</span> is falsy and nothing is sent.</li>
    <li>On a valid input, the server is updated and the DOM reflects the new text immediately.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The event object <span class="codeSnip">(e)</span> provides access to event properties and the target element.</li>
    <li><span class="codeSnip">preventDefault()</span> stops default browser behavior such as form submission page reloads.</li>
    <li>Event delegation on <span class="codeSnip">document</span> handles clicks on dynamically added elements.</li>
    <li><span class="codeSnip">confirm()</span> prompts the user before performing destructive actions.</li>
    <li>Wrapping updates in <span class="codeSnip">if (userInput)</span> prevents empty or cancelled submissions from reaching the server.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/dom/dom-manipulation">← Back</a>
    <div class="xrefTitle">DOM and Events - DOM Manipulation</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/javascript/basics/es6/features-introduction">Next →</a>
    <div class="xrefTitle">Section: Modern ES6 - ES6 Features Introduction</div>
  </div>
</div>