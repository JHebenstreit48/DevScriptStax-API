# Control Flow

---
### Overview
---

Control flow is how you make decisions and control what code runs in different situations.

In Python, this includes:
- Conditional statements (if / elif / else)
- Loops (while / for)
- Boolean logic
- Error handling (try / except / else / finally)

---
### Boolean Logic (Quick Note)
---

### Inverting Boolean Logic
---

The following <span class="emphasis">operator</span> is used to <span class="emphasis">invert</span> the <span class="emphasis">truth</span> value of a <span class="emphasis">Boolean</span> <span class="secondEmphasis">expression</span>:

```python
not
```

- <span class="emphasis">Equivalent</span> to using <span class="emphasis">!</span> in <span class="emphasis">JavaScript</span>.

---
### Error Handling
---

### Try-Except Blocks
---

A try...except block in Python serves a similar function to a try...catch block in JavaScript/TypeScript:

- The <span class="codeSnip">try</span> block lets you test a block of code for errors.
- The <span class="codeSnip">except</span> block lets you handle the error.
- The <span class="codeSnip">else</span> block lets you execute code when there is no error.
- The <span class="codeSnip">finally</span> block lets you execute code, regardless of the result of the try and except blocks.

---
### Basic Try / Except Example
---

```python
try:
    x = 10 / 0
except ZeroDivisionError:
    print("You cannot divide by zero.")
```

---
### Raise Exceptions
---

The following keyword is used to raise an exception:

```python
raise
```

Example:

```python
if x < 0:
    raise Exception("No numbers below zero.")
```

---
### Notes About "with" (Clarification)
---

Your old notes mention:

- “The Python equivalent of try-catch is: with”

This is not quite accurate.

<span class="emphasis">with</span> is used for <span class="secondEmphasis">context management</span> (like automatically closing files or releasing resources), not as a direct replacement for try/except.

However, <span class="emphasis">with</span> is often used in situations where error-safe cleanup matters (which is why it can feel related).

Example:

```python
with open("file.txt", "r") as f:
    contents = f.read()
```

This helps guarantee the file is closed properly, even if something goes wrong.

If you want, we can add a dedicated note about context managers later under:
- Intermediate → File Handling

---
### Summary
---

- Use <span class="emphasis">not</span> to invert boolean expressions
- Use <span class="emphasis">try / except / else / finally</span> for error handling
- Use <span class="emphasis">raise</span> to throw exceptions intentionally
- <span class="emphasis">with</span> is for context management (resource cleanup), not a direct try/catch equivalent

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/python/basics/fundamentals/basics-and-syntax">← Back</a>
    <div class="xrefTitle">Python Fundamentals → Basics and Syntax</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/python/basics/core-concepts/variables-and-types">Next →</a>
    <div class="xrefTitle">Python Core Concepts → Variables and Types</div>
  </div>
</div>
