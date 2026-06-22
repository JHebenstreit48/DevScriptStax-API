# Introduction to Node.js

<hr class="dividerSection" />

## Overview

<hr class="dividerSection" />

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

It allows developers to execute JavaScript outside of a browser, making it possible to build server-side applications, APIs, real-time services, and command-line tools using JavaScript.

Because Node.js runs outside the browser, it can do general system-level tasks like working with files and folders, listening for incoming network requests, and interacting with the operating system.

A web browser can only do web browser things, while Node.js can do general computer-level things.

<hr class="dividerSection" />

## What Node.js Is Used For

<hr class="dividerSection" />

Node.js is commonly used to build:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Web servers and APIs</li>
    <li>Real-time applications (chat, streaming, dashboards)</li>
    <li>Command-line tools</li>
    <li>Backend services and microservices</li>
  </ul>
</div>

<hr class="dividerSection" />

## Key Features

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Non-blocking I/O</span> — Node.js uses asynchronous, event-driven programming to handle input and output efficiently.</li>
    <li><span class="emphasis">Event-driven architecture</span> — Operations are handled through events and callbacks rather than blocking execution.</li>
    <li><span class="emphasis">Single-threaded with an event loop</span> — Node runs JavaScript on a single thread but uses an event loop to manage concurrency. Modern Node versions also support worker threads for CPU-intensive tasks.</li>
    <li><span class="emphasis">Async/await support</span> — When an action may take an unknown amount of time, you can use the <span class="codeSnip">await</span> keyword inside async functions to wait for it to complete before moving on.</li>
    <li><span class="emphasis">npm ecosystem</span> — Node ships with npm (Node Package Manager), providing access to a large ecosystem of reusable packages.</li>
    <li><span class="emphasis">Cross-platform</span> — Node.js runs on Windows, macOS, and Linux.</li>
  </ul>
</div>

<hr class="dividerSection" />

## What a Server Is

<hr class="dividerSection" />

A server is a program or device that responds to client requests by delivering data, services, or other resources.

Servers are essential in web development to handle HTTP requests and serve responses back to the browser or client.

<hr class="dividerSection" />

## Running Node

<hr class="dividerSection" />

When not using npm scripts and you just want to run a JavaScript file directly, you can run a file using:

```shell
node <filename>
```

<hr class="dividerSection" />

## Verify Installation

<hr class="dividerSection" />

```shell
node -v
```

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

Node.js enables JavaScript to be used beyond the browser, providing a fast, scalable, and flexible runtime for building backend systems and tools.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/koa/advanced/observability/metrics-tracing">← Back</a>
    <div class="xrefTitle">Topic: Koa.js → Observability → Metrics & Tracing</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/nodejs/basics/fundamentals/event-loop-async-io">Next →</a>
    <div class="xrefTitle">Node.js → Fundamentals → Event Loop & Async I/O</div>
  </div>
</div>