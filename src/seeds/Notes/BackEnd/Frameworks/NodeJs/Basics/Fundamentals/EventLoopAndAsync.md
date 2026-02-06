## Event Loop & Async I/O (Basics)

---
### The Big Idea
---

Node.js is designed to handle input/output (I/O) efficiently.

Instead of waiting (blocking) for slow tasks like:
- Reading files
- Network requests
- Database calls

Node uses asynchronous behavior so other work can continue.

---

### Async / Await (Quick Note)
---

When something is asynchronous and you don’t know how long it will take, but you want to wait for it to finish before continuing, you can use <span class="codeSnip">await</span> (inside an <span class="codeSnip">async</span> function).

---

### Summary
---

- Node handles many tasks using asynchronous behavior
- This helps avoid blocking the program while waiting on I/O
- <span class="codeSnip">async</span>/<span class="codeSnip">await</span> is a common way to manage async flow in JavaScript

---
