# Install & Setup

---
### Installing Express
---

Express is installed using npm.

For details about npm and npx themselves, see:  
<a class="emphasis" href="/frameworks/nodejs/basics/tooling/npm-npx">NodeJs Tooling → Npm & Npx</a>

After installing, you can import it into your file and create an Express app instance.

Full command:

```shell
npm install express
```

Shorthand version:

```shell
npm i express
```

---
### Creating an Express App (Legacy / CommonJS)
---

In the following code:

```js
let express = require("express");
let ourApp = express();
```

---
### Line 1 — let express = require("express");
---

- <span class="codeSnip">let</span>: declares a variable (re-assignable).
- <span class="codeSnip">express</span>: local variable name holding what the module exports.
- <span class="codeSnip">require("express")</span>: CommonJS loader; finds the installed express package in node_modules and returns its export (a function).

---
### Line 2 — let ourApp = express();
---

- Calls that exported function.
- Returns an Express application object (your app instance) used for routes, middleware, and listening.

---
### Creating an Express App (Modern / ES Modules)
---

```js
import express from "express";

const ourApp = express();
```

This uses ES Modules instead of CommonJS. The Express app behaves the same way.
The main difference is how Express is imported.

---
### Starting the Server
---

```js
ourApp.listen(3000);
```

- Starts the server on port 3000.
- The server begins listening for incoming requests.

---
### Full Server Example (Legacy / CommonJS)
---

This is a complete minimal server example using the legacy CommonJS import style.

```js
let express = require("express");
let ourApp = express();

ourApp.use(express.urlencoded({ extended: false }));

ourApp.get("/", function (req, res) {
  res.send(`
    <form action="/answer" method="POST">
      <p>What color is the sky on a clear and sunny day?</p>
      <input name="skyColor" autocomplete="off">
      <button>Submit Answer</button>
    </form>
  `);
});

ourApp.post("/answer", function (req, res) {
  if (req.body.skyColor.toLowerCase() == "blue") {
    res.send(`
      <p>Congrats, that is the correct answer!</p>
      <a href="/">Back to homepage</a>
    `);
  } else {
    res.send(`
      <p>Sorry, that is incorrect.</p>
      <a href="/">Back to homepage</a>
    `);
  }
});

ourApp.listen(3000);
```

---
### Full Server Example (Modern / ES Modules)
---

This is the same server behavior, but using modern ES Modules import style.

```js
import express from "express";

const ourApp = express();

ourApp.use(express.urlencoded({ extended: false }));

ourApp.get("/", (req, res) => {
  res.send(`
    <form action="/answer" method="POST">
      <p>What color is the sky on a clear and sunny day?</p>
      <input name="skyColor" autocomplete="off">
      <button>Submit Answer</button>
    </form>
  `);
});

ourApp.post("/answer", (req, res) => {
  if (req.body.skyColor.toLowerCase() == "blue") {
    res.send(`
      <p>Congrats, that is the correct answer!</p>
      <a href="/">Back to homepage</a>
    `);
  } else {
    res.send(`
      <p>Sorry, that is incorrect.</p>
      <a href="/">Back to homepage</a>
    `);
  }
});

ourApp.listen(3000);
```

---

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/fundamentals/introduction">← Back</a>
    <div class="xrefTitle">ExpressJs Fundamentals → Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/fundamentals/project-structure">Next →</a>
    <div class="xrefTitle">ExpressJs Fundamentals → Project Structure</div>
  </div>
</div>