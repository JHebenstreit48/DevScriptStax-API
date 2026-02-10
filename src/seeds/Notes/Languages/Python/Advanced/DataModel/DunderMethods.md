# Dunder Methods

---
### Overview
---

In Python, a <span class="emphasis">dunder</span> is shorthand for <span class="emphasis">double underscore</span>.

Dunder methods:
- Begin and end with double underscores
- Define special behavior for classes
- Are used internally by Python

---
### Common Examples
---

- <span class="emphasis">__init__</span> — constructor
- <span class="emphasis">__str__</span> — string representation
- <span class="emphasis">__len__</span> — length behavior
- <span class="emphasis">__eq__</span> — equality comparison

---
### Example
---

```python
class Book:
    def __init__(self, title):
        self.title = title

    def __str__(self):
        return f"Book: {self.title}"

book = Book("Python Basics")
print(book)
```

---
### Why Dunder Methods Matter
---

They allow your objects to:
- Work with built-in functions
- Behave like native Python types
- Integrate cleanly with the language

---
### Summary
---

- Dunder methods customize class behavior
- They power Python’s object model
- You’ll encounter them often in advanced Python

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/python/basics/core-concepts/oop">← Back</a>
    <div class="xrefTitle">Python Core Concepts → OOP</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/python/advanced/datamodel/iterators-generators">Next →</a>
    <div class="xrefTitle">Python Advanced → Iterators & Generators</div>
  </div>
</div>