# Introduction

---
### Overview
---

Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine.

It allows developers to execute JavaScript outside of a browser, making it possible to build server-side applications, APIs, real-time services, and command-line tools using JavaScript.

Because Node.js runs outside the browser, it can do general system-level tasks like working with files and folders, listening for incoming network requests, and interacting with the operating system.

A web browser can only do web browser things, while Node.js can do general “computer-ish” things.

---
### What Node.js Is Used For
---

Node.js is commonly used to build:

- Web servers and APIs
- Real-time applications (chat, streaming, dashboards)
- Command-line tools
- Backend services and microservices

---
### Key Features
---

- **Non-blocking I/O**
  Node.js uses asynchronous, event-driven programming to handle input and output efficiently.

- **Event-driven architecture**
  Operations are handled through events and callbacks rather than blocking execution.

- **Single-threaded with an event loop**
  Node runs JavaScript on a single thread but uses an event loop to manage concurrency.
  Modern Node versions also support worker threads for CPU-intensive tasks.

- **Async/await support**
  When an action may take an unknown amount of time, you can use the await keyword (inside async functions) to wait for it to complete before moving on.

- **npm ecosystem**
  Node ships with npm (Node Package Manager), providing access to a large ecosystem of reusable packages.

- **Cross-platform**
  Node.js runs on Windows, macOS, and Linux.

---
### Running Node
---

When not using npm scripts and you just want to run a JavaScript or TypeScript file directly, you can run a file using:

```shell
node <filename>
```

---
### Verify Installation (Quick Check)
---

```shell
node -v
```

---
### Summary
---

Node.js enables JavaScript to be used beyond the browser, providing a fast, scalable, and flexible runtime for building backend systems and tools.

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/backend/frameworks/koa/advanced/observability/metrics-tracing">← Back</a>
    <div class="xrefTitle">Observability</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/nodejs/basics/fundamentals/event-loop-async-io">Next →</a>
    <div class="xrefTitle">Event Loop & Async I/O</div>
  </div>
</div>
