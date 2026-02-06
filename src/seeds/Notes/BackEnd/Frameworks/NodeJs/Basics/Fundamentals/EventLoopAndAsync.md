# Event Loop & Async I/O

---
### The Big Idea
---

Node.js is designed to handle input/output (I/O) efficiently.

Instead of waiting (blocking) for slow tasks like:

- Reading files
- Network requests
- Database calls

Node.js uses asynchronous behavior so other work can continue while these operations are in progress.

---
### Non-blocking I/O
---

Node.js uses asynchronous, event-driven programming to handle input/output operations efficiently.

This non-blocking approach allows Node to handle many concurrent operations without stopping execution while waiting for I/O to complete.

---
### Single Thread + Event Loop
---

Node.js operates on a single thread, but uses an event loop to manage concurrency.

The event loop allows Node.js to:
- Schedule asynchronous tasks
- Execute callbacks when operations complete
- Keep the application responsive under load

<div class="fullWidthBullet">

🔹 Modern versions also support worker threads for CPU-intensive tasks  

</div>

---
### Async / Await (Quick Note)
---

When something is asynchronous and you don’t know how long it will take, but you want to wait for it to finish before continuing, you can use <span class="codeSnip">await</span> (inside an <span class="codeSnip">async</span> function).

This provides a more readable, synchronous-looking way to work with asynchronous code.

---
### Notes & Best Practices
---

<div class="fullWidthBullet">

🔹 Use <span class="emphasis">async/await</span> or Promises to handle asynchronous operations effectively  
🔹 Always handle errors using <span class="emphasis">try...catch</span> blocks or <span class="emphasis">.catch()</span> for Promises  

</div>

---
### Summary
---

- Node.js handles many tasks using asynchronous, non-blocking behavior
- The event loop enables concurrency while running on a single thread
- <span class="codeSnip">async</span>/<span class="codeSnip">await</span> is a common and readable way to manage async flow in JavaScript
