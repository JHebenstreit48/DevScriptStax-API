# Object-Oriented Programming (OOP)

---
### Overview
---

Python supports object-oriented programming using classes and objects.

Classes group data and behavior together.

---
### Defining a Class
---

```python
class MyClass:
    pass
```

---
### Constructors (__init__)
---

The constructor runs when a new object is created.

```python
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model
```

---
### Using self
---

<span class="emphasis">self</span> is equivalent to <span class="emphasis">this</span> in JavaScript.

It refers to the current instance of the class.

---
### Example Class
---

```python
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def display_info(self):
        print(f"{self.year} {self.make} {self.model}")

my_car = Car("Toyota", "Corolla", 2021)
my_car.display_info()
```

---
### Summary
---

- Classes define blueprints for objects
- <span class="emphasis">__init__</span> initializes new instances
- <span class="emphasis">self</span> refers to the current object
- Methods define behavior

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/python/basics/core-concepts/functions-and-modules">← Back</a>
    <div class="xrefTitle">Python Core Concepts → Functions and Modules</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/python/advanced/datamodel/dunder-methods">Next →</a>
    <div class="xrefTitle">Python Advanced → Dunder Methods</div>
  </div>
</div>