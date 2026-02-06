## DOM Manipulation

---

### Overview
---

The <span class="emphasis">DOM</span> (Document Object Model) represents the structure of a web page in the browser.

JavaScript can interact with the DOM to:
- Select elements
- Read or update content
- Modify attributes and classes
- Insert or remove HTML

---

### Selecting Elements
---

JavaScript can locate elements in the page using built-in DOM methods.

```javascript
document.getElementById("ourForm")
```

This returns the HTML element whose <span class="codeSnip">id</span> attribute matches the provided value.

Because HTML elements are represented as objects in JavaScript, this method returns an object representing that element.

---

### Reading and Updating Content
---

Once an element is selected, its content can be read or updated.

```javascript
element.innerHTML = "New content"
```

The <span class="codeSnip">innerHTML</span> property gets or sets the HTML inside an element.

This allows dynamic modification of a webpage’s structure and content.

---

### Working with Form Inputs
---

Form elements expose properties that allow reading and updating user input.

```javascript
ourField.value = ""
ourField.focus()
```

- Setting <span class="codeSnip">value</span> clears the input field
- <span class="codeSnip">focus()</span> places the cursor back into the field

---

### Inserting HTML into the Page
---

New HTML can be inserted into the DOM without replacing existing content.

```javascript
ourList.insertAdjacentHTML("beforeend", ourHTML)
```

This inserts the provided HTML string at a specific position relative to the target element.

---

### Attributes and Element State
---

DOM elements can store and expose attribute values.

```javascript
element.getAttribute("data-id")
```

This retrieves the value of a specified attribute as a string.

Attributes such as <span class="codeSnip">data-id</span> are often used to connect DOM elements to application data.

---

### DOM Utilities
---

Some DOM methods help inspect relationships between elements.

---

### contains()
---

The <span class="codeSnip">contains()</span> method checks whether a node exists within another node in the DOM tree.

It returns:
- <span class="codeSnip">true</span> if the node is contained
- <span class="codeSnip">false</span> otherwise

This is commonly used when handling user interactions to determine where an event occurred.

---

### Working with Classes
---

CSS classes can be added, removed, or checked using <span class="codeSnip">classList</span>.

```javascript
element.classList.add("active")
element.classList.remove("active")
element.classList.contains("active")
```

This allows JavaScript to control visual state through CSS.

---