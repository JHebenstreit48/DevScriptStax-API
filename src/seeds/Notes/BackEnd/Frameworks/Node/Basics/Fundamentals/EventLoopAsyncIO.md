# Event Loop & Async I/O


---
### Non-blocking I/O
---

Node.js uses asynchronous, event-driven programming to handle input/output operations efficiently.

---
### Single Thread + Event Loop
---

Node.js operates on a single thread, but uses an event loop to manage concurrency.

<div class="fullWidthBullet">

🔹 Modern versions also support worker threads for CPU-intensive tasks  

</div>

---
### Notes & Best Practices (From Existing Notes)
---

<div class="fullWidthBullet">

🔹 Use <span class="emphasis">async/await</span> or Promises to handle asynchronous operations effectively  
🔹 Always handle errors using <span class="emphasis">try...catch</span> blocks or <span class="emphasis">.catch()</span> for Promises  

</div>
