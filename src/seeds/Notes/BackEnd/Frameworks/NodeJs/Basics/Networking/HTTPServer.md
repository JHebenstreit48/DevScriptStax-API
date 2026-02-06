# HTTP Server (Node Core)

---
### Overview
---

Node.js can create HTTP servers using the built-in <span class="emphasis">http</span> module, without frameworks like Express.

This page covers:

- Running a Node script from the CLI
- Creating a basic HTTP server with the http module
- Understanding <span class="emphasis">req</span> and <span class="emphasis">res</span>
- Why different URLs do not change output yet

✅ No npm required  
✅ Uses built-in Node modules  
✅ Foundation for routing and frameworks like Express  

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

If the file is named <span class="emphasis">test.js</span>, Node may still run it.

This works because Node attempts to resolve the filename similarly to how <span class="emphasis">require()</span> works.

When you type:

```shell
node test
```

Node checks for:

- test
- test.js
- test.json
- test.node

If <span class="emphasis">test.js</span> exists, Node runs it.

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

You can think of a server like someone answering a phone:
- A call comes in (request)
- The server listens
- The server responds

---
### Creating a Basic HTTP Server
---

```js
const http = require("http")

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/plain")
  res.end("Hello, and welcome to our website.")
})

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/")
})
```

---
### Breaking Down the Code
---

---
### Importing the HTTP Module
---

```js
const http = require("http")
```

- Loads Node’s built-in HTTP module
- No installation required
- Provides tools for creating servers and handling HTTP requests

---
### createServer and the Callback
---

```js
http.createServer((req, res) => {
  res.end("Hello, and welcome to our website.")
})
```

- <span class="emphasis">createServer</span> creates an HTTP server
- It accepts a callback function
- That function runs every time the server receives a request

---
### Request and Response Objects
---

Inside the callback:

- <span class="emphasis">req</span> (request)
  - Information about the incoming request
  - Examples: URL, HTTP method, headers

- <span class="emphasis">res</span> (response)
  - Used to send data back to the client
  - Controls status codes, headers, and response content

---
### Status Codes and Headers (Quick Intro)
---

```js
res.statusCode = 200
res.setHeader("Content-Type", "text/plain")
```

- <span class="emphasis">statusCode</span> tells the browser if the request succeeded
- <span class="emphasis">Content-Type</span> tells the browser what kind of data is being sent
- These become more important as responses grow more complex

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
- The code always calls <span class="emphasis">res.end</span> with the same message
- The requested path is never checked

The requested path is stored in:

```js
req.url
```

Examples:
- "/" for the home page
- "/about" for the about page
- "/pizza" for the pizza page

Since the code does not use <span class="emphasis">req.url</span>, every request gets the same output.

At this stage, the server has no routing logic.

---
### Sending a Response
---

```js
res.end("Hello, and welcome to our website.")
```

- Sends text back to the client
- Ends the response
- Required to complete the request

---
### Starting the Server
---

```js
server.listen(3000)

- Starts the server on port 3000
- Accessible at:
  http://localhost:3000
```

The Node process stays active as long as the server is listening.

---
### Stopping a Running Server
---

To stop the currently running Node process:

- Windows / VS Code terminal: Ctrl + C
- macOS terminal: Ctrl + C

---
### Ports (Quick Concept)
---

A port is a numbered communication channel on your computer.

- Your computer has an IP address
- Ports act like individual doors
- This server listens on door <span class="emphasis">3000</span>

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