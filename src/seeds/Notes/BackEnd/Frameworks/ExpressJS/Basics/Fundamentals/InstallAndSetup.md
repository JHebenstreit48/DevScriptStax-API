# Setting Up an Express Application

<hr class="dividerSection" />

## Installing Express

<hr class="dividerSection" />

Express is installed using npm. Full command:

```shell
npm install express
```

Shorthand version:

```shell
npm i express
```

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/frameworks/nodejs/basics/tooling/npm-npx">Node.js → Basics → Tooling → npm & npx</a>
</div>

<hr class="dividerSection" />

## Creating an Express App

<hr class="dividerSection" />

After installing, import Express and create an app instance. There are two syntax styles depending on whether your project uses CommonJS or ES Modules.

<hr class="dividerSubsection1" />

### Legacy Syntax (CommonJS)

<hr class="dividerSubsection1" />

```js
let express = require("express");
let ourApp = express();
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">let express = require("express")</span> — uses the CommonJS loader to find the installed Express package in node_modules and returns its export, which is a function.</li>
    <li><span class="codeSnip">let ourApp = express()</span> — calls that exported function and returns an Express application object used for routes, middleware, and listening.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Modern Syntax (ES Modules)

<hr class="dividerSubsection1" />

```js
import express from "express";

const ourApp = express();
```

This uses ES Modules instead of CommonJS. The Express app behaves the same way — the main difference is how Express is imported.

<hr class="dividerSection" />

## Starting the Server

<hr class="dividerSection" />

```js
ourApp.listen(3000);
```

This starts the server on port 3000 and begins listening for incoming requests.

<hr class="dividerSection" />

## Full Server Example

<hr class="dividerSection" />

<hr class="dividerSubsection1" />

### Legacy Syntax (CommonJS)

<hr class="dividerSubsection1" />

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

<hr class="dividerSubsection1" />

### Modern Syntax (ES Modules)

<hr class="dividerSubsection1" />

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

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/fundamentals/introduction">← Back</a>
    <div class="xrefTitle">Express → Fundamentals → Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/fundamentals/project-structure">Next →</a>
    <div class="xrefTitle">Express → Fundamentals → Project Structure</div>
  </div>
</div>