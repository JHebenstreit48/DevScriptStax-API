# The Event Loop and Asynchronous I/O

<hr class="dividerSection" />

## The Big Idea

<hr class="dividerSection" />

Node.js is designed to handle input/output (I/O) efficiently.

Instead of waiting (blocking) for slow tasks like:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Reading files</li>
    <li>Network requests</li>
    <li>Database calls</li>
  </ul>
</div>

Node.js uses asynchronous behavior so other work can continue while these operations are in progress.

<hr class="dividerSection" />

## Synchronous vs Asynchronous Code

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Synchronous</span> — Executes code from top to bottom as quickly as possible. Each line must finish before the next one starts.</li>
    <li><span class="emphasis">Asynchronous</span> — Handles tasks that require waiting such as API calls or database queries without blocking execution. Other code can run while waiting.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Non-blocking I/O

<hr class="dividerSection" />

Node.js uses asynchronous, event-driven programming to handle input/output operations efficiently.

This non-blocking approach allows Node to handle many concurrent operations without stopping execution while waiting for I/O to complete.

<hr class="dividerSection" />

## Single Thread + Event Loop

<hr class="dividerSection" />

Node.js operates on a single thread, but uses an event loop to manage concurrency.

Rather than blocking and waiting for slow operations to finish, Node.js registers a callback and moves on.

When the operation completes, the event loop picks up the callback and runs it.

The event loop allows Node.js to:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Schedule asynchronous tasks</li>
    <li>Execute callbacks when operations complete</li>
    <li>Keep the application responsive under load</li>
    <li>Modern versions also support worker threads for CPU-intensive tasks that would otherwise block the event loop</li>
  </ul>
</div>

<hr class="dividerSection" />

## Async/Await

<hr class="dividerSection" />

When something is asynchronous and you don't know how long it will take, but you want to wait for it to finish before continuing, you can use <span class="codeSnip">await</span> inside an <span class="codeSnip">async</span> function.

This provides a more readable, synchronous-looking way to work with asynchronous code.

```js
async function go() {
  const result = await someAsyncOperation();
  console.log(result);
}
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">async</span> marks a function as asynchronous.</li>
    <li><span class="codeSnip">await</span> pauses execution inside that function until the Promise resolves.</li>
    <li>Code after the <span class="codeSnip">await</span> line only runs once the awaited operation has finished.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Notes & Best Practices

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Use <span class="emphasis">async/await</span> or Promises to handle asynchronous operations effectively.</li>
    <li>Always handle errors using <span class="emphasis">try...catch</span> blocks or <span class="emphasis">.catch()</span> for Promises.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Node.js handles many tasks using asynchronous, non-blocking behavior.</li>
    <li>The event loop enables concurrency while running on a single thread.</li>
    <li><span class="codeSnip">async</span>/<span class="codeSnip">await</span> is a common and readable way to manage async flow in JavaScript.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/nodejs/basics/fundamentals/introduction">← Back</a>
    <div class="xrefTitle">Node.js → Fundamentals → Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/nodejs/basics/fundamentals/runtime-globals">Next →</a>
    <div class="xrefTitle">Node.js → Fundamentals → Runtime & Globals</div>
  </div>
</div>