## HTTP Server (Node Core)

---
### Overview
---

Node.js can create servers using the built-in HTTP module without frameworks like Express.

This page covers:

- Running a Node script from the CLI
- Creating a basic HTTP server with the http module
- Understanding req and res
- Why /about or other paths do not change the output yet

✅ No npm required
✅ Uses built-in Node modules
✅ Foundation for learning routing and frameworks like Express

---
### Running a Node Script (No npm)
---

To run a JavaScript file directly with Node, use:

```shell
node filename.js
```

Example:

```shell
node test.js
```

---
### Omitting the File Extension
---

You may sometimes see this work:

```shell
node test
```

If the file is named test.js, Node may still run it.

This works because Node attempts to resolve the filename similarly to how require() works.

When you type:

```shell
node test
```

Node checks for:

- test
- test.js
- test.json
- test.node

If test.js exists, Node runs it.

---
### Should You Rely on This?
---

- For learning demos: ✅ fine
- For real projects / notes / muscle memory: ❌ better to be explicit

Best practice:

```shell
node test.js
```

---
### What a Server Does
---

The job of a server is to:

1. Listen for incoming requests
2. Handle each request
3. Send back a response

---
### Creating a Basic HTTP Server
---

```js
let http = require("http")

let ourApp = http.createServer(function (req, res) {
  res.end("Hello, and welcome to our website.")
})

ourApp.listen(3000)
```

---
### Breaking Down the Code
---

### Importing the HTTP Module

```js
let http = require("http")
```

- Loads Node’s built-in HTTP module
- No installation required
- Provides tools for creating servers and handling HTTP requests

---
### createServer and the Callback
---

```js
let ourApp = http.createServer(function (req, res) {
  res.end("Hello, and welcome to our website.")
})
```

- createServer creates an HTTP server
- It accepts a function as an argument
- That function runs every time the server receives a request

---
### Request and Response Objects
---

Inside the callback:

- req (request)
  - Information about the incoming request
  - Examples: URL, HTTP method, headers

- res (response)
  - Used to send data back to the client
  - Controls what the browser receives

---
### Why the Page Does Not Change for /about or Other URLs
---

If you visit:

- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/pizza

You are making different requests, but the server sends the same response.

This happens because:

- The callback runs for every request
- The code always calls res.end with the same message
- The requested path is never checked

The requested path is stored in:

```js
req.url
```

Examples:
- "/" for the home page
- "/about" for the about page
- "/pizza" for the pizza page

Since the code does not use req.url, every request gets the same output.

At this stage, the server has no routing logic.

---
### Sending a Response
---

```javascript
res.end("Hello, and welcome to our website.")
```

- Sends text back to the client
- Ends the response
- Required to complete the request

---
### Starting the Server
---

```javascript
ourApp.listen(3000)
```

- Starts the server on port 3000
- Accessible at:
  http://localhost:3000

The process stays active as long as the server is listening.

---
### Ports (Quick Concept)
---

A port is a numbered communication channel on your computer.

- Your computer has an IP address
- Ports act like individual doors
- This server listens on door 3000

---
### VS Code Terminal Shortcut
---

- Ctrl + ` opens the integrated terminal
- The backtick key shares the same key as ~
- On many keyboards, this requires holding Shift

---
### Summary Table: Node HTTP Server Concepts
---

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Concept</th>
      <th class="tableCellHeader">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">node filename.js</td>
      <td class="tableCell">Runs a JavaScript file with Node</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">require("http")</td>
      <td class="tableCell">Loads Node’s HTTP module</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">createServer()</td>
      <td class="tableCell">Creates an HTTP server</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">req</td>
      <td class="tableCell">Incoming request data</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">res</td>
      <td class="tableCell">Outgoing response control</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">res.end()</td>
      <td class="tableCell">Sends and completes the response</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">listen(port)</td>
      <td class="tableCell">Starts the server on a port</td>
    </tr>
  </tbody>
</table>

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/nodejs/basics/files-streams/streams-basics">← Back</a>
    <div class="xrefTitle">Files & Streams</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/nodejs/basics/networking-core/http-client">Next →</a>
    <div class="xrefTitle">HTTP Client</div>
  </div>
</div>