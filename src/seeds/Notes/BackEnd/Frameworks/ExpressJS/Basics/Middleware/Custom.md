# Custom Middleware in Express

<hr class="dividerSection" />

## What Is Custom Middleware?

<hr class="dividerSection" />

Custom middleware is any function you write yourself that runs during the request lifecycle before reaching a route handler.

It follows the same pattern as built-in Express middleware — accepting <span class="codeSnip">req</span>, <span class="codeSnip">res</span>, and <span class="codeSnip">next</span> as parameters.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Custom middleware can inspect or modify the request and response objects.</li>
    <li>It must either call <span class="codeSnip">next()</span> to pass control to the next function or send a response to end the cycle.</li>
    <li>It can be applied to a single route or globally using <span class="codeSnip">app.use()</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Basic Custom Middleware Structure

<hr class="dividerSection" />

```js
function myMiddleware(req, res, next) {
  // do something with the request or response
  next()
}
```

<hr class="dividerSection" />

## Common Use Cases

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Logging incoming requests for debugging or monitoring.</li>
    <li>Checking authentication or authorization before allowing access to a route.</li>
    <li>Validating or sanitizing incoming data before it reaches the route handler.</li>
    <li>Adding custom headers to every response.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/middleware/core">← Back</a>
    <div class="xrefTitle">ExpressJS → Middleware → Core Middleware</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/frameworks/express/basics/data/json-urlencoded">Next →</a>
    <div class="xrefTitle">Section: ExpressJS → Data Handling → JSON & urlencoded</div>
  </div>
</div>