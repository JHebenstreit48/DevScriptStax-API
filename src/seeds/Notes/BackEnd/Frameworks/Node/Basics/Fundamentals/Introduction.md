# Introduction


---
### Overview
---

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to execute JavaScript code outside of a browser.

You can use Node.js to create new files and folders on your computer’s hard drive, listen for incoming network requests, and perform other general system-level tasks.

A web browser can only do web browser things, while Node.js can do general “computer-ish” things.

---
### Key Features
---

- **Non-blocking I/O:** Node.js uses asynchronous, event-driven programming to handle input/output operations efficiently.
- **Single-threaded with Event Loop:** While Node.js operates on a single thread, it uses an event loop to manage concurrency.
- **Asynchronous Control:** When an action may take an unknown amount of time, you can use the <span class="emphasis">await</span> keyword (inside async functions) to wait for it to complete before moving on.
- **Cross-platform:** Runs on Windows, macOS, and Linux.

---
### Running Node
---

When not using npm scripts and just using Node with JavaScript or TypeScript, you can run a file directly using:

shell
node <filename>

---
### Verify Installation (Quick Check)
---

```shell
node -v
```