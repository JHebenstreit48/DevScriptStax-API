# Middleware in Express

<hr class="dividerSection" />

## What Is Middleware?

<hr class="dividerSection" />

Middleware in Express are functions that run during the lifecycle of a request before it reaches the route handler.

<span class="emphasis">Core middleware</span> refers to built-in Express middleware that handles common tasks like parsing incoming request data.

<hr class="dividerSection" />

## Parsing Incoming JSON

<hr class="dividerSection" />

The following Express middleware parses incoming <span class="emphasis">JSON</span> data within the request body, making it readable by the server.

```js
app.use(express.json());
```
Without this middleware, <span class="codeSnip">req.body</span> would be <span class="codeSnip">undefined</span> when the client sends JSON data.

<hr class="dividerSection" />

## Reading Raw Data

<hr class="dividerSection" />

The following Express middleware reads the raw incoming request data and stores it in a <span class="emphasis">buffer object</span>.

```js
app.use(express.raw());
```

This is useful when working with binary data or when you need access to the unprocessed request body.

<hr class="dividerSection" />

## Sanitizing User Input

<hr class="dividerSection" />

<span class="codeSnip">sanitize-html</span> is an npm package used to clean up user-submitted HTML by stripping out dangerous tags and attributes to prevent <span class="emphasis">cross-site scripting (XSS)</span> attacks.

It operates by preserving an allowlist of permitted elements and their specific attributes, while discarding or escaping everything else.

<hr class="dividerSubsection1" />

### Installation

<hr class="dividerSubsection1" />

```shell
npm install sanitize-html
```

<hr class="dividerSubsection1" />

### Importing

<hr class="dividerSubsection1" />

```js
let sanitizeHTML = require('sanitize-html')
```

<hr class="dividerSubsection1" />

### Usage

<hr class="dividerSubsection1" />

Passing empty arrays for <span class="codeSnip">allowedTags</span> and <span class="codeSnip">allowedAttributes</span> strips all HTML from the input entirely.

```js
let safeText = sanitizeHTML(req.body.text, { allowedTags: [], allowedAttributes: {} })
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Always sanitize user input before storing it in a database or sending it back to the browser.</li>
    <li>Setting <span class="codeSnip">allowedTags</span> to <span class="codeSnip">[]</span> and <span class="codeSnip">allowedAttributes</span> to <span class="codeSnip">{}</span> removes all HTML tags and attributes from the submitted text.</li>
    <li>The sanitized value is then safe to use in database operations and responses.</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/glossary/backend/frameworks/nodejs/common-packages">Glossary → Backend → Frameworks → Node.js → Common Packages</a>
</div>

<hr class="dividerSection" />

## The next Parameter

<hr class="dividerSection" />

Middleware functions in Express accept three parameters — <span class="codeSnip">req</span> (request), <span class="codeSnip">res</span> (response), and <span class="codeSnip">next</span>.

Calling <span class="codeSnip">next()</span> tells Express that the current middleware function is finished and to move on to the next function or argument in the chain.

```js
function passwordProtected(req, res, next) {
  // do something
  next() // move on to the next function
}
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>After providing the URL you are listening for, you can provide multiple functions to <span class="codeSnip">app.get()</span> or <span class="codeSnip">app.post()</span>.</li>
    <li>Express calls each function one at a time in order.</li>
    <li>You can provide as many functions as needed as arguments.</li>
    <li>Without calling <span class="codeSnip">next()</span> the request stops at the current middleware and never reaches the route handler.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Applying Middleware to a Single Route

<hr class="dividerSection" />

Middleware can be applied to a specific route by passing it as an argument between the URL and the route handler function.

```js
app.get('/', passwordProtected, function(req, res) {
  // only runs if passwordProtected calls next()
})
```

<hr class="dividerSection" />

## Applying Middleware Globally

<hr class="dividerSection" />

Using <span class="codeSnip">app.use()</span> applies middleware to every incoming request across all routes rather than just one specific route.

```js
app.use(passwordProtected)
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Place <span class="codeSnip">app.use()</span> before your route definitions so it runs first.</li>
    <li>Every request to any route will pass through this middleware before reaching its handler.</li>
    <li>When the custom function calls <span class="codeSnip">next()</span> it moves on to whatever the next function is for that specific route.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">express.json()</span> — parses incoming JSON data and makes it available on <span class="codeSnip">req.body</span>.</li>
    <li><span class="codeSnip">express.raw()</span> — reads raw incoming request data and stores it in a buffer object.</li>
    <li><span class="codeSnip">sanitize-html</span> — strips dangerous HTML tags and attributes from user input to prevent XSS attacks.</li>
    <li>Both built-in and third party middleware are registered using <span class="codeSnip">app.use()</span>.</li>
    <li>The <span class="codeSnip">next</span> parameter tells Express to move on to the next function in the middleware chain.</li>
    <li>Middleware can be applied to a single route or globally to all routes using <span class="codeSnip">app.use()</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/routing/error-handling">← Back</a>
    <div class="xrefTitle">Section: ExpressJS → Routing → Error Handling</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/middleware/custom">Next →</a>
    <div class="xrefTitle">ExpressJS → Middleware → Custom Middleware</div>
  </div>
</div>