# Variables and Types

---
### Overview
---

Variables store values that can be used and reused throughout a program.

Python is <span class="emphasis">dynamically typed</span>, meaning you do not have to explicitly declare a variable’s type.

---
### Assigning Variables
---

```python
x = 10
name = "Alice"
is_active = True
```

- Variables are created by assignment
- The type is inferred automatically

---
### Primitive Data Types
---

Common primitive types include:

- <span class="emphasis">int</span> — integers
- <span class="emphasis">float</span> — decimal numbers
- <span class="emphasis">str</span> — strings
- <span class="emphasis">bool</span> — booleans

---
### Collections Overview
---

Python has four built-in data types for storing collections of data:

- Lists
- Tuples
- Sets
- Dictionaries

---
### Lists
---

Lists store ordered collections of items.

- Created using square brackets
- Indexed starting at <span class="secondEmphasis">0</span>

```python
numbers = [1, 2, 3, 4]
names = ["Alice", "Bob"]
```

---
### Tuples
---

Tuples are similar to lists, but immutable.

```python
coordinates = (10, 20)
```

---
### Dictionaries
---

A <span class="emphasis">dictionary</span> is equivalent to an object in JavaScript.

- Stores key-value pairs
- Keys are used to access values

```python
user = {
    "name": "Alice",
    "age": 25
}
```
Accessing a value:

```python
user["name"]
```

---
### Summary
---

- Python variables are dynamically typed
- Lists, tuples, sets, and dictionaries store collections
- Dictionaries map keys to values (like JS objects)

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/python/basics/fundamentals/control-flow">← Back</a>
    <div class="xrefTitle">Python Fundamentals → Control Flow</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/python/basics/core-concepts/functions-and-modules">Next →</a>
    <div class="xrefTitle">Python Core Concepts → Functions and Modules</div>
  </div>
</div>